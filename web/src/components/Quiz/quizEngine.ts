// Logique du jeu de quiz (état des salles, questions, calcul des scores).
// Exécutée entièrement côté client : l'enseignant·e agit comme hôte de la partie.

export interface Question {
  texte: string;
  choix: string[];
  reponse: number;
  duree?: number;
}

export interface QuizData {
  titre?: string;
  questions: Question[];
}

export interface PlayerState {
  pseudo: string;
  score: number;
}

/** Participant·e vu·e par l'hôte : comme PlayerState, mais avec son identifiant de connexion. */
export interface RosterEntry extends PlayerState {
  id: string;
}

/** Forme normalisée d'un pseudonyme, utilisée comme clé de la liste des bannis. */
function normalizePseudo(pseudo: string): string {
  return pseudo.trim().toLowerCase();
}

interface AnswerState {
  choiceIndex: number;
  elapsed: number;
}

export type RoomStatus = "lobby" | "question" | "reveal" | "ended";

export const DEFAULT_DURATION_SECONDS = 20;
const MIN_POINTS = 500;
const MAX_POINTS = 1000;

/**
 * Calcule le nombre de points obtenus pour une réponse.
 * Une bonne réponse rapporte entre MIN_POINTS et MAX_POINTS selon la rapidité ;
 * une mauvaise réponse (ou une absence de réponse) ne rapporte aucun point.
 */
export function computeScore(correct: boolean, elapsedMs: number, durationSeconds: number): number {
  if (!correct) return 0;
  const durationMs = durationSeconds * 1000;
  const ratio = Math.max(0, Math.min(1, 1 - elapsedMs / durationMs));
  return Math.round(MIN_POINTS + (MAX_POINTS - MIN_POINTS) * ratio);
}

/** Valide qu'un objet chargé depuis un fichier JSON est bien un quiz utilisable. */
export function validateQuiz(quiz: unknown): QuizData {
  const candidate = quiz as Partial<QuizData> | null;
  if (!candidate || !Array.isArray(candidate.questions) || candidate.questions.length === 0) {
    throw new Error("Le fichier de quiz ne contient aucune question");
  }
  for (const question of candidate.questions) {
    if (typeof question.texte !== "string" || !Array.isArray(question.choix)) {
      throw new Error("Une question du fichier de quiz est mal formée");
    }
    if (
      typeof question.reponse !== "number" ||
      question.reponse < 0 ||
      question.reponse >= question.choix.length
    ) {
      throw new Error("Une question du fichier de quiz a une réponse invalide");
    }
  }
  return candidate as QuizData;
}

/** État d'une partie de quiz, géré côté hôte (navigateur de l'enseignant·e). */
export class QuizRoom {
  readonly quiz: QuizData;
  readonly players = new Map<string, PlayerState>();
  /** Pseudonymes bannis : forme normalisée → pseudonyme tel qu'il a été affiché. */
  readonly bannedPseudos = new Map<string, string>();
  /** Connexions bannies : identifiant PeerJS → pseudonyme normalisé correspondant. */
  private bannedIds = new Map<string, string>();
  private answers = new Map<string, AnswerState>();
  currentIndex = -1;
  questionStartAt = 0;
  status: RoomStatus = "lobby";

  constructor(quiz: QuizData) {
    this.quiz = quiz;
  }

  currentQuestion(): Question {
    return this.quiz.questions[this.currentIndex];
  }

  questionDuration(): number {
    return this.currentQuestion().duree || DEFAULT_DURATION_SECONDS;
  }

  /** Participant·e·s avec leur identifiant de connexion (usage interne à l'hôte). */
  roster(): RosterEntry[] {
    return Array.from(this.players.entries())
      .map(([id, { pseudo, score }]) => ({ id, pseudo, score }))
      .sort((a, b) => b.score - a.score);
  }

  /** Classement diffusé aux participant·e·s : sans les identifiants de connexion. */
  leaderboard(): PlayerState[] {
    return this.roster().map(({ pseudo, score }) => ({ pseudo, score }));
  }

  isIdBanned(playerId: string): boolean {
    return this.bannedIds.has(playerId);
  }

  isPseudoBanned(pseudo: string): boolean {
    return this.bannedPseudos.has(normalizePseudo(pseudo));
  }

  /**
   * Retire un·e participant·e de la partie (ex. pseudonyme obscène) et bloque
   * son pseudonyme : il ou elle peut revenir, mais avec un autre pseudonyme.
   */
  ban(playerId: string): void {
    const player = this.players.get(playerId);
    if (!player) return;
    const key = normalizePseudo(player.pseudo);
    this.bannedIds.set(playerId, key);
    this.bannedPseudos.set(key, player.pseudo);
    this.players.delete(playerId);
    this.answers.delete(playerId);
  }

  /** Réautorise un pseudonyme banni (clé normalisée telle que fournie par bannedPseudos). */
  unban(normalizedPseudo: string): void {
    this.bannedPseudos.delete(normalizedPseudo);
    for (const [playerId, key] of this.bannedIds) {
      if (key === normalizedPseudo) this.bannedIds.delete(playerId);
    }
  }

  startQuestion(index: number): void {
    this.currentIndex = index;
    this.status = "question";
    this.answers = new Map();
    this.questionStartAt = Date.now();
  }

  recordAnswer(playerId: string, choiceIndex: number): boolean {
    if (this.status !== "question" || !this.players.has(playerId) || this.answers.has(playerId)) {
      return false;
    }
    this.answers.set(playerId, { choiceIndex, elapsed: Date.now() - this.questionStartAt });
    return true;
  }

  answeredCount(): number {
    return this.answers.size;
  }

  /** Révèle la bonne réponse et met à jour les scores. */
  reveal(): { reponse: number; leaderboard: PlayerState[] } {
    this.status = "reveal";
    const question = this.currentQuestion();
    const duration = this.questionDuration();
    for (const [playerId, player] of this.players) {
      const answer = this.answers.get(playerId);
      const correct = Boolean(answer) && answer!.choiceIndex === question.reponse;
      const elapsed = answer ? answer.elapsed : Infinity;
      player.score += computeScore(correct, elapsed, duration);
    }
    return { reponse: question.reponse, leaderboard: this.leaderboard() };
  }

  hasNextQuestion(): boolean {
    return this.currentIndex + 1 < this.quiz.questions.length;
  }
}
