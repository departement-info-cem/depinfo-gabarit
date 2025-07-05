import React from "react";
import styles from "./ProgressBar.module.css";
import { useColorMode } from "@docusaurus/theme-common";

interface ProgressBarProps {
  value: number; // entre 0 et 1
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value }) => {
  const { colorMode } = useColorMode();
  const percent = Math.max(0, Math.min(1, value)) * 100;
  return (
    <div
      className={
        styles.progressBarContainer +
        (colorMode === "dark"
          ? ` ${styles.progressBarContainerDark}`
          : ` ${styles.progressBarContainerLight}`)
      }
    >
      <div
        className={styles.progressBarFill}
        style={{ width: `${percent}%` }}
      />
    </div>
  );
};

export default ProgressBar;
