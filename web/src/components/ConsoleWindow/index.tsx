import React, { ReactNode } from "react";
import styles from "./ConsoleWindow.module.css";

interface ConsoleWindowProps {
  children?: ReactNode;
  text?: string;
  title?: string;
  noCopy?: string;
  backgroundColor?: string;
  foregroundColor?: string;
  titleBackgroundColor?: string;
  titleForegroundColor?: string;
}

function toPlainText(node: ReactNode): string {
  if (node === null || node === undefined || typeof node === "boolean") {
    return "";
  }

  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node
      .map((child) => toPlainText(child))
      .filter((part) => part.length > 0)
      .join("\n");
  }

  if (React.isValidElement<{ children?: React.ReactNode }>(node)) {
    if (node.type === "br") {
      return "\n";
    }

    const value = toPlainText(node.props.children);
    const blockLike = new Set(["p", "div", "section", "article", "li"]);

    if (typeof node.type === "string" && blockLike.has(node.type)) {
      return `${value}\n`;
    }

    return value;
  }

  return "";
}

function normalizeConsoleText(input: string): string {
  const trimmed = input.replace(/^\n+|\n+$/g, "");
  const lines = trimmed.split("\n");

  const nonEmptyLines = lines.filter((line) => line.trim().length > 0);
  if (nonEmptyLines.length === 0) {
    return "";
  }

  const minIndent = nonEmptyLines.reduce((min, line) => {
    const indent = line.match(/^\s*/)?.[0].length ?? 0;
    return Math.min(min, indent);
  }, Number.POSITIVE_INFINITY);

  return lines.map((line) => line.slice(minIndent)).join("\n");
}

export default function ConsoleWindow({
  children,
  text,
  title,
  noCopy,
  backgroundColor = "#000",
  foregroundColor = "#fff",
  titleBackgroundColor = "#121212",
  titleForegroundColor = "#f0f0f0",
}: ConsoleWindowProps): React.ReactElement {
  const rawContent = text ?? toPlainText(children);
  const content = normalizeConsoleText(rawContent);
  const style = {
    "--consolewin-bg": backgroundColor,
    "--consolewin-fg": foregroundColor,
    "--consolewin-title-bg": titleBackgroundColor,
    "--consolewin-title-fg": titleForegroundColor,
    "--consolewin-nocopy": noCopy == "true" ? 'none' : 'text',
  } as React.CSSProperties;

  return (
    <section className={styles.window} style={style}>
      {title ? (
        <header className={styles.titleBar}>
          <span className={styles.title}>{title}</span>
        </header>
      ) : null}

      <pre className={styles.console}>
        <code>{content}</code>
      </pre>
    </section>
  );
}