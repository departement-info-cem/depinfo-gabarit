import React, { useEffect, useState } from "react";
import styles from "./MainDocsGrid.module.css";
import { useHistory } from "@docusaurus/router";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function MainDocsGrid() {
  const [docs, setDocs] = useState([]);
  const history = useHistory();
  const baseUrl = useBaseUrl("/");

  useEffect(() => {
    fetch("docsMetadata.json")
      .then((res) => res.json())
      .then((data) => setDocs(data));
  }, []);

  const handleClick = (doc: any) => {
    // Retirer le préfixe numérique et le tiret (ex: 01-rencontre1.1 -> rencontre1.1)
    const slug = doc.id.replace(/^\d+-/, "");
    history.push(`${baseUrl}cours/${slug}`);
  };

  return (
    <div className={styles.gridContainer}>
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
