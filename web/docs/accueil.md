---
sidebar_position: 1
slug: /
hide_table_of_contents: true
---

# Accueil

<DocsViewer
    tabs={[
        {
            id: "grid",
            label: "Liste",
            icon: "📋",
            component: <MainDocsGrid />,
        },
        {
            id: "calendar-david",
            label: "David",
            icon: "📅",
            component: <MainDocsCalendar professorName="David" />,
        },
        {
            id: "calendar-eric",
            label: "Éric",
            icon: "📅",
            component: <MainDocsCalendar professorName="Éric" />,
        },
        {
            id: "calendar-jamil",
            label: "Jamil",
            icon: "📅",
            component: <MainDocsCalendar professorName="Jamil" />,
        },
        {
            id: "calendar-jean",
            label: "Jean-Michel",
            icon: "📅",
            component: <MainDocsCalendar professorName="Jean-Michel" />,
        },
        {
            id: "calendar-pierre",
            label: "Pierre-Paul",
            icon: "📅",
            component: <MainDocsCalendar professorName="Pierre-Paul" />,
        },
        {
            id: "calendar-zenia",
            label: "Zénia",
            icon: "📅",
            component: <MainDocsCalendar professorName="Zénia" />,
        },
    ]}
    defaultTabId="grid"
/>
