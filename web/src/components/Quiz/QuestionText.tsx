import React, { JSX } from "react";
import Markdown from "markdown-to-jsx";
import CodeBlock from "@theme/CodeBlock";

/** Affiche l'énoncé d'une question en markdown (peut inclure des blocs de code). */
export default function QuestionText({ texte }: { texte: string }): JSX.Element {
  return (
    <Markdown
      options={{
        overrides: {
          pre: { component: PreComponent },
          code: { component: CodeComponent },
        },
      }}
    >
      {texte}
    </Markdown>
  );
}

function PreComponent({ children }: { children?: React.ReactNode }): JSX.Element {
  return <>{children}</>;
}

function CodeComponent({ className, children }: { className?: string; children: string }): JSX.Element {
  const langClass = className?.split(/\s+/).find((cls) => cls.startsWith("lang-"));
  const language = langClass?.slice("lang-".length);
  if (!language) return <code>{children}</code>;
  return <CodeBlock language={language}>{children}</CodeBlock>;
}
