import React, { useEffect, useState } from "react";
import styles from "./MainDocsGrid.module.css";

export default function MainDocsGrid() {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    // Correction : utiliser le bon chemin relatif pour Docusaurus
    fetch("docsMetadata.json")
      .then((res) => res.json())
      .then((data) => setDocs(data));
  }, []);

  return (
    <div className={styles.gridContainer}>
      {docs.map((doc) => (
        <div key={doc.id} className={styles.gridItem}>
          <h3>{doc.title || doc.id}</h3>
          <p>{doc.description || ""}</p>
        </div>
      ))}
    </div>
  );
}
