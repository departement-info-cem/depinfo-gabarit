// Import de contenu brut via le loader webpack raw-loader (ex: `!!raw-loader!./fichier.md`),
// utilisé pour charger du texte markdown en dehors du wildcard `*.md` (qui le typerait comme composant React).
declare module "!!raw-loader!*" {
  const content: string;
  export default content;
}
