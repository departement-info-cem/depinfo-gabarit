import React, { useEffect, useRef, useState } from "react";
import type { DataConnection, PeerOptions } from "peerjs";
import Leaderboard from "./Leaderboard";
import { connectToRoom, createStudentPeer } from "./peerUtils";
import type { Player, PeerMessage, QuestionRevealPayload, QuestionShowPayload } from "./types";
import styles from "./Quiz.module.css";

type Phase = "rejoindre" | "connexion" | "attente" | "question" | "reveal" | "fin";

export default function QuizStudent({
  peerOptions,
  onQuit,
}: {
  peerOptions?: PeerOptions;
  onQuit: () => void;
}): JSX.Element {
  const [phase, setPhase] = useState<Phase>("rejoindre");
  const [code, setCode] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [titre, setTitre] = useState("");
  const [question, setQuestion] = useState<QuestionShowPayload | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [reveal, setReveal] = useState<QuestionRevealPayload | null>(null);
  const [players, setPlayers] = useState<Player[]>([]);
  const [timeLeft, setTimeLeft] = useState(0);
  const [reconnecting, setReconnecting] = useState(false);

  const peerRef = useRef<import("peerjs").Peer | null>(null);
  const connRef = useRef<DataConnection | null>(null);

  useEffect(() => {
    return () => {
      peerRef.current?.destroy();
    };
  }, []);

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

  const handleMessage = (data: PeerMessage) => {
    switch (data.type) {
      case "joinAck":
        if (!data.ok) {
          setError(data.message || "Impossible de rejoindre le quiz");
          setPhase("rejoindre");
          return;
        }
        setTitre(data.titre || "");
        setPhase("attente");
        return;
      case "question":
        setQuestion(data.payload);
        setSelected(null);
        setReveal(null);
        setPhase("question");
        return;
      case "reveal":
        setReveal(data.payload);
        setPlayers(data.payload.leaderboard);
        setPhase("reveal");
        return;
      case "end":
        setPlayers(data.leaderboard);
        setPhase("fin");
        return;
      default:
        return;
    }
  };

  const join = async (event: React.FormEvent) => {
    event.preventDefault();
    const trimmedCode = code.trim();
    if (!trimmedCode) return;
    setError(null);
    setPhase("connexion");

    try {
      const peer = await createStudentPeer(peerOptions);
      peerRef.current = peer;
      // Le canal de signalisation peut se déconnecter temporairement (réseau instable,
      // onglet mis en arrière-plan) sans affecter la connexion pair-à-pair déjà établie
      // avec l'enseignant·e : on tente une reconnexion plutôt que de bloquer la partie.
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

      const conn = await connectToRoom(peer, trimmedCode);
      connRef.current = conn;
      conn.send({ type: "join", pseudo } satisfies PeerMessage);
      conn.on("data", (data) => handleMessage(data as PeerMessage));
      conn.on("close", () => setError("La connexion avec l'enseignant·e a été interrompue"));
      conn.on("error", (err) => setError(`Erreur de connexion : ${err.message}`));
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
      setPhase("rejoindre");
    }
  };

  const answer = (choiceIndex: number) => {
    if (selected !== null || !connRef.current?.open) return;
    setSelected(choiceIndex);
    connRef.current.send({ type: "answer", choiceIndex } satisfies PeerMessage);
  };

  if (phase === "rejoindre" || phase === "connexion") {
    return (
      <div className={styles.container}>
        <form className={styles.joinForm} onSubmit={join}>
          <input
            placeholder="Code de la salle"
            value={code}
            onChange={(event) => setCode(event.target.value)}
            required
          />
          <input
            placeholder="Pseudonyme"
            value={pseudo}
            onChange={(event) => setPseudo(event.target.value)}
            maxLength={20}
            required
          />
          <button className="button button--primary" type="submit" disabled={phase === "connexion"}>
            {phase === "connexion" ? "Connexion…" : "Rejoindre"}
          </button>
          {error && <p className={styles.error}>{error}</p>}
        </form>
        <p>
          <button className="button button--link" onClick={onQuit}>
            Retour
          </button>
        </p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <p>{titre}</p>
      {error && <p className={styles.error}>{error}</p>}
      {reconnecting && <p className={styles.error}>Reconnexion au serveur de signalisation…</p>}

      {phase === "attente" && <p>En attente du démarrage du quiz par l'enseignant·e…</p>}

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
            {question.choix.map((choix, index) => (
              <li key={choix}>
                <button
                  className={
                    selected === index
                      ? `${styles.choiceButton} ${styles.choiceSelected}`
                      : styles.choiceButton
                  }
                  onClick={() => answer(index)}
                  disabled={selected !== null}
                >
                  {choix}
                </button>
              </li>
            ))}
          </ul>
          {selected !== null && <p>Réponse envoyée, en attente des autres participant·e·s…</p>}
        </>
      )}

      {phase === "reveal" && question && reveal && (
        <>
          <p>{question.texte}</p>
          <ul className={styles.choices}>
            {question.choix.map((choix, index) => {
              const isCorrect = index === reveal.reponse;
              const isSelectedWrong = index === selected && !isCorrect;
              return (
                <li key={choix}>
                  <button
                    className={
                      isCorrect
                        ? `${styles.choiceButton} ${styles.choiceCorrect}`
                        : isSelectedWrong
                        ? `${styles.choiceButton} ${styles.choiceWrong}`
                        : styles.choiceButton
                    }
                    disabled
                  >
                    {choix}
                  </button>
                </li>
              );
            })}
          </ul>
          <h4>Classement</h4>
          <Leaderboard players={players} highlightPseudo={pseudo} />
        </>
      )}

      {phase === "fin" && (
        <>
          <h4>Résultat final</h4>
          <Leaderboard players={players} highlightPseudo={pseudo} />
        </>
      )}
    </div>
  );
}
