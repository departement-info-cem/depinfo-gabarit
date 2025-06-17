import React, { useEffect, useState } from "react";
import styles from "./MainDocsGrid.module.css";
import { useHistory } from "@docusaurus/router";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useColorMode } from "@docusaurus/theme-common";
import sidebarDocs from "./sidebarDocs";
import ProgressBar from "./ProgressBar";

export default function MainDocsGrid() {
  const [docs, setDocs] = useState<any[]>([]);
  const [meta, setMeta] = useState<any[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(
    null
  );
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
    // Pour chaque entrée de la sidebar, trouver le doc correspondant (même si doublon)
    const docsList = sidebarDocs.map((entry: any) => {
      const suffix = entry.id.split("/").pop();
      const doc = meta.find((d: any) => d.id.endsWith(suffix));
      return {
        ...doc,
        _sidebarLabel: entry.label,
        _sidebarProps: entry.customProps,
        _sidebarClassName: entry.className,
      };
    });
    setDocs(docsList);
  }, [meta]);

  const handleClick = (doc: any) => {
    // Retirer le préfixe numérique et le tiret (ex: 01-rencontre1.1 -> rencontre1.1)
    const slug = doc.id.replace(/^[0-9]+-/, "");
    history.push(`${baseUrl}cours/${slug}`);
  };

  const getBackgroundColor = (className: string): string => {
    if (className && className.includes("tp")) {
      return "var(--remise-tp-bg)";
    }
    if (className && className.includes("examen")) {
      return "var(--examen-bg)";
    }
    return "inherit";
  };

  const formatDateFr = (dateStr: string) => {
    if (!dateStr) return "";
    const [year, month, day] = dateStr.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString("fr-FR", {
      month: "long",
      day: "numeric",
    });
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
      {docs.map((doc, i) => {
        const calendrier = doc._sidebarProps?.calendrier;
        // Déterminer la position du tooltip (droite ou gauche)
        let tooltipSide: "left" | "right" = "right";
        if (hoveredIndex === i && tooltipPos) {
          const tooltipWidth = 200; // px, valeur approximative
          if (tooltipPos.x + tooltipWidth > window.innerWidth) {
            tooltipSide = "left";
          }
        }
        return (
          <div
            key={i}
            className={styles.gridItem}
            style={{
              backgroundColor: getBackgroundColor(doc._sidebarClassName),
              color: doc._sidebarProps?.color || "inherit",
              position: "relative",
            }}
            onClick={() => handleClick(doc)}
            onMouseEnter={(e) => {
              setHoveredIndex(i);
              const rect = (
                e.currentTarget as HTMLElement
              ).getBoundingClientRect();
              setTooltipPos({ x: rect.right + 8, y: rect.top });
            }}
            onMouseLeave={() => {
              setHoveredIndex(null);
              setTooltipPos(null);
            }}
          >
            <div>
              <h3>{doc?.title || doc?._sidebarLabel || doc?.id}</h3>
              <p>{doc?.description || ""}</p>
            </div>
            <div>
              {typeof doc?._sidebarProps?.avancement === "number" && (
                <>
                  <ProgressBar value={doc._sidebarProps.avancement} />
                  <p className={styles.avancement}>
                    {doc._sidebarProps.avancementLabel}{" "}
                    {doc._sidebarProps.avancement * 100}% complété
                  </p>
                </>
              )}
            </div>
            {hoveredIndex === i && calendrier && (
              <div
                className={
                  styles.tooltip +
                  (colorMode === "dark"
                    ? " " + styles.tooltipDark
                    : " " + styles.tooltipLight) +
                  (tooltipSide === "left"
                    ? " " + styles.tooltipLeft
                    : " " + styles.tooltipRight)
                }
              >
                <strong>Calendrier :</strong>
                <ul style={{ margin: 0, paddingLeft: 16, whiteSpace: "nowrap" }}>
                  {Object.entries(calendrier).map(([nom, date]) => (
                    <li key={nom} style={{ whiteSpace: "nowrap" }}>
                      {nom} : {formatDateFr(date as string)}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
