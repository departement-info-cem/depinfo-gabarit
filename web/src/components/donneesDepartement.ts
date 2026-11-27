// Données du site du département (https://info.cegepmontpetit.ca) : qui donne chaque groupe du cours, quand et où.
// Le département les calcule à partir des fiches des profs et du calendrier scolaire officiel (congés, horaires
// d'un autre jour), avec les cours annulés ou déplacés. Le site de cours n'a donc plus de dates à recopier.
//
// Dans sidebars.js, une séance peut donner son numéro au lieu de ses dates (voir le wiki, MainDocsCalendar) :
//   customProps: { seance: 13 }                        // la 13e rencontre de chaque groupe
//   customProps: { seance: { defaut: 15, "1010": 14 } } // sauf le groupe 1010, qui la voit à sa 14e rencontre
// Les dates sont alors lues dans le fichier du cours et remises sous la forme d'un « calendrier », comme avant :
// le calendrier, la grille des cours et la navigation rapide n'y voient pas de différence.
// Un site qui n'utilise pas « seance » ne télécharge rien et fonctionne exactement comme avant.
import { useEffect, useState } from "react";
// Import global : un site dont le plugin docs-metadata n'est pas à jour génère un sidebarDocs.js sans numeroCours,
// et un import nommé ferait alors avertir webpack au build.
import * as genere from "./MainDocsGrid/sidebarDocs";

const ORIGINE = "https://info.cegepmontpetit.ca";
// Le site du département passe de /react/ à la racine : la nouvelle adresse d'abord, puis l'ancienne.
const DOSSIERS = ["/donnees/cours/", "/react/donnees/cours/"];

export interface Rencontre {
  /** rang parmi les rencontres qui ont lieu ; absent pour une rencontre annulée ou déplacée */
  numero?: number;
  date: string;
  debut: string;
  fin: string;
  local?: string;
  statut: string;
}

export interface PlageDepartement {
  jour: string;
  debut: string;
  fin: string;
  /** cours, dispo, centre-aide, reunion ou autre */
  type: string;
  titre?: string;
  cours?: string;
  /** le nom du cours, ex. « Applications mobiles avancées » */
  nomCours?: string;
  groupe?: string;
  local?: string;
}

export interface FichierCours {
  cours: string;
  nom?: string;
  groupes: { prof: { id: string; nom: string }; groupe?: string; session?: string; rencontres: Rencontre[]; agenda?: string | null }[];
  profs?: Record<string, { nom: string; horaire: { debut?: string; fin?: string; plages: PlageDepartement[] }; page?: string }>;
}

type Calendrier = Record<string, Array<Record<string, string>>>;
export type EntreeSidebar = { id: string; label?: string; className?: string; customProps?: any };

/** Le numéro du cours sur le site du département, ex. « 420-5N6-EM » : numeroCours dans config.js (copié dans sidebarDocs.js au build). */
const exportsGeneres: Record<string, unknown> = { ...genere };
export const numeroCoursDuSite: string | undefined = (exportsGeneres.numeroCours as string | null | undefined) ?? undefined;
const sidebarDocs = exportsGeneres.default as EntreeSidebar[];

const fichiers: Record<string, Promise<FichierCours | null>> = {};

/** Le fichier d'un cours publié par le site du département, ou null s'il est introuvable. Téléchargé une seule fois. */
export function chargerCours(no: string): Promise<FichierCours | null> {
  if (!fichiers[no]) {
    fichiers[no] = (async () => {
      for (const dossier of DOSSIERS) {
        try {
          const reponse = await fetch(`${ORIGINE}${dossier}${encodeURIComponent(no)}.json`);
          if (reponse.ok && (reponse.headers.get("content-type") ?? "").includes("json")) return (await reponse.json()) as FichierCours;
        } catch {
          // Adresse suivante
        }
      }
      console.warn(`Données du site du département introuvables pour le cours ${no}`);
      return null;
    })();
  }
  return fichiers[no];
}

/** Le numéro de rencontre d'une séance pour un groupe : seance: 13, ou seance: { defaut: 13, "1010": 14 }. */
export function numeroDeSeance(seance: unknown, groupe?: string): number | undefined {
  if (typeof seance === "number") return seance;
  if (!seance || typeof seance !== "object") return undefined;
  const parGroupe = seance as Record<string, number>;
  return (groupe !== undefined ? parGroupe[groupe] : undefined) ?? parGroupe.defaut;
}

/**
 * Les entrées de la sidebar, avec un calendrier calculé pour celles qui donnent un numéro de séance :
 * { "Nom du prof": [{ "1010": "2026-08-26" }] }, une date par groupe. Une entrée qui a déjà un calendrier le garde.
 */
export function resoudreCalendriers(entrees: EntreeSidebar[], cours: FichierCours | null): EntreeSidebar[] {
  if (!cours) return entrees;
  return entrees.map((entree) => {
    const seance = entree.customProps?.seance;
    if (seance === undefined || entree.customProps?.calendrier) return entree;
    const calendrier: Calendrier = {};
    for (const g of cours.groupes) {
      const n = numeroDeSeance(seance, g.groupe);
      const rencontre = n === undefined ? undefined : g.rencontres.find((r) => r.numero === n);
      if (!rencontre) continue;
      (calendrier[g.prof.nom] = calendrier[g.prof.nom] ?? []).push({ [g.groupe ?? g.prof.id]: rencontre.date });
    }
    return { ...entree, customProps: { ...entree.customProps, calendrier } };
  });
}

const utiliseSeances = sidebarDocs.some((e) => e.customProps?.seance !== undefined);

/** sidebarDocs, avec les dates des séances numérotées une fois le fichier du département chargé (dans le navigateur). */
export function useSidebarDocs(): EntreeSidebar[] {
  const [entrees, setEntrees] = useState<EntreeSidebar[]>(sidebarDocs);
  useEffect(() => {
    if (!utiliseSeances) return;
    if (!numeroCoursDuSite) {
      console.warn("sidebars.js donne des numéros de séance (seance), mais config.js n'a pas de numeroCours.");
      return;
    }
    let actif = true;
    chargerCours(numeroCoursDuSite).then((cours) => {
      if (actif) setEntrees(resoudreCalendriers(sidebarDocs, cours));
    });
    return () => {
      actif = false;
    };
  }, []);
  return entrees;
}

/** Le fichier du cours (null pendant le chargement ou s'il est introuvable). */
export function useCoursDepartement(no: string | undefined = numeroCoursDuSite): { cours: FichierCours | null; charge: boolean } {
  const [etat, setEtat] = useState<{ cours: FichierCours | null; charge: boolean }>({ cours: null, charge: false });
  useEffect(() => {
    if (!no) return;
    let actif = true;
    chargerCours(no).then((cours) => {
      if (actif) setEtat({ cours, charge: true });
    });
    return () => {
      actif = false;
    };
  }, [no]);
  return etat;
}
