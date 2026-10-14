import React, { JSX } from "react";
import Markdown from "markdown-to-jsx";
import CodeBlock from "@theme/CodeBlock";
import { Highlight } from "prism-react-renderer";
import { usePrismTheme } from "@docusaurus/theme-common";
import styles from "./Quiz.module.css";

/**
 * Affiche du markdown d'une question (énoncé ou choix), y compris les blocs de code.
 * `compact` sert pour les choix : les blocs de code y sont affichés sans boutons
 * (copier, retour à la ligne), qui ne peuvent pas être imbriqués dans le bouton d'un choix.
 */
export default function QuestionText({ texte, compact = false }: { texte: string; compact?: boolean }): JSX.Element {
  return (
    <Markdown
      options={{
        overrides: { pre: { component: compact ? CompactPre : Pre } },
      }}
    >
      {texte}
    </Markdown>
  );
}

/** Choix affiché à la révélation, avec un badge du nombre de participant·e·s l'ayant répondu. */
export function ChoiceWithCount({ choix, count }: { choix: string; count: number }): JSX.Element {
  return (
    <span className={styles.choiceWithCount}>
      <span className={styles.choiceContent}>
        <QuestionText texte={choix} compact />
      </span>
      <span className={styles.choiceCount} title={`${count} réponse${count > 1 ? "s" : ""}`}>
        {count}
      </span>
    </span>
  );
}

/** Extrait le langage et le code d'un bloc `<pre><code class="lang-…">` produit par markdown-to-jsx. */
function codeOf(children: React.ReactNode): { language?: string; code: string } {
  const child = React.Children.only(children) as React.ReactElement<{ className?: string; children?: string }>;
  const langClass = child.props.className?.split(/\s+/).find((cls) => cls.startsWith("lang-"));
  return { language: langClass?.slice("lang-".length), code: String(child.props.children ?? "").replace(/\n$/, "") };
}

function Pre({ children }: { children?: React.ReactNode }): JSX.Element {
  const { language, code } = codeOf(children);
  return <CodeBlock language={language}>{code}</CodeBlock>;
}

function CompactPre({ children }: { children?: React.ReactNode }): JSX.Element {
  const { language, code } = codeOf(children);
  const theme = usePrismTheme();
  return (
    <Highlight theme={theme} code={code} language={language ?? "text"}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${className} ${styles.choiceCode}`} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
