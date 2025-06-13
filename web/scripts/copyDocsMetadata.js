// Ce script copie le fichier docsMetadata.json généré par le plugin dans le dossier static/ pour qu'il soit servi à la racine du site
const fs = require("fs");
const path = require("path");

const src = path.join(
  __dirname,
  "../.docusaurus/docusaurus-plugin-docs-metadata/default/docsMetadata.json"
);
const dest = path.join(__dirname, "../static/docsMetadata.json");

fs.copyFileSync(src, dest);
console.log("docsMetadata.json copié dans static/");
