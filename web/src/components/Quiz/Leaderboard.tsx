import React from "react";
import type { Player } from "./types";
import styles from "./Quiz.module.css";

const MEDALS = ["🥇", "🥈", "🥉"];

export default function Leaderboard({
  players,
  highlightPseudo,
}: {
  players: Player[];
  highlightPseudo?: string;
}): JSX.Element {
  return (
    <ol className={styles.leaderboard}>
      {players.map((player, index) => (
        <li
          key={player.pseudo}
          className={
            player.pseudo === highlightPseudo
              ? `${styles.leaderboardItem} ${styles.leaderboardItemSelf}`
              : styles.leaderboardItem
          }
        >
          <span className={styles.leaderboardRank}>{MEDALS[index] || index + 1}</span>
          <span className={styles.leaderboardName}>{player.pseudo}</span>
          <span className={styles.leaderboardScore}>{player.score} pts</span>
        </li>
      ))}
      {players.length === 0 && <li className={styles.leaderboardEmpty}>Aucun participant pour le moment.</li>}
    </ol>
  );
}
