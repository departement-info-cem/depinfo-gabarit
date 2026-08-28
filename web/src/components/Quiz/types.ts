export interface Player {
  pseudo: string;
  score: number;
}

export interface QuestionShowPayload {
  index: number;
  total: number;
  texte: string;
  choix: string[];
  duree: number;
  startAt: number;
}

export interface QuestionRevealPayload {
  index: number;
  reponse: number;
  leaderboard: Player[];
}

/** Messages échangés sur la connexion PeerJS (canal de données WebRTC). */
export type PeerMessage =
  | { type: "join"; pseudo: string }
  | { type: "joinAck"; ok: boolean; message?: string; titre?: string }
  | { type: "players"; players: Player[] }
  | { type: "question"; payload: QuestionShowPayload }
  | { type: "answer"; choiceIndex: number }
  | { type: "answerAck"; ok: boolean; message?: string }
  | { type: "reveal"; payload: QuestionRevealPayload }
  | { type: "end"; leaderboard: Player[] };
