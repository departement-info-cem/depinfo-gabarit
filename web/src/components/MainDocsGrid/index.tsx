import React, { useEffect, useState } from "react";
import styles from "./MainDocsGrid.module.css";
import { useHistory } from "@docusaurus/router";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useColorMode } from "@docusaurus/theme-common";
import sidebarDocs from "./sidebarDocs";

export default function MainDocsGrid() {
  const [docs, setDocs] = useState<any[]>([]);
  const [meta, setMeta] = useState<any[]>([]);
  const history = useHistory();
  const baseUrl = useBaseUrl("/");
  const { colorMode } = useColorMode();

  useEffect(() => {
    fetch("docsMetadata.json")
      .then((res) => res.json())
      .then((data) => setMeta(data));
  }, []);

  useEffect(() => {
    if (meta.length === 0) return;
    // Pour chaque id de la sidebar, trouver le doc correspondant (même si doublon)
    const sidebarSuffixes = sidebarDocs.map((id) => id.split("/").pop());
    const docsList = sidebarSuffixes.map((suffix) =>
      meta.find((doc: any) => doc.id.endsWith(suffix))
    );
    setDocs(docsList);
  }, [meta]);

  const handleClick = (doc: any) => {
    // Retirer le préfixe numérique et le tiret (ex: 01-rencontre1.1 -> rencontre1.1)
    const slug = doc.id.replace(/^\d+-/, "");
    history.push(`${baseUrl}cours/${slug}`);
  };

  return (
    <div
      className={
        styles.gridContainer +
        (colorMode === "dark"
          ? ` ${styles.gridContainerDark}`
          : ` ${styles.gridContainerLight}`)
      }
    >
      {docs.map((doc) => (
        <div
          key={doc.id}
          className={styles.gridItem}
          onClick={() => handleClick(doc)}
          style={{ cursor: "pointer" }}
        >
          <h3>{doc.title || doc.id}</h3>
          <p>{doc.description || ""}</p>
        </div>
      ))}
    </div>
  );
}
