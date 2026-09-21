import React, { JSX, ReactNode } from "react";

// Couleurs de la palette du CÉGEP, avec une couleur de texte permise pour
// chaque fond (guide de normes graphiques, p. 10).
const presets: Record<string, { background: string; text: string }> = {
  note: { background: "var(--cem-gris-2)", text: "var(--cem-bleu-marine)" },
  tip: { background: "var(--cem-vert)", text: "var(--cem-bleu-marine)" },
  info: { background: "var(--cem-bleu-pale)", text: "var(--cem-bleu-marine)" },
  caution: { background: "var(--cem-jaune-or)", text: "var(--cem-bleu-marine)" },
  danger: { background: "var(--cem-rouge)", text: "white" },
  default: { background: "var(--cem-bleu-ciel)", text: "var(--cem-bleu-marine)" },
};

export default function Highlight({
  children,
  color,
}: {
  children: ReactNode;
  color?: string;
}): JSX.Element {
  const preset = presets[color ?? "default"];
  return (
    <span
      style={{
        backgroundColor: preset?.background ?? color,
        color: preset?.text,
        borderRadius: "2px",
        padding: "0.2rem",
      }}
    >
      {children}
    </span>
  );
}
