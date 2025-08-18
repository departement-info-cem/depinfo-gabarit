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
        label: "Cours",
        icon: "📋",
        component: <MainDocsGrid />,
        // Les titres et les sous-titres sont définis dans les attributs "title" et "description" de chaque document des cours.
    }, 
    {
        id: "calendar-prof1",
        label: "Prof 1", // Modifier pour le nom de l'enseignant
        icon: "📅",
        component: <MainDocsCalendar professorName="Prof 1" />, // Doit matcher le nom du professeur qui est dans l'attribut "calendrier" des cours qui sont dans sidebar.js
    },
    {
        id: "calendar-prof2",
        label: "Prof 2",  // Modifier pour le nom de l'enseignant
        icon: "📅",
        component: <MainDocsCalendar professorName="Prof 2" />, // Doit matcher le nom du professeur qui est dans l'attribut "calendrier" des cours qui sont dans sidebar.js
    },
    //* Ajouter d'autres enseignants ici. Voir sidebar.js pour configurer les calendriers.
    ]}
    defaultTabId="grid"
/>
