import React, { useEffect, useMemo, useRef, useState } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useColorMode } from "@docusaurus/theme-common";
import styles from "./WeeklySchedule.module.css";

interface ScheduleEvent {
  id?: string;
  day: string;
  start: string;
  end: string;
  title: string;
  courseCode?: string;
  courseGroup?: string;
  room?: string;
  category?: string;
}

interface ScheduleCategory {
  backgroundColor: string;
  textColor: string;
  darkBackgroundColor?: string;
  darkTextColor?: string;
}

interface WeeklyScheduleData {
  startHour?: string;
  endHour?: string;
  slotMinutes?: number;
  days?: string[];
  dayLabels?: Record<string, string>;
  categories?: Record<string, ScheduleCategory>;
  events: ScheduleEvent[];
}

interface WeeklyScheduleProps {
  dataUrl?: string;
  data?: WeeklyScheduleData;
  title?: string;
}

const DAY_ALIASES: Record<string, string> = {
  monday: "monday", mon: "monday", lundi: "monday", lun: "monday",
  tuesday: "tuesday", tue: "tuesday", mardi: "tuesday", mar: "tuesday",
  wednesday: "wednesday", wed: "wednesday", mercredi: "wednesday", mer: "wednesday",
  thursday: "thursday", thu: "thursday", jeudi: "thursday", jeu: "thursday",
  friday: "friday", fri: "friday", vendredi: "friday", ven: "friday",
  saturday: "saturday", sat: "saturday", samedi: "saturday", sam: "saturday",
  sunday: "sunday", sun: "sunday", dimanche: "sunday", dim: "sunday",
};

const DEFAULT_DAYS = ["monday", "tuesday", "wednesday", "thursday", "friday"];
const DEFAULT_DAY_LABELS: Record<string, string> = {
  monday: "Lundi",
  tuesday: "Mardi",
  wednesday: "Mercredi",
  thursday: "Jeudi",
  friday: "Vendredi",
  saturday: "Samedi",
  sunday: "Dimanche",
};

const PIXELS_PER_MINUTE = 1.3;
const TIME_COLUMN_WIDTH = 60;
const GRID_TOP_OFFSET = 16;
const GRID_BOTTOM_OFFSET = 16;

const normalizeDay = (value: string): string => {
  const key = value.trim().toLowerCase();
  return DAY_ALIASES[key] || key;
};

const parseTimeToMinutes = (time: string): number | null => {
  const match = /^(\d{1,2}):(\d{2})$/.exec(time.trim());
  if (!match) return null;

  const hours = Number(match[1]);
  const minutes = Number(match[2]);

  if (Number.isNaN(hours) || Number.isNaN(minutes)) return null;
  if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) return null;

  return hours * 60 + minutes;
};

const formatMinutes = (totalMinutes: number): string => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
};

