const fs = require("fs");
const path = require("path");

function getAllDocsMetadata({ docsDir }) {
  const docs = [];
  const files = fs.readdirSync(docsDir);
  for (const file of files) {
    if (file.endsWith(".md")) {
      const docPath = path.join(docsDir, file);
      const content = fs.readFileSync(docPath, "utf-8");
      const match = content.match(/^---([\s\S]*?)---/);
      if (match) {
        const frontmatter = {};
        match[1].split("\n").forEach((line) => {
          const [key, ...rest] = line.split(":");
          if (key && rest.length) {
            frontmatter[key.trim()] = rest.join(":").trim();
          }
        });
        docs.push({
          id: file.replace(/\.md$/, ""),
          ...frontmatter,
        });
      }
    }
  }
  return docs;
}

module.exports = function (context, options) {
  return {
    name: "docusaurus-plugin-docs-metadata",
    async loadContent() {
      const docsDir = path.resolve(__dirname, "../../docs/01-cours");
      return getAllDocsMetadata({ docsDir });
    },
    async contentLoaded({ content, actions }) {
      const { createData } = actions;
      await createData("docsMetadata.json", JSON.stringify(content, null, 2));
    },
  };
};
