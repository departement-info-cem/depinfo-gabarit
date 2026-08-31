import React, { JSX } from "react";
import type { Player } from "./types";
import styles from "./Quiz.module.css";

const MEDALS = ["🥇", "🥈", "🥉"];

/**
 * Classement des participant·e·s. Générique sur le type de joueur pour que le
 * mode enseignant puisse passer des entrées enrichies (avec identifiant de
 * connexion) et recevoir la même entrée dans `onBan`.
 */
export default function Leaderboard<P extends Player>({
  players,
  highlightPseudo,
  onBan,
}: {
  players: P[];
  highlightPseudo?: string;
  /** Si fourni, un bouton permet de retirer chaque participant·e de la partie. */
  onBan?: (player: P) => void;
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
          {onBan && (
            <button
              type="button"
              className={styles.banButton}
              title={`Retirer ${player.pseudo} du quiz`}
              aria-label={`Retirer ${player.pseudo} du quiz`}
              onClick={() => onBan(player)}
            >
              ✕
            </button>
          )}
        </li>
      ))}
      {players.length === 0 && <li className={styles.leaderboardEmpty}>Aucun participant pour le moment.</li>}
    </ol>
  );
}