export default function WeeklySchedule({
  dataUrl = "/ressources/weekly-schedule.sample.json",
  data,
  title,
}: WeeklyScheduleProps) {
  const [scheduleData, setScheduleData] = useState<WeeklyScheduleData | null>(data || null);
  const [error, setError] = useState<string | null>(null);
  const { colorMode } = useColorMode();
  const scheduleRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    const el = scheduleRef.current;
    if (!el) return;

    const rootCss = getComputedStyle(document.documentElement);
    const cssVarsContent = [
      "--ifm-color-emphasis-300",
      "--ifm-color-emphasis-200",
      "--ifm-color-emphasis-700",
      "--ifm-background-surface-color",
      "--ifm-color-primary",
      "--ifm-color-primary-lightest",
      "--ifm-font-color-base",
      "--ifm-font-family-base",
      "--ifm-font-size-base",
    ]
      .map((v) => `${v}: ${rootCss.getPropertyValue(v).trim() || "initial"};`)
      .join(" ");

    const styleLinks = Array.from(
      document.querySelectorAll<HTMLLinkElement>('link[rel="stylesheet"]')
    )
      .map((l) => `<link rel="stylesheet" href="${l.href}">`)
      .join("\n");

    // Zone utile : 11po - 2 × 0.4po = 10.2po, 8.5po - 2 × 0.4po = 7.7po à 96 dpi
    const usableW = Math.round((11 - 0.8) * 96);
    const usableH = Math.round((8.5 - 0.8) * 96);

    const win = window.open("", "_blank", `width=${usableW + 40},height=${usableH + 120}`);
    if (!win) return;

    const titleHtml = title
      ? `<h2 style="margin:0 0 0.4rem 0;font-size:1rem;font-weight:600;font-family:sans-serif;">${title}</h2>`
      : "";

    win.document.write(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  ${styleLinks}
  <style>
    :root { ${cssVarsContent} }
    @page { size: 11in 8.5in; margin: 0.4in; }
    *, *::before, *::after { box-sizing: border-box; }
    html, body { margin: 0; padding: 0; background: white; width: ${usableW}px; }
    [class*="schedule"] { overflow: visible !important; }
    [class*="headerRow"] { position: static !important; }
    [class*="dayColumn"] { background: none !important; }
    [class*="eventBox"] { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  </style>
</head>
<body>
  ${titleHtml}
  <div>${el.outerHTML}</div>
  <script>
    window.onload = function() {
      var totalH = document.body.scrollHeight;
      var totalW = document.body.scrollWidth;
      var scale = Math.min(${usableW} / totalW, ${usableH} / totalH, 1);
      if (scale < 1) {
        document.body.style.zoom = scale.toFixed(4);
      }
      setTimeout(function() { window.print(); window.close(); }, 300);
    };
  <\/script>
</body>
</html>`);
    win.document.close();
  };
  const baseDataUrl = useBaseUrl(dataUrl.startsWith("/") ? dataUrl : `/${dataUrl}`);
  const resolvedDataUrl = /^https?:\/\//i.test(dataUrl) ? dataUrl : baseDataUrl;

  useEffect(() => {
    if (data) {
      setScheduleData(data);
      setError(null);
      return;
    }

    fetch(resolvedDataUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Unable to load schedule data from ${resolvedDataUrl} (HTTP ${res.status})`);
        }
        return res.text();
      })
      .then((raw) => {
        try {
          const loadedData = JSON.parse(raw) as WeeklyScheduleData;
          setScheduleData(loadedData);
          setError(null);
        } catch {
          throw new Error(`Invalid JSON at ${resolvedDataUrl}`);
        }
      })
      .catch((fetchError: Error) => {
        setScheduleData(null);
        setError(fetchError.message);
      });
  }, [data, dataUrl, resolvedDataUrl]);

  const computed = useMemo(() => {
    if (!scheduleData) {
      return null;
    }

    const startMinutes = parseTimeToMinutes(scheduleData.startHour || "08:00") ?? 8 * 60;
    const endMinutes = parseTimeToMinutes(scheduleData.endHour || "18:00") ?? 18 * 60;
    const safeEndMinutes = endMinutes > startMinutes ? endMinutes : startMinutes + 60;

    const slotMinutes = scheduleData.slotMinutes && scheduleData.slotMinutes > 0
      ? scheduleData.slotMinutes
      : 30;

    const days = (scheduleData.days || DEFAULT_DAYS).map(normalizeDay);

    const totalMinutes = safeEndMinutes - startMinutes;
    const gridHeight = totalMinutes * PIXELS_PER_MINUTE;

    const timeMarkers: number[] = [];
    for (let m = startMinutes; m <= safeEndMinutes; m += slotMinutes) {
      timeMarkers.push(m);
    }

    const events = scheduleData.events
      .map((event, index) => {
        const normalizedDay = normalizeDay(event.day);
        const eventStart = parseTimeToMinutes(event.start);
        const eventEnd = parseTimeToMinutes(event.end);

        if (eventStart === null || eventEnd === null || eventEnd <= eventStart) {
          return null;
        }

        const clippedStart = Math.max(eventStart, startMinutes);
        const clippedEnd = Math.min(eventEnd, safeEndMinutes);

        if (clippedEnd <= clippedStart) {
          return null;
        }

        const categoryStyle = event.category
          ? scheduleData.categories?.[event.category]
          : undefined;
        const isDarkTheme = colorMode === "dark";

        return {
          ...event,
          id: event.id || `${normalizedDay}-${event.start}-${event.end}-${index}`,
          day: normalizedDay,
          top: GRID_TOP_OFFSET + (clippedStart - startMinutes) * PIXELS_PER_MINUTE,
          height: Math.max((clippedEnd - clippedStart) * PIXELS_PER_MINUTE, 20),
          timeLabel: `${formatMinutes(eventStart)} - ${formatMinutes(eventEnd)}`,
          backgroundColor:
            (isDarkTheme ? categoryStyle?.darkBackgroundColor : categoryStyle?.backgroundColor) ||
            categoryStyle?.backgroundColor ||
            "var(--ifm-color-primary-lightest)",
          textColor:
            (isDarkTheme ? categoryStyle?.darkTextColor : categoryStyle?.textColor) ||
            categoryStyle?.textColor ||
            "var(--ifm-font-color-base)",
        };
      })
      .filter((event): event is NonNullable<typeof event> => Boolean(event));

    return {
      days,
      dayLabels: { ...DEFAULT_DAY_LABELS, ...(scheduleData.dayLabels || {}) },
      events,
      startMinutes,
      slotMinutes,
      timeMarkers,
      gridHeight: gridHeight + GRID_TOP_OFFSET + GRID_BOTTOM_OFFSET,
    };
  }, [scheduleData, colorMode]);

  if (error) {
    return <div className={styles.error}>Schedule error: {error}</div>;
  }

  if (!computed) {
    return <div className={styles.loading}>Loading weekly schedule...</div>;
  }

  const columnTemplate = `${TIME_COLUMN_WIDTH}px repeat(${computed.days.length}, minmax(120px, 1fr))`;
  const gridMinWidth = `calc(${TIME_COLUMN_WIDTH}px + ${computed.days.length} * 120px)`;

  return (
    <section className={styles.wrapper}>
      <div className={styles.topBar}>
        {title ? <h3 className={styles.title}>{title}</h3> : <span />}
        <button type="button" className={styles.printButton} onClick={handlePrint}>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
          Imprimer
        </button>
      </div>

      <div ref={scheduleRef} className={styles.schedule}>
        <div
          className={styles.headerRow}
          style={{ gridTemplateColumns: columnTemplate, minWidth: gridMinWidth }}
        >
          <div className={styles.corner} />
          {computed.days.map((day) => (
            <div key={day} className={styles.dayHeader}>
              {computed.dayLabels[day] || day}
            </div>
          ))}
        </div>

        <div
          className={styles.bodyRow}
          style={{ gridTemplateColumns: columnTemplate, minWidth: gridMinWidth }}
        >
          <div className={styles.timeColumn}>
            {computed.timeMarkers.map((minutes) => (
              <div
                key={minutes}
                className={styles.timeLabel}
                style={{
                  top: GRID_TOP_OFFSET + (minutes - computed.startMinutes) * PIXELS_PER_MINUTE,
                }}
              >
                {formatMinutes(minutes)}
              </div>
            ))}
          </div>

          {computed.days.map((day) => {
            const dayEvents = computed.events.filter((event) => event.day === day);

            return (
              <div key={day} className={styles.dayColumn} style={{ height: computed.gridHeight }}>
                {computed.timeMarkers.map((minutes) => (
                  <div
                    key={`${day}-${minutes}`}
                    className={styles.timeLine}
                    style={{
                      top: GRID_TOP_OFFSET + (minutes - computed.startMinutes) * PIXELS_PER_MINUTE,
                    }}
                  />
                ))}

                {dayEvents.map((event) => (
                  <article
                    key={event.id}
                    className={styles.eventBox}
                    style={{
                      top: event.top,
                      height: event.height,
                      backgroundColor: event.backgroundColor,
                      color: event.textColor,
                    }}
                    title={`${event.title} (${event.timeLabel})`}
                  >
                    <div className={styles.eventContent}>
                      <div className={styles.eventTitle}>{event.title}</div>
                      {event.courseCode ? (
                        <div className={styles.eventMeta}>{event.courseCode}</div>
                      ) : null}
                      {event.courseGroup ? (
                        <div className={styles.eventMeta}>Gr. {event.courseGroup}</div>
                      ) : null}
                      {event.room ? (
                        <div className={styles.eventMeta}>Local: {event.room}</div>
                      ) : null}
                    </div>
                    <div className={styles.eventTime}>{event.timeLabel}</div>
                  </article>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
