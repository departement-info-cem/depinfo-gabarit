import React from "react";
import { numeroCoursDuSite, useCoursDepartement } from "../donneesDepartement";

interface AbonnementAgendaProps {
  /** Numéro du cours sur le site du département ; par défaut numeroCours dans config.js */
  cours?: string;
  /** Seulement les groupes de ce prof (ex. « po.brillant ») */
  prof?: string;
}

// Abonner l'agenda du téléphone aux séances de son groupe : le fichier .ics est publié par le site du département,
// avec le local et un rappel 15 minutes avant chaque séance ; les congés et les cours annulés ou déplacés suivent.
// Rien n'est affiché si le site du département n'a pas d'agenda pour ce cours.
export default function AbonnementAgenda({ cours = numeroCoursDuSite, prof }: AbonnementAgendaProps) {
  const { cours: fichier } = useCoursDepartement(cours);
  const groupes = (fichier?.groupes ?? []).filter((g) => g.agenda && (!prof || g.prof.id === prof));
  if (groupes.length === 0) return null;

  return (
    <div>
      <ul>
        {groupes.map((g) => {
          const webcal = g.agenda!.replace(/^https?:/, "webcal:");
          return (
            <li key={g.agenda}>
              Groupe {g.groupe} ({g.prof.nom}) : <a href={webcal}>iPhone, Mac</a> ·{" "}
              <a href={`https://calendar.google.com/calendar/r?cid=${encodeURIComponent(webcal)}`} target="_blank" rel="noreferrer">
                Google Agenda
              </a>
            </li>
          );
        })}
      </ul>
      <p>
        <small>
          Sur iPhone, désactivez « Supprimer les alertes » en vous abonnant, sinon le rappel disparaît. Google Agenda ignore le rappel du
          fichier : ajoutez une notification dans les paramètres du calendrier du cours.
        </small>
      </p>
    </div>
  );
}
