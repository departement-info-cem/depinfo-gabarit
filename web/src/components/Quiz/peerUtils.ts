import type { DataConnection, Peer, PeerOptions } from "peerjs";

/**
 * Préfixe des identifiants PeerJS utilisés par ce plugin, pour limiter les
 * collisions avec d'autres usages du réseau public de courtage PeerJS.
 */
export const ROOM_ID_PREFIX = "depinfo-quiz-";

/** Délai maximal (ms) accordé à la connexion au serveur de courtage PeerJS. */
export const PEER_CONNECT_TIMEOUT_MS = 12000;

/** Un seul serveur STUN pour accélérer la négociation ICE (au lieu de la liste par défaut). */
const FAST_ICE_CONFIG: RTCConfiguration = {
  iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
};

function randomRoomCode(): string {
  return String(Math.floor(Math.random() * 100000)).padStart(5, "0");
}

function withIceConfig(peerOptions?: PeerOptions): PeerOptions {
  return { config: FAST_ICE_CONFIG, ...peerOptions };
}

/**
 * Crée un Peer hôte avec un identifiant court (code de salle), en réessayant
 * avec un nouveau code en cas de collision sur le réseau de courtage PeerJS.
 * Rejette après PEER_CONNECT_TIMEOUT_MS si la connexion au courtier ne s'établit pas.
 */
export function createPeerWithRetry(peerOptions?: PeerOptions, attemptsLeft = 5): Promise<Peer> {
  return new Promise((resolve, reject) => {
    const { Peer } = require("peerjs");
    const timeoutId = setTimeout(() => {
      peer?.destroy();
      reject(
        new Error(
          "La connexion au serveur de courtage PeerJS a pris trop de temps. Vérifiez votre connexion Internet et réessayez."
        )
      );
    }, PEER_CONNECT_TIMEOUT_MS);

    let peer: Peer;
    const attempt = () => {
      peer = new Peer(`${ROOM_ID_PREFIX}${randomRoomCode()}`, withIceConfig(peerOptions));

      const onOpen = () => {
        peer.off("error", onError);
        clearTimeout(timeoutId);
        resolve(peer);
      };
      const onError = (err: { type?: string; message: string }) => {
        peer.off("open", onOpen);
        if (err.type === "unavailable-id" && attemptsLeft > 0) {
          peer.destroy();
          attemptsLeft -= 1;
          attempt();
          return;
        }
        clearTimeout(timeoutId);
        reject(new Error(err.message));
      };

      peer.once("open", onOpen);
      peer.once("error", onError);
    };
    attempt();
  });
}

/**
 * Crée un Peer étudiant (identifiant généré par le courtier) et attend
 * l'établissement de la connexion, avec le même délai maximal que pour l'hôte.
 */
export function createStudentPeer(peerOptions?: PeerOptions): Promise<Peer> {
  return new Promise((resolve, reject) => {
    const { Peer } = require("peerjs");
    const peer: Peer = new Peer(withIceConfig(peerOptions));
    const timeoutId = setTimeout(() => {
      peer.destroy();
      reject(
        new Error(
          "La connexion au serveur de courtage PeerJS a pris trop de temps. Vérifiez votre connexion Internet et réessayez."
        )
      );
    }, PEER_CONNECT_TIMEOUT_MS);

    peer.once("open", () => {
      clearTimeout(timeoutId);
      resolve(peer);
    });
    peer.once("error", (err) => {
      clearTimeout(timeoutId);
      reject(new Error(err.message));
    });
  });
}

/** Se connecte à la salle d'un·e enseignant·e à partir de son code, avec délai maximal. */
export function connectToRoom(
  peer: Peer,
  code: string,
  timeoutMs = PEER_CONNECT_TIMEOUT_MS
): Promise<DataConnection> {
  return new Promise((resolve, reject) => {
    const conn = peer.connect(`${ROOM_ID_PREFIX}${code}`, { reliable: true });
    const timeoutId = setTimeout(() => {
      conn.close();
      reject(new Error("Impossible de joindre l'enseignant·e avec ce code (délai dépassé). Vérifiez le code et réessayez."));
    }, timeoutMs);

    conn.once("open", () => {
      clearTimeout(timeoutId);
      resolve(conn);
    });
    conn.once("error", (err) => {
      clearTimeout(timeoutId);
      reject(new Error(err.message));
    });
  });
}

