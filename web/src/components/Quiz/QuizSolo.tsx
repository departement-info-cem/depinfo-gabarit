import React, { JSX, useEffect, useState } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import QuestionText from "./QuestionText";
import { loadQuiz, type QuizData } from "./quizEngine";
import styles from "./Quiz.module.css";

/**
 * Mode solo : l'étudiant·e répond seul·e aux questions, sans chronomètre ni
 * connexion, et voit la bonne réponse aussitôt. À la fin, on peut recommencer
 * ou réessayer seulement les questions ratées.
 */
export default function QuizSolo({ file, onQuit }: { file: string | QuizData; onQuit: () => void }): JSX.Element {
  const fileUrl = useBaseUrl(typeof file === "string" ? file : undefined);
  const [quiz, setQuiz] = useState<QuizData | null>(null);
  const [error, setError] = useState<string | null>(null);
  /** Indices des questions de la série en cours (toutes, ou seulement les ratées). */
  const [serie, setSerie] = useState<number[]>([]);
  const [position, setPosition] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  /** Indices des questions ratées dans la série en cours. */
  const [ratees, setRatees] = useState<number[]>([]);

  const commencer = (indices: number[]) => {
    setSerie(indices);
    setPosition(0);
    setSelected(null);
    setRatees([]);
  };

  useEffect(() => {
    let cancelled = false;
    loadQuiz(file, fileUrl)
      .then((loaded) => {
        if (cancelled) return;
        setQuiz(loaded);
        commencer(loaded.questions.map((_, index) => index));
      })
      .catch((err) => !cancelled && setError(err instanceof Error ? err.message : String(err)));
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fileUrl]);

  const quitter = (
    <p>
      <button className="button button--link" onClick={onQuit}>
        Quitter
      </button>
    </p>
  );

  if (error) {
    return (
      <div className={styles.container}>
        <p className={styles.error}>{error}</p>
        {quitter}
      </div>
    );
  }

  if (!quiz) return <div className={styles.container}>Chargement du quiz…</div>;

  if (position >= serie.length) {
    const bonnes = serie.length - ratees.length;
    return (
      <div className={styles.container}>
        <p>{quiz.titre}</p>
        <h4>Résultat</h4>
        <p className={styles.soloScore}>
          {bonnes} / {serie.length} bonne{bonnes > 1 ? "s" : ""} réponse{bonnes > 1 ? "s" : ""}
        </p>
        <div className={styles.modeButtons}>
          {ratees.length > 0 && (
            <button className="button button--primary" onClick={() => commencer(ratees)}>
              Réessayer les questions ratées ({ratees.length})
            </button>
          )}
          <button className="button button--secondary" onClick={() => commencer(quiz.questions.map((_, i) => i))}>
            Recommencer tout le quiz
          </button>
        </div>
        {quitter}
      </div>
    );
  }

  const question = quiz.questions[serie[position]];
  const answered = selected !== null;
  const correct = selected === question.reponse;

  const repondre = (index: number) => {
    if (answered) return;
    setSelected(index);
    if (index !== question.reponse) setRatees((liste) => [...liste, serie[position]]);
  };

  const suivante = () => {
    setSelected(null);
    setPosition((p) => p + 1);
  };

  return (
    <div className={styles.container}>
      <p>{quiz.titre}</p>
      <div className={styles.row}>
        <strong>
          Question {position + 1} / {serie.length}
        </strong>
      </div>
      <QuestionText texte={question.texte} />
      <ul className={styles.choices}>
        {question.choix.map((choix, index) => {
          const classes = [styles.choiceButton];
          if (answered && index === question.reponse) classes.push(styles.choiceCorrect);
          else if (index === selected) classes.push(styles.choiceWrong);
          return (
            <li key={choix}>
              <button className={classes.join(" ")} onClick={() => repondre(index)} disabled={answered}>
                <QuestionText texte={choix} compact />
              </button>
            </li>
          );
        })}
      </ul>
      {answered && (
        <>
          <p>
            <strong>{correct ? "Bonne réponse !" : "Mauvaise réponse."}</strong>
          </p>
          <button className="button button--primary" onClick={suivante}>
            {position + 1 < serie.length ? "Question suivante" : "Voir le résultat"}
          </button>
        </>
      )}
      {quitter}
    </div>
  );
}
