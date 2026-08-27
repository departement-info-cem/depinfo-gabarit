import React, { useEffect, useRef, useState } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import type { DataConnection, Peer, PeerOptions } from "peerjs";
import Leaderboard from "./Leaderboard";
import { QuizRoom, validateQuiz } from "./quizEngine";
import { ROOM_ID_PREFIX, createPeerWithRetry } from "./peerUtils";
import type { Player, PeerMessage, QuestionRevealPayload, QuestionShowPayload } from "./types";
import styles from "./Quiz.module.css";

type Phase = "chargement" | "attente" | "question" | "reveal" | "fin";

export default function QuizTeacher({
  file,
  peerOptions,
  onQuit,
}: {
  /** Chemin vers le fichier JSON de questions, ex: "/quiz/exemple.json" */
  file: string;
  peerOptions?: PeerOptions;
  onQuit: () => void;
}): JSX.Element {
  const [phase, setPhase] = useState<Phase>("chargement");
  const [error, setError] = useState<string | null>(null);
  const [code, setCode] = useState<string | null>(null);
  const [titre, setTitre] = useState("");
  const [players, setPlayers] = useState<Player[]>([]);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [question, setQuestion] = useState<QuestionShowPayload | null>(null);
  const [reveal, setReveal] = useState<QuestionRevealPayload | null>(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [reconnecting, setReconnecting] = useState(false);

  const roomRef = useRef<QuizRoom | null>(null);
  const connectionsRef = useRef<Map<string, DataConnection>>(new Map());
  const peerRef = useRef<Peer | null>(null);
  const fileUrl = useBaseUrl(file);
  const [retryCount, setRetryCount] = useState(0);

  const send = (conn: DataConnection, message: PeerMessage) => {
    if (conn.open) conn.send(message);
  };

  const broadcast = (message: PeerMessage) => {
    for (const conn of connectionsRef.current.values()) send(conn, message);
  };

  const updatePlayers = () => {
    const list = roomRef.current!.leaderboard();
    setPlayers(list);
    broadcast({ type: "players", players: list });
  };

  const handleMessage = (conn: DataConnection, data: PeerMessage) => {
    const room = roomRef.current;
    if (!room) return;

    if (data.type === "join") {
      if (room.status !== "lobby") {
        send(conn, { type: "joinAck", ok: false, message: "Le quiz est déjà commencé" });
        return;
      }
      const pseudo = String(data.pseudo || "").trim().slice(0, 20);
      if (!pseudo) {
        send(conn, { type: "joinAck", ok: false, message: "Pseudonyme requis" });
        return;
      }
      room.players.set(conn.peer, { pseudo, score: 0 });
      send(conn, { type: "joinAck", ok: true, titre: room.quiz.titre });
      updatePlayers();
      return;
    }

    if (data.type === "answer") {
      const accepted = room.recordAnswer(conn.peer, data.choiceIndex);
      send(conn, { type: "answerAck", ok: accepted });
      if (accepted) setAnsweredCount(room.answeredCount());
    }
  };

  useEffect(() => {
    let cancelled = false;
    setPhase("chargement");
    setError(null);

    (async () => {
      try {
        const response = await fetch(fileUrl);
        if (!response.ok) throw new Error("Fichier de quiz introuvable");
        const quiz = validateQuiz(await response.json());
        if (cancelled) return;

        roomRef.current = new QuizRoom(quiz);
        setTitre(quiz.titre || "");

        const peer = await createPeerWithRetry(peerOptions);
        if (cancelled) {
          peer.destroy();
          return;
        }
        peerRef.current = peer;
        setCode(peer.id.slice(ROOM_ID_PREFIX.length));
        setPhase("attente");

        peer.on("connection", (conn: DataConnection) => {
          conn.on("data", (data) => handleMessage(conn, data as PeerMessage));
          conn.on("close", () => {
            connectionsRef.current.delete(conn.peer);
            roomRef.current?.players.delete(conn.peer);
            updatePlayers();
          });
          connectionsRef.current.set(conn.peer, conn);
        });
        // Le canal de signalisation (courtier PeerJS) peut se déconnecter temporairement
        // (réseau instable, onglet mis en arrière-plan) sans affecter les connexions
        // pair-à-pair déjà établies : on tente une reconnexion plutôt que de mettre fin à la partie.
        peer.on("disconnected", () => {
          if (peer.destroyed) return;
          setReconnecting(true);
          peer.reconnect();
        });
        peer.on("open", () => setReconnecting(false));
        peer.on("error", (err) => {
          if (err.type === "network" || err.type === "socket-error" || err.type === "socket-closed") return;
          setError(`Erreur de connexion : ${err.message}`);
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err));
      }
    })();

    return () => {
      cancelled = true;
      peerRef.current?.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fileUrl, retryCount]);

  useEffect(() => {
    if (!question || phase !== "question") return;
    const update = () => {
      const remaining = question.duree - (Date.now() - question.startAt) / 1000;
      setTimeLeft(Math.max(0, Math.ceil(remaining)));
    };
    update();
    const interval = setInterval(update, 250);
    return () => clearInterval(interval);
  }, [question, phase]);

  const emitQuestion = () => {
    const room = roomRef.current!;
    const q = room.currentQuestion();
    const payload: QuestionShowPayload = {
      index: room.currentIndex,
      total: room.quiz.questions.length,
      texte: q.texte,
      choix: q.choix,
      duree: room.questionDuration(),
      startAt: room.questionStartAt,
    };
    setQuestion(payload);
    setReveal(null);
    setAnsweredCount(0);
    setPhase("question");
    broadcast({ type: "question", payload });
  };

  const start = () => {
    roomRef.current?.startQuestion(0);
    emitQuestion();
  };

  const advance = () => {
    const room = roomRef.current;
    if (!room) return;

    if (room.status === "question") {
      const payload = room.reveal();
      setReveal(payload);
      setPlayers(payload.leaderboard);
      setPhase("reveal");
      broadcast({ type: "reveal", payload });
      return;
    }

    if (room.status === "reveal") {
      if (room.hasNextQuestion()) {
        room.startQuestion(room.currentIndex + 1);
        emitQuestion();
      } else {
        room.status = "ended";
        const leaderboard = room.leaderboard();
        setPlayers(leaderboard);
        setPhase("fin");
        broadcast({ type: "end", leaderboard });
      }
    }
  };

  if (error) {
    return (
      <div className={styles.container}>
        <p className={styles.error}>{error}</p>
        <button className="button button--primary" onClick={() => setRetryCount((count) => count + 1)}>
          Réessayer
        </button>
      </div>
    );
  }

  if (phase === "chargement" || !code) {
    return <p>Création de la session… (jusqu'à une dizaine de secondes la première fois)</p>;
  }

  return (
    <div className={styles.container}>
      <p>{titre}</p>
      <p className={styles.roomCode}>{code}</p>
      {reconnecting && <p className={styles.error}>Reconnexion au serveur de signalisation…</p>}

      {phase === "attente" && (
        <>
          <p>Les étudiant·e·s rejoignent avec ce code. {players.length} participant(s) connecté(s).</p>
          <Leaderboard players={players} />
          <button className="button button--primary" onClick={start} disabled={players.length === 0}>
            Démarrer le quiz
          </button>
        </>
      )}

      {phase === "question" && question && (
        <>
          <div className={styles.row}>
            <strong>
              Question {question.index + 1} / {question.total}
            </strong>
            <span className={styles.timer}>{timeLeft}s</span>
          </div>
          <p>{question.texte}</p>
          <ul className={styles.choices}>
            {question.choix.map((choix) => (
              <li key={choix} className={styles.choiceButton}>
                {choix}
              </li>
            ))}
          </ul>
          <p>
            {answeredCount} / {players.length} ont répondu
          </p>
          <button className="button button--primary" onClick={advance}>
            Révéler la réponse
          </button>
        </>
      )}

      {phase === "reveal" && question && reveal && (
        <>
          <p>{question.texte}</p>
          <ul className={styles.choices}>
            {question.choix.map((choix, index) => (
              <li
                key={choix}
                className={
                  index === reveal.reponse
                    ? `${styles.choiceButton} ${styles.choiceCorrect}`
                    : styles.choiceButton
                }
              >
                {choix}
              </li>
            ))}
          </ul>
          <h4>Classement</h4>
          <Leaderboard players={players} />
          <button className="button button--primary" onClick={advance}>
            {question.index + 1 < question.total ? "Question suivante" : "Voir le résultat final"}
          </button>
        </>
      )}

      {phase === "fin" && (
        <>
          <h4>Résultat final</h4>
          <Leaderboard players={players} />
        </>
      )}

      <p>
        <button className="button button--link" onClick={onQuit}>
          Quitter
        </button>
      </p>
    </div>
  );
}
