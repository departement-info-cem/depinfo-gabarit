import React, { JSX, useState } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { usePluginData } from "@docusaurus/useGlobalData";
import type { PeerOptions } from "peerjs";
import type { QuizData } from "./quizEngine";
import styles from "./Quiz.module.css";

type Mode = "enseignant" | "etudiant" | "solo" | null;

export default function Quiz({
  file,
  peerOptions,
}: {
  /**
   * Fichier de questions : soit un chemin vers un fichier markdown ou JSON
   * (ex: "/quiz/exemple.md"), soit un objet importé directement (ex: `import quiz from "./exemple.json"`),
   * ce qui permet d'utiliser un chemin relatif au fichier .md.
   */
  file: string | QuizData;
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
          <button className="button button--secondary button--outline" onClick={() => setMode("solo")}>
            Mode solo
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
        const QuizSolo = require("./QuizSolo").default;
        if (mode === "solo") return <QuizSolo file={file} onQuit={() => setMode(null)} />;
        return mode === "enseignant" ? (
          <QuizTeacher file={file} peerOptions={resolvedPeerOptions} onQuit={() => setMode(null)} />
        ) : (
          <QuizStudent peerOptions={resolvedPeerOptions} onQuit={() => setMode(null)} />
        );
      }}
    </BrowserOnly>
  );
}
