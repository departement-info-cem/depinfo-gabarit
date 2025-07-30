---
sidebar_position: 1
slug: /
hide_table_of_contents: true
---

# Accueil

<Row>

<Column>

Bienvenue au cours de 1P6 - Programmation 1! Dans ce cours, tu apprendras la programmation à l'aide du language C#.

Le contenu des cours ainsi que les énoncés de TP sont disponibles dans les onglets **[Cours](cours/introduction)** et **[Travaux Pratiques](tp/tp1)**. Tu trouveras également les exerices et les solutions aux exercices dans les onglets **[Laboratoires](laboratoire/laboratoire1.1)** et **[Solutions](solution/Laboratoire-Solution1.1)**

:::info Installation à la maison

Voir la procédure ici : [Installation de Visual Studio](https://info.cegepmontpetit.ca/notions-csharp/bien-debuter/installation-des-logiciels/visual-studio)

:::

</Column>

<Column>

:::danger Plagiat

Les exercices peuvent être réalisés à plusieurs. Par contre, tous les travaux **évalués** sont **INDIVIDUELS**.

Lis les règles concernant le plagiat et les sanctions **[ici](https://info.cegepmontpetit.ca/plagiat)**

:::

:::tip Documentation du cours

La matière est expliquée dans chacun des cours, mais tu peux trouver plus d'information sur le site de <a href="https://info.cegepmontpetit.ca/notions-csharp/" target="_blank" rel="noopener noreferrer">Notions C#</a>.


👉 Consultez particulièrement la section [Bien débuter](https://info.cegepmontpetit.ca/notions-csharp/bien-debuter/) pour installer les logiciels nécessaires et découvrir les outils recommandés pour suivre le cours efficacement.

:::

</Column>

</Row>

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
