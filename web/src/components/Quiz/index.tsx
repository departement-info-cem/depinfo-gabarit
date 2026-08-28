import React, { useState } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { usePluginData } from "@docusaurus/useGlobalData";
import type { PeerOptions } from "peerjs";
import styles from "./Quiz.module.css";

type Mode = "enseignant" | "etudiant" | null;

export default function Quiz({
  file,
  peerOptions,
}: {
  /** Chemin vers le fichier JSON de questions, ex: "/quiz/exemple.json" */
  file: string;
  /** Options PeerJS, remplace la valeur configurée dans le plugin */
  peerOptions?: PeerOptions;
}): JSX.Element {
  const [mode, setMode] = useState<Mode>(null);
  const pluginData = usePluginData("docusaurus-plugin-quiz") as { peerOptions: PeerOptions } | undefined;
  const resolvedPeerOptions = peerOptions || pluginData?.peerOptions;

  if (!mode) {
    return (
      <div className={`${styles.container} ${styles.modeSelect}`}>
        <p>Comment voulez-vous accéder à ce quiz ?</p>
        <div className={styles.modeButtons}>
          <button className="button button--primary" onClick={() => setMode("enseignant")}>
            Mode enseignant
          </button>
          <button className="button button--secondary" onClick={() => setMode("etudiant")}>
            Mode étudiant
          </button>
        </div>
      </div>
    );
  }

  return (
    <BrowserOnly fallback={<div className={styles.container}>Chargement du quiz…</div>}>
      {() => {
        const QuizTeacher = require("./QuizTeacher").default;
        const QuizStudent = require("./QuizStudent").default;
        return mode === "enseignant" ? (
          <QuizTeacher file={file} peerOptions={resolvedPeerOptions} onQuit={() => setMode(null)} />
        ) : (
          <QuizStudent peerOptions={resolvedPeerOptions} onQuit={() => setMode(null)} />
        );
      }}
    </BrowserOnly>
  );
}
