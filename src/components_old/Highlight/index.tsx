import React, { ReactNode } from "react";

export default function Highlight({
  children,
  color,
}: {
  children: ReactNode;
  color?: string;
}): JSX.Element {
  switch (color) {
    case "note":
      color = "#6c757d";
      break;
    case "tip":
      color = "#198754";
      break;
    case "info":
      color = "#0d6efd";
      break;
    case "caution":
      color = "#b58d20";
      break;
    case "danger":
      color = "#dc3545";
      break;
    case undefined:
      color = "#0dcaf0";
      break;
  }
  return (
    <span
      style={{
        backgroundColor: color,
        borderRadius: "2px",
        padding: "0.2rem",
      }}
    >
      {children}
    </span>
  );
}
