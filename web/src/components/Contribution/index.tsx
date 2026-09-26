import React, { JSX, useId, useState } from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./Contribution.module.css";

// Dépôt GitHub du cours, tel que défini dans docusaurus.config.js (projectName
// vient de nomUrl dans config.js).
function useDepot(): { proprietaire: string; nom: string } {
  const { siteConfig } = useDocusaurusContext();
  return {
    proprietaire: siteConfig.organizationName ?? "",
    nom: siteConfig.projectName ?? "",
  };
}

export function DepotDuCours({ lien = false }: { lien?: boolean }): JSX.Element {
  const { proprietaire, nom } = useDepot();
  const texte = (
    <code>
      {proprietaire}/{nom}
    </code>
  );
  return lien ? <Link href={`https://github.com/${proprietaire}/${nom}`}>{texte}</Link> : texte;
}

// Génère le lien de comparaison qui ouvre la pull request avec le dépôt du
// cours déjà choisi comme dépôt de base. Sans ce lien, GitHub propose par
// défaut la racine du réseau de forks, soit le gabarit.
export function AssistantPullRequest(): JSX.Element {
  const { proprietaire, nom } = useDepot();
  const id = useId();
  const [utilisateur, setUtilisateur] = useState("");
  const [branche, setBranche] = useState("");

  const nomUtilisateur = utilisateur.trim().replace(/^@/, "");
  const brancheParDefaut = `${nomUtilisateur || "votre-nom"}-patch-1`;
  const brancheChoisie = branche.trim() || brancheParDefaut;

  // La forme « utilisateur:branche » laisse GitHub trouver le fork de
  // l'utilisateur dans le réseau, peu importe son nom.
  const lienPullRequest =
    `https://github.com/${proprietaire}/${nom}/compare/main...` +
    `${encodeURIComponent(nomUtilisateur)}:${brancheChoisie.split("/").map(encodeURIComponent).join("/")}` +
    "?expand=1";

  return (
    <div className={styles.assistant}>
      <div className={styles.champs}>
        <div className={styles.champ}>
          <label htmlFor={`${id}-utilisateur`}>Votre nom d'utilisateur GitHub</label>
          <input
            id={`${id}-utilisateur`}
            type="text"
            value={utilisateur}
            onChange={(e) => setUtilisateur(e.target.value)}
            placeholder="votre-nom"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
          />
        </div>
        <div className={styles.champ}>
          <label htmlFor={`${id}-branche`}>Branche de votre correction</label>
          <input
            id={`${id}-branche`}
            type="text"
            value={branche}
            onChange={(e) => setBranche(e.target.value)}
            placeholder={brancheParDefaut}
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
          />
        </div>
      </div>
      {nomUtilisateur ? (
        <div className={styles.liens}>
          <Link className="button button--primary" href={lienPullRequest}>
            Ouvrir la pull request vers {proprietaire}/{nom}
          </Link>
          <Link className="button button--secondary" href={`https://github.com/${nomUtilisateur}/${nom}`}>
            Voir votre fork
          </Link>
        </div>
      ) : (
        <p className={styles.consigne}>Entrez votre nom d'utilisateur pour obtenir le lien.</p>
      )}
    </div>
  );
}
