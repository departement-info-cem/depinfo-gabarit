// Trouve le prochain cours et le TP courant à partir des calendriers et des
// className définis dans sidebars.js (voir sidebarDocs.js, généré au build).

type Calendrier = Record<string, Array<Record<string, string>>>;

export interface EntreeSidebar {
  id: string;
  className?: string;
  customProps?: { calendrier?: Calendrier };
}

export interface TravailPratique {
  id: string;
  sidebar?: string;
  nom: string; // Début du nom de la page, ex : « TP1 »
}

const FORMAT_DATE = /^\d{4}-\d{2}-\d{2}$/;

/** Date locale du jour au format AAAA-MM-JJ, comme dans les calendriers */
export function dateDuJour(maintenant: Date = new Date()): string {
  const annee = maintenant.getFullYear();
  const mois = String(maintenant.getMonth() + 1).padStart(2, "0");
  const jour = String(maintenant.getDate()).padStart(2, "0");
  return `${annee}-${mois}-${jour}`;
}

/** Dates de cours (tous groupes confondus) d'un prof pour une entrée de la sidebar */
function datesDuProf(entree: EntreeSidebar, prof: string): string[] {
  const groupes = entree.customProps?.calendrier?.[prof];
  if (!Array.isArray(groupes)) return [];
  return groupes
    .flatMap((groupe) => Object.values(groupe ?? {}))
    .filter((date) => typeof date === "string" && FORMAT_DATE.test(date));
}

/** Premier prof, dans l'ordre de sidebars.js, dont l'horaire contient au moins une date */
function trouverPremierProf(entrees: EntreeSidebar[]): string | undefined {
  for (const entree of entrees) {
    const prof = Object.keys(entree.customProps?.calendrier ?? {}).find(
      (nom) => datesDuProf(entree, nom).length > 0
    );
    if (prof) return prof;
  }
  return undefined;
}

/**
 * Entrée dont la date de cours, selon l'horaire du premier prof, est la plus
 * proche à partir d'aujourd'hui (inclus). À date égale, la première entrée de
 * la sidebar l'emporte.
 */
function trouverProchaineEntree(
  entrees: EntreeSidebar[],
  aujourdhui: string,
  filtre: (entree: EntreeSidebar) => boolean = () => true
): EntreeSidebar | undefined {
  const prof = trouverPremierProf(entrees);
  if (!prof) return undefined;

  let prochaine: EntreeSidebar | undefined;
  let prochaineDate: string | undefined;
  for (const entree of entrees.filter(filtre)) {
    for (const date of datesDuProf(entree, prof)) {
      if (date >= aujourdhui && (prochaineDate === undefined || date < prochaineDate)) {
        prochaine = entree;
        prochaineDate = date;
      }
    }
  }
  return prochaine;
}

/** Id du doc du prochain cours, ou undefined si aucun n'est à venir */
export function trouverProchainCours(
  entrees: EntreeSidebar[],
  aujourdhui: string
): string | undefined {
  return trouverProchaineEntree(entrees, aujourdhui)?.id;
}

/**
 * Le className contient-il le nom du TP, sans égard à la casse ?
 * Le nom ne doit pas être suivi d'un chiffre : « TP1 » ne correspond pas à « remise-tp10 ».
 */
function classNameContientTp(className: string | undefined, tp: TravailPratique): boolean {
  return !!className && new RegExp(`${tp.nom}(?!\\d)`, "i").test(className);
}

/**
 * Id du doc du TP courant : celui nommé dans le className du prochain cours qui
 * en mentionne un (ex : remise-tp1), ou undefined si aucun n'est à venir
 */
export function trouverTpCourant(
  entrees: EntreeSidebar[],
  tps: TravailPratique[],
  aujourdhui: string
): string | undefined {
  const tpDe = (entree: EntreeSidebar) =>
    tps.find((tp) => classNameContientTp(entree.className, tp));
  const entree = trouverProchaineEntree(entrees, aujourdhui, (e) => tpDe(e) !== undefined);
  return entree && tpDe(entree)?.id;
}
