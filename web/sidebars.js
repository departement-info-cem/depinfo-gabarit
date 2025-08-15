// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: "doc",
      label: "1.1 - Introduction 🏁",
      id: "cours/introduction",
      customProps: {
        calendrier: {
          "David": "2025-08-25",
          "Éric": "2025-08-22",
          "Jamil": "2025-06-09",
          "Jean-Michel": "2025-08-25",
          "Pierre-Paul": "2025-08-25",
          "Zénia": "2025-06-09",
        },
      },
    },
    {
      type: "doc",
      label: "1.2 - Variables et opérations ",
      id: "cours/variables",
      customProps: {
        avancementLabel: "TP1 - Créé - ",
        avancement: 0.1,
        calendrier: {
          "David": "2025-08-28",
          "Éric": "2025-08-27",
          "Jamil": "2025-06-09",
          "Jean-Michel": "2025-08-27",
          "Pierre-Paul": "2025-08-27",
          "Zénia": "2025-06-09",
        },
      },
    },
    {
      type: "doc",
      label: "2.1 - Structures conditionnelles (if/else)",
      id: "cours/ifelse",
      customProps: {
        avancementLabel: "TP1",
        avancement: 0.2,
        calendrier: {
          "David": "2025-08-29",
          "Éric": "2025-09-03",
          "Jamil": "2025-06-09",
          "Jean-Michel": "2025-08-29",
          "Pierre-Paul": "2025-08-29",
          "Zénia": "2025-06-09",
        },
      },
    },
    {
      type: "doc",
      label: "2.2 - Fonctions",
      id: "cours/fonctions",
      customProps: {
        avancementLabel: "TP1",
        avancement: 0.4,
        calendrier: {
          "David": "2025-09-04",
          "Éric": "2025-09-10",
          "Jamil": "2025-06-09",
          "Jean-Michel": "2025-09-03",
          "Pierre-Paul": "2025-09-03",
          "Zénia": "2025-06-09",
        },
      },
    },
    {
      type: "doc",
      label: "3.1 - Intégration des fonctions",
      id: "cours/integration-fonctions",
      customProps: {
        avancementLabel: "TP1",
        avancement: 0.6,
        calendrier: {
          "David": "2025-09-08",
          "Éric": "2025-09-12",
          "Jamil": "2025-06-09",
          "Jean-Michel": "2025-09-08",
          "Pierre-Paul": "2025-09-08",
          "Zénia": "2025-06-09",
        },
      },
    },
    {
      type: "doc",
      label: "3.2 - TP1 - Créateur de personnage",
      id: "cours/integration-tp1",
      className: "remise-tp1",
      customProps: {
        avancementLabel: "TP1",
        avancement: 1.0,
        calendrier: {
          "David": "2025-09-11",
          "Éric": "2025-09-17",
          "Jamil": "2025-06-09",
          "Jean-Michel": "2025-09-10",
          "Pierre-Paul": "2025-09-10",
          "Zénia": "2025-06-09",
        },
      },
    },
    {
      type: "doc",
      label: "4.1 - Tableaux 1D",
      id: "cours/tableaux1d",
      customProps: {
        avancementLabel: "TP2 - Créé - ",
        avancement: 0.1,
        calendrier: {
          "David": "2025-09-15",
          "Éric": "2025-09-19",
          "Jamil": "2025-06-09",
          "Jean-Michel": "2025-09-15",
          "Pierre-Paul": "2025-09-15",
          "Zénia": "2025-06-09",
        },
      },
    },
    {
      type: "doc",
      label: "4.2 - Boucles for, tableaux et recherche",
      id: "cours/for",
      customProps: {
        avancementLabel: "TP2",
        avancement: 0.2,
        calendrier: {
          "David": "2025-09-18",
          "Éric": "2025-09-24",
          "Jamil": "2025-06-09",
          "Jean-Michel": "2025-09-17",
          "Pierre-Paul": "2025-09-17",
          "Zénia": "2025-06-09",
        },
      },
    },
    {
      type: "doc",
      label: "5.1 - Intégration des notions",
      id: "cours/integration-for",
      customProps: {
        avancementLabel: "TP2",
        avancement: 0.4,
        calendrier: {
          "David": "2025-09-22",
          "Éric": "2025-09-26",
          "Jamil": "2025-06-09",
          "Jean-Michel": "2025-09-22",
          "Pierre-Paul": "2025-09-22",
          "Zénia": "2025-06-09",
        },
      },
    },
    { 
      type: "doc", 
      label: "5.2 - Formatif 1", 
      id: "cours/formatif1",
      customProps: {
        calendrier: {
          "David": "2025-09-25",
          "Éric": "2025-10-01",
          "Jamil": "2025-06-09",
          "Jean-Michel": "2025-09-24",
          "Pierre-Paul": "2025-09-24",
          "Zénia": "2025-06-09",
        },
      },
    },
    { 
      type: "doc", 
      label: "6.1 - Examen 1", 
      id: "cours/examen1",
      className: "examen",
      customProps: {
        calendrier: {
          "David": "2025-09-29",
          "Éric": "2025-10-03",
          "Jamil": "2025-06-09",
          "Jean-Michel": "2025-09-29",
          "Pierre-Paul": "2025-09-29",
          "Zénia": "2025-06-09",
        },
      }, 
    },
    { 
      type: "doc", 
      label: "6.2 - Tableaux 2D", 
      id: "cours/tableaux2d",
      customProps: {
        avancementLabel: "TP2",
        avancement: 0.5,
        calendrier: {
          "David": "2025-10-02",
          "Éric": "2025-10-08",
          "Jamil": "2025-06-09",
          "Jean-Michel": "2025-10-01",
          "Pierre-Paul": "2025-10-01",
          "Zénia": "2025-06-09",
        },
      }, 
    },
    {
      type: "doc",
      label: "7.1 - Parcours de tableaux 2D",
      id: "cours/parcours2d",
      customProps: {
        avancementLabel: "TP2",
        avancement: 0.6,
        calendrier: {
          "David": "2025-10-06",
          "Éric": "2025-10-10",
          "Jamil": "2025-06-09",
          "Jean-Michel": "2025-10-06",
          "Pierre-Paul": "2025-10-06",
          "Zénia": "2025-06-09",
        },
      }
    },
    {
      type: "doc",
      label: "7.2 - Switch, while, do while",
      id: "cours/switch-while",
      customProps: {
        avancementLabel: "TP2",
        avancement: 0.7,
        calendrier: {
          "David": "2025-10-09",
          "Éric": "2025-10-22",
          "Jamil": "2025-06-09",
          "Jean-Michel": "2025-10-08",
          "Pierre-Paul": "2025-10-08",
          "Zénia": "2025-06-09",
        },
      }
    },
    {
      type: "doc",
      label: "8.1 - Intégration des notions vues",
      id: "cours/integration-2d",
      customProps: {
        avancementLabel: "TP2",
        avancement: 0.8,
        calendrier: {
          "David": "2025-10-20",
          "Éric": "2025-10-24",
          "Jamil": "2025-06-09",
          "Jean-Michel": "2025-10-20",
          "Pierre-Paul": "2025-10-20",
          "Zénia": "2025-06-09",
        },
      }
    },
    { 
      type: "doc", 
      label: "8.2 - TP2 - Mini RPG", 
      id: "cours/integration-tp2",
      className: "remise-tp2",
      customProps: {
        avancementLabel: "TP2",
        avancement: 1,
        calendrier: {
          "David": "2025-10-23",
          "Éric": "2025-10-29",
          "Jamil": "2025-06-09",
          "Jean-Michel": "2025-10-22",
          "Pierre-Paul": "2025-10-22",
          "Zénia": "2025-06-09",
        },
      } 
    },
    {
      type: "doc",
      label: "9.1 - Lecture de fichiers texte",
      id: "cours/lecture-texte",
      customProps: {
        avancementLabel: "TP3 - Créé -",
        avancement: 0.1,
        calendrier: {
          "David": "2025-10-27",
          "Éric": "2025-10-31",
          "Jamil": "2025-06-09",
          "Jean-Michel": "2025-10-27",
          "Pierre-Paul": "2025-10-27",
          "Zénia": "2025-06-09",
        },
      }
    },
    {
      type: "doc",
      label: "9.2 - Écriture dans un fichier",
      id: "cours/ecriture-texte",
      customProps: {
        avancementLabel: "TP3",
        avancement: 0.2,
        calendrier: {
          "David": "2025-10-30",
          "Éric": "2025-11-05",
          "Jamil": "2025-06-09",
          "Jean-Michel": "2025-10-29",
          "Pierre-Paul": "2025-10-29",
          "Zénia": "2025-06-09",
        },
      }
    },
    {
      type: "doc",
      label: "10.1 - Fichiers CSV et séparateurs",
      id: "cours/csv",
      customProps: {
        avancementLabel: "TP3",
        avancement: 0.3,
        calendrier: {
          "David": "2025-11-03",
          "Éric": "2025-11-07",
          "Jamil": "2025-06-09",
          "Jean-Michel": "2025-11-03",
          "Pierre-Paul": "2025-11-03",
          "Zénia": "2025-06-09",
        },
      }
    },
    { 
      type: "doc", 
      label: "10.2 - Formatif 2", 
      id: "cours/formatif2",
      customProps: {
        calendrier: {
          "David": "2025-11-06",
          "Éric": "2025-11-12",
          "Jamil": "2025-06-09",
          "Jean-Michel": "2025-11-05",
          "Pierre-Paul": "2025-11-05",
          "Zénia": "2025-06-09",
        },
      } 
    },
    { 
      type: "doc", 
      label: "11.1 - Examen 2", 
      id: "cours/examen2",
      className: "examen",
      customProps: {
        calendrier: {
          "David": "2025-11-13",
          "Éric": "2025-11-14",
          "Jamil": "2025-06-09",
          "Jean-Michel": "2025-11-12",
          "Pierre-Paul": "2025-11-12",
          "Zénia": "2025-06-09",
        },
      } 
    },
    { 
      type: "doc", 
      label: "11.2 - TP3 - RPG avancé", 
      id: "cours/integration-tp3-1",
      customProps: {
        avancementLabel: "TP2",
        avancement: 0.1,
        calendrier: {
          "David": "2025-11-17",
          "Éric": "2025-11-19",
          "Jamil": "2025-06-09",
          "Jean-Michel": "2025-11-17",
          "Pierre-Paul": "2025-11-17",
          "Zénia": "2025-06-09",
        },
      } },
    { 
      type: "doc", 
      label: "12.1 - TP3 - suite", 
      id: "cours/integration-tp3-2",
      className: "remise-tp3",
      customProps: {
        avancementLabel: "TP3",
        avancement: 1,
        calendrier: {
          "David": "2025-11-20",
          "Éric": "2025-11-21",
          "Jamil": "2025-06-09",
          "Jean-Michel": "2025-11-19",
          "Pierre-Paul": "2025-11-19",
          "Zénia": "2025-06-09",
        },
      } 
    },
    {
      type: "doc",
      label: "12.2 - Interface graphique",
      id: "cours/winform",
      customProps: {
        avancementLabel: "TP4 - Créé -",
        avancement: 0.15,
        calendrier: {
          "David": "2025-11-24",
          "Éric": "2025-11-26",
          "Jamil": "2025-06-09",
          "Jean-Michel": "2025-11-24",
          "Pierre-Paul": "2025-11-24",
          "Zénia": "2025-06-09",
        },
      }
    },
    {
      type: "doc",
      label: "13.1 - Introduction à la POO",
      id: "cours/poo",
      customProps: {
        avancementLabel: "TP4",
        avancement: 0.3,
        calendrier: {
          "David": "2025-11-27",
          "Éric": "2025-11-28",
          "Jamil": "2025-06-09",
          "Jean-Michel": "2025-11-26",
          "Pierre-Paul": "2025-11-26",
          "Zénia": "2025-06-09",
        },
      }
    },
    {
      type: "doc",
      label: "13.2 - Intégration des objets",
      id: "cours/integration-poo",
      customProps: {
        avancementLabel: "TP4",
        avancement: 0.5,
        calendrier: {
          "David": "2025-12-01",
          "Éric": "2025-12-03",
          "Jamil": "2025-06-09",
          "Jean-Michel": "2025-12-01",
          "Pierre-Paul": "2025-12-01",
          "Zénia": "2025-06-09",
        },
      }
    },
    { 
      type: "doc", 
      label: "14.1 - TP4 - Démineur", 
      id: "cours/integration-tp4-1",
      customProps: {
        avancementLabel: "TP4",
        avancement: 0.75,
        calendrier: {
          "David": "2025-12-04",
          "Éric": "2025-12-05",
          "Jamil": "2025-06-09",
          "Jean-Michel": "2025-12-03",
          "Pierre-Paul": "2025-12-03",
          "Zénia": "2025-06-09",
        },
      }
    },
    { 
      type: "doc", 
      label: "14.2 - TP4 - suite", 
      id: "cours/integration-tp4-2",
      className: "remise-tp4",
      customProps: {
        avancementLabel: "TP4",
        avancement: 1,
        calendrier: {
          "David": "2025-12-08",
          "Éric": "2025-12-09",
          "Jamil": "2025-06-09",
          "Jean-Michel": "2025-12-08",
          "Pierre-Paul": "2025-12-08",
          "Zénia": "2025-06-09",
        },
      } 
    },
    {
      type: "doc",
      label: "15.1 - Formatif 3",
      id: "cours/formatif3",
      customProps: {
        calendrier: {
          "David": "2025-12-11",
          "Éric": "2025-12-10",
          "Jamil": "2025-06-09",
          "Jean-Michel": "2025-12-10",
          "Pierre-Paul": "2025-12-10",
          "Zénia": "2025-06-09",
        },
      }
    },
    { 
      type: "doc", 
      label: "15.2 - Examen 3", 
      id: "cours/examen3",
      className: "examen",
      customProps: {
        calendrier: {
          "David": "2025-12-22",
          "Éric": "2025-12-22",
          "Jamil": "2025-06-09",
          "Jean-Michel": "2025-12-22",
          "Pierre-Paul": "2025-12-22",
          "Zénia": "2025-06-09",
        },
      } 
    },
  ],
  tp: [
    { type: "autogenerated", dirName: "02-tp" }
  ],
  
  laboratoire: [{ type: "autogenerated", dirName: "03-laboratoire" }],
  solution: [{ type: "autogenerated", dirName: "04-solution" }],
};


module.exports = sidebars;
