import React, { type CSSProperties, JSX, ReactNode } from "react";

//import CopyButton from "@theme/CodeBlock/CopyButton";

import styles from "./styles.module.css";
import Logo from "./assets/logo.svg";

interface Props {
  children: ReactNode;
  workdir: string;
  command: string;
  result: string;
  style?: CSSProperties;
}

export default function PowerShellWindow({
  children,
  workdir,
  command,
  result,
  style,
}: Props): JSX.Element {
  console.log(children);

  return (
    <div className={styles.powerShellWindow}>
      <div className={styles.powerShellWindowHeader}>
        <div className={styles.windowTitle}>
          <Logo className={styles.logo} />
          Windows PowerShell
        </div>
        <div className={styles.powerShellWindowAddressBar}></div>
        <div className={styles.buttons}>{/* TODO Boutons Windows ICI */}</div>
      </div>

      <div className={styles.powerShellWindowBody}>
        <div className={styles.firstLine}>
          PS {workdir}&gt;
          {` ${command}`}
          <div className={styles.spacer}></div>
          {/* <CopyButton className={styles.copyButton} code={command}></CopyButton> */}
        </div>

        <pre className={styles.codeContainer}>
          <code>{result}</code>
        </pre>
      </div>
    </div>
  );
}
