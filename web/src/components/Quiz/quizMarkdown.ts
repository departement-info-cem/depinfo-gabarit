// Lecture d'un quiz écrit en markdown (voir plugins/quiz/README.md pour le format).
//
//   ---
//   titre: Quiz de révision
//   duree: 20
//   ---
//
//   ## Énoncé de la question (suivi de texte ou de blocs de code au besoin)
//
//   <!-- duree: 30 -->
//
//   - [ ] Mauvais choix
//   - [x] Bon choix (le contenu indenté sous un choix, ex. un bloc de code, en fait partie)

import type { Question, QuizData } from "./quizEngine";

const QUESTION_HEADING = /^##\s+(.+?)\s*#*\s*$/;
const TITLE_HEADING = /^#\s+(.+?)\s*#*\s*$/;
const CHOICE_ITEM = /^[-*+]\s+\[([ xX])\]\s?(.*)$/;
const DURATION_COMMENT = /^\s*<!--\s*duree\s*:\s*(\d+)\s*-->\s*$/i;
const FENCE = /^\s*(`{3,}|~{3,})/;

interface ChoiceDraft {
  correct: boolean;
  lines: string[];
}

interface QuestionDraft {
  heading: string;
  line: number;
  body: string[];
  choices: ChoiceDraft[];
  duree?: number;
}

/** Retire l'en-tête YAML (`---` … `---`) et en extrait les paires `clé: valeur`. */
function splitFrontMatter(lines: string[]): { meta: Record<string, string>; start: number } {
  const meta: Record<string, string> = {};
  if (lines[0]?.trim() !== "---") return { meta, start: 0 };
  const end = lines.findIndex((line, index) => index > 0 && line.trim() === "---");
  if (end === -1) return { meta, start: 0 };
  for (const line of lines.slice(1, end)) {
    const match = line.match(/^\s*([\w-]+)\s*:\s*(.*?)\s*$/);
    if (match) meta[match[1].toLowerCase()] = match[2].replace(/^(["'])(.*)\1$/, "$2");
  }
  return { meta, start: end + 1 };
}

/** Retire l'indentation commune des lignes de continuation d'un choix. */
function dedent(lines: string[]): string[] {
  const indents = lines.filter((line) => line.trim()).map((line) => line.match(/^\s*/)![0].length);
  const indent = indents.length ? Math.min(...indents) : 0;
  return lines.map((line) => line.slice(Math.min(indent, line.match(/^\s*/)![0].length)));
}

function joinTrimmed(lines: string[]): string {
  return lines.join("\n").replace(/^\s*\n/, "").trimEnd();
}

/** Transforme un quiz écrit en markdown en QuizData (à valider ensuite avec validateQuiz). */
export function parseQuizMarkdown(source: string): QuizData {
  const lines = source.replace(/\r\n?/g, "\n").split("\n");
  const { meta, start } = splitFrontMatter(lines);
  let titre = meta.titre;
  const defaultDuration = meta.duree ? Number(meta.duree) : undefined;

  const drafts: QuestionDraft[] = [];
  let current: QuestionDraft | null = null;
  let fence: string | null = null;

  for (let index = start; index < lines.length; index++) {
    const line = lines[index];
    const lineNumber = index + 1;
    const choice = current?.choices[current.choices.length - 1];
    const target = choice ? choice.lines : current?.body;

    // Dans un bloc de code, rien n'est interprété : `##` ou `- [ ]` y sont du code.
    const fenceMatch = line.match(FENCE);
    if (fence) {
      if (fenceMatch && fenceMatch[1][0] === fence[0] && fenceMatch[1].length >= fence.length) fence = null;
      target?.push(line);
      continue;
    }
    if (fenceMatch) fence = fenceMatch[1];

    const heading = line.match(QUESTION_HEADING);
    if (heading) {
      current = { heading: heading[1], line: lineNumber, body: [], choices: [] };
      drafts.push(current);
      continue;
    }

    if (!current) {
      const title = line.match(TITLE_HEADING);
      if (title && !titre) titre = title[1];
      continue;
    }

    const duration = line.match(DURATION_COMMENT);
    if (duration) {
      current.duree = Number(duration[1]);
      continue;
    }

    const item = line.match(CHOICE_ITEM);
    if (item) {
      current.choices.push({ correct: item[1] !== " ", lines: [item[2]] });
      continue;
    }

    if (choice && line.trim() && !/^\s/.test(line)) {
      throw new Error(
        `Ligne ${lineNumber} : texte après les choix de la question « ${current.heading} ». ` +
          "Indentez-le pour qu'il fasse partie du choix précédent."
      );
    }
    target!.push(line);
  }

  const questions = drafts.map((draft, index): Question => {
    const label = `Question ${index + 1} (ligne ${draft.line}, « ${draft.heading} »)`;
    if (draft.choices.length < 2) {
      throw new Error(`${label} : il faut au moins deux choix « - [ ] … ».`);
    }
    const correct = draft.choices.filter((choice) => choice.correct).length;
    if (correct !== 1) {
      throw new Error(`${label} : il faut cocher exactement une bonne réponse avec « - [x] » (${correct} cochée·s).`);
    }
    const body = joinTrimmed(draft.body);
    return {
      texte: body ? `${draft.heading}\n\n${body}` : draft.heading,
      choix: draft.choices.map((choice) => joinTrimmed([choice.lines[0], ...dedent(choice.lines.slice(1))])),
      reponse: draft.choices.findIndex((choice) => choice.correct),
      duree: draft.duree ?? defaultDuration,
    };
  });

  return { titre, questions };
}
