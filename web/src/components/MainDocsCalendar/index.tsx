import React, { useEffect, useState } from "react";
import styles from "./MainDocsCalendar.module.css";
import { useHistory } from "@docusaurus/router";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useColorMode } from "@docusaurus/theme-common";
import sidebarDocs from "../MainDocsGrid/sidebarDocs";

interface CalendarEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  className?: string;
  customProps?: any;
}

interface CalendarDay {
  date: Date;
  events: CalendarEvent[];
  isCurrentMonth: boolean;
}

interface MainDocsCalendarProps {
  professorName: string;
}

export default function MainDocsCalendar({
  professorName,
}: MainDocsCalendarProps) {
  const [docs, setDocs] = useState<any[]>([]);
  const [meta, setMeta] = useState<any[]>([]);
  const [currentDate, setCurrentDate] = useState<Date | null>(null);
  const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[]>([]);
  const history = useHistory();
  const baseUrl = useBaseUrl("/");
  const { colorMode } = useColorMode();

  // Fonction pour détecter l'année à partir de la première date trouvée
  const detectYearFromSidebar = (): number => {
    for (const entry of sidebarDocs) {
      if (entry.customProps?.calendrier) {
        const firstDate = Object.values(
          entry.customProps.calendrier
        )[0] as string;
        if (firstDate) {
          return new Date(firstDate).getFullYear();
        }
      }
    }
    return new Date().getFullYear(); // Fallback vers l'année courante
  };

  // Initialiser la date courante basée sur l'année détectée
  useEffect(() => {
    const detectedYear = detectYearFromSidebar();
    const today = new Date();
    setCurrentDate(new Date(detectedYear, today.getMonth(), 1));
  }, []);

  useEffect(() => {
    fetch("docsMetadata.json")
      .then((res) => res.json())
      .then((data) => setMeta(data));
  }, []);

  useEffect(() => {
    if (meta.length === 0) return;

    // Pour chaque entrée de la sidebar, trouver le doc correspondant
    const docsList = sidebarDocs.map((entry: any) => {
      const suffix = entry.id.split("/").pop();
      const doc = meta.find((d: any) => d.id.endsWith(suffix));
      return {
        ...doc,
        _sidebarLabel: entry.label,
        _sidebarProps: entry.customProps,
        _sidebarClassName: entry.className,
      };
    });
    setDocs(docsList);

    // Créer les événements du calendrier pour le professeur spécifié
    const events: CalendarEvent[] = [];
    docsList.forEach((doc) => {
      if (
        doc._sidebarProps?.calendrier &&
        doc._sidebarProps.calendrier[professorName]
      ) {
        const date = doc._sidebarProps.calendrier[professorName];
        events.push({
          id: doc.id, // Utiliser directement l'ID du document
          title: doc?.title || doc?._sidebarLabel || doc?.id,
          description: doc?.description || "",
          date: date as string,
          className: doc._sidebarClassName,
          customProps: doc._sidebarProps,
        });
      }
    });
    setCalendarEvents(events);
  }, [meta, professorName]);

  const handleEventClick = (event: CalendarEvent) => {
    // Trouver le document correspondant
    const doc = docs.find((d) => d.id === event.id);
    if (doc) {
      // Nettoyer l'ID pour créer le slug
      const slug = doc.id.replace(/^cours\//, "").replace(/^[0-9]+-/, "");
      history.push(`${baseUrl}cours/${slug}`);
    } else {
      console.warn(`Document non trouvé pour l'événement: ${event.id}`);
    }
  };

  const generateCalendarDays = (): CalendarDay[] => {
    if (!currentDate) return [];

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // Premier jour du mois
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    // Premier lundi à afficher (peut être du mois précédent)
    const startDate = new Date(firstDay);
    const dayOfWeek = firstDay.getDay();
    const daysToSubtract = dayOfWeek === 0 ? 6 : dayOfWeek - 1; // Lundi = 0
    startDate.setDate(firstDay.getDate() - daysToSubtract);

    // Générer seulement les jours de semaine (lundi à vendredi)
    const days: CalendarDay[] = [];
    let currentDateIter = new Date(startDate);

    // Générer assez de semaines pour couvrir tout le mois
    const totalWeeks = 6;
    for (let week = 0; week < totalWeeks; week++) {
      for (let day = 0; day < 5; day++) {
        // Seulement lundi à vendredi
        const date = new Date(currentDateIter);

        const dateStr = date.toISOString().split("T")[0];
        const dayEvents = calendarEvents.filter(
          (event) => event.date === dateStr
        );

        days.push({
          date,
          events: dayEvents,
          isCurrentMonth: date.getMonth() === month,
        });

        currentDateIter.setDate(currentDateIter.getDate() + 1);
      }

      // Passer au lundi suivant (ajouter 2 jours pour passer le weekend)
      currentDateIter.setDate(currentDateIter.getDate() + 2);
    }

    return days;
  };

  const formatMonth = () => {
    if (!currentDate) return "";
    return currentDate.toLocaleDateString("fr-FR", {
      month: "long",
      year: "numeric",
    });
  };

  const goToPreviousMonth = () => {
    if (!currentDate) return;
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const goToNextMonth = () => {
    if (!currentDate) return;
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const getEventBackgroundColor = (className: string): string => {
    if (className && className.includes("remise-tp")) {
      return colorMode === "dark" ? "#1b4a3a" : "#e8f5e8";
    }
    if (className && className.includes("examen")) {
      return colorMode === "dark" ? "#4a1b1b" : "#ffebee";
    }
    return colorMode === "dark" ? "#1e3a4a" : "#f0f9ff";
  };

  const calendarDays = generateCalendarDays();

  if (!currentDate) {
    return <div>Chargement du calendrier...</div>;
  }

  return (
    <div className={styles.calendarContainer}>
      <div className={styles.calendarHeader}>
        <button
          className={styles.navButton}
          onClick={goToPreviousMonth}
          aria-label="Mois précédent"
        >
          ‹
        </button>
        <h2 className={styles.monthTitle}>
          {professorName} -{" "}
          {formatMonth().charAt(0).toUpperCase() + formatMonth().slice(1)}
        </h2>
        <button
          className={styles.navButton}
          onClick={goToNextMonth}
          aria-label="Mois suivant"
        >
          ›
        </button>
      </div>

      <div className={styles.calendarGrid}>
        <div className={styles.weekHeader}>
          {["Lun", "Mar", "Mer", "Jeu", "Ven"].map((day) => (
            <div key={day} className={styles.dayHeader}>
              {day}
            </div>
          ))}
        </div>

        <div className={styles.daysGrid}>
          {calendarDays.map((day, index) => (
            <div
              key={index}
              className={`${styles.dayCell} ${
                !day.isCurrentMonth ? styles.otherMonth : ""
              } ${
                day.date.toDateString() === new Date().toDateString()
                  ? styles.today
                  : ""
              }`}
            >
              <div className={styles.dayNumber}>{day.date.getDate()}</div>
              <div className={styles.eventsContainer}>
                {day.events.map((event, eventIndex) => (
                  <div
                    key={eventIndex}
                    className={styles.event}
                    style={{
                      backgroundColor: getEventBackgroundColor(
                        event.className || ""
                      ),
                    }}
                    onClick={() => handleEventClick(event)}
                    title={`${event.title} - ${professorName}`}
                  >
                    <div className={styles.eventTitle}>{event.title}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
