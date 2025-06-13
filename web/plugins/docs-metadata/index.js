// Plugin Docusaurus : Génère un fichier docsMetadata.json à partir des frontmatters des fichiers Markdown du dossier docs/01-cours

const fs = require("fs");
const path = require("path");

/**
 * Extrait le frontmatter d'un contenu Markdown
 * @param {string} content
 * @returns {Object} frontmatter
 */
function extractFrontmatter(content) {
  const match = content.match(/^---([\s\S]*?)---/);
  if (!match) return null;
  const frontmatter = {};
  match[1].split("\n").forEach((line) => {
    const [key, ...rest] = line.split(":");
    if (key && rest.length) {
      frontmatter[key.trim()] = rest.join(":").trim();
    }
  });
  return frontmatter;
}

/**
 * Retourne le chemin absolu du fichier docsMetadata.json dans static/
 * @returns {string}
 */
function getStaticMetadataPath() {
  return path.resolve(__dirname, "../../static/docsMetadata.json");
}

/**
 * Extrait les métadonnées (frontmatter) de tous les fichiers .md d'un dossier
 * @param {Object} params
 * @param {string} params.docsDir - Chemin du dossier contenant les fichiers Markdown
 * @returns {Array<Object>} Tableau d'objets métadonnées
 */
function getAllDocsMetadata({ docsDir }) {
  const docs = [];
  const files = fs.readdirSync(docsDir);
  for (const file of files) {
    if (!file.endsWith(".md")) continue;
    const docPath = path.join(docsDir, file);
    const content = fs.readFileSync(docPath, "utf-8");
    const frontmatter = extractFrontmatter(content);
    if (!frontmatter) continue;
    docs.push({
      id: file.replace(/\.md$/, ""),
      ...frontmatter,
    });
  }
  return docs;
}

/**
 * Plugin Docusaurus pour exposer les métadonnées des documents
 */
module.exports = function pluginDocsMetadata(context, options) {
  return {
    name: "docusaurus-plugin-docs-metadata",
    /**
     * Chargement des métadonnées à partir des fichiers Markdown
     */
    async loadContent() {
      const docsDir = path.resolve(__dirname, "../../docs/01-cours");
      return getAllDocsMetadata({ docsDir });
    },
    /**
     * Génère le fichier docsMetadata.json dans static/ pour qu'il soit déployé
     */
    async contentLoaded({ content }) {
      fs.writeFileSync(
        getStaticMetadataPath(),
        JSON.stringify(content, null, 2)
      );
    },
  };
};
