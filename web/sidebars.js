// @ts-check

let currentDate = new Date();
let month = currentDate.getMonth() + 1;

let collapseBloc1 = !(month <= 9);
let collapseBloc2 = !(month >= 9 && month <= 11);
let collapseBloc3 = !(month >= 11);

const g1120 = [
  "2025-08-25", // 1.1
  "2025-08-29", // cours/variables
  "2025-09-03", // cours/ifelse
  "2025-09-08", // cours/fonctions
  "2025-09-10", // cours/integration-fonctions
  "2025-09-15", // cours/integration-tp1
  "2025-09-17", // cours/for
  "2025-09-22", // cours/tableaux1d
  "2025-09-24", // cours/integration-for
  "2025-09-29", // cours/formatif1
  "2025-10-01", // cours/examen1
  "2025-10-06", // cours/tableaux2d
  "2025-10-08", // cours/integration-2d
  "2025-10-20", // cours/integration-tp2-1
  "2025-10-27", // cours/ecriture-texte
  "2025-10-29", // cours/lecture-texte
  "2025-11-03", // cours/csv
  "2025-11-05", // cours/formatif2
  "2025-11-12",
  "2025-11-17", // cours/examen2
  "2025-11-19", // cours/integration-tp3-1
  "2025-11-24", // cours/integration-tp3-2
  "2025-11-26", // cours/winform
  "2025-12-01", // cours/poo
  "2025-12-03", // cours/integration-poo
  "2025-12-08", // cours/integration-tp4-1
  "2025-12-09", // cours/integration-tp4-2
  "2025-12-10", // cours/formatif3
  "2025-12-18",
  "2025-12-22"  // cours/examen3
];

const g1080 = [
  "2025-08-25", // cours/introduction
  "2025-08-28", // cours/variables
  "2025-08-29", // cours/ifelse
  "2025-09-04", // cours/fonctions
  "2025-09-08", // cours/integration-fonctions
  "2025-09-11", // cours/integration-tp1
  "2025-09-15", // cours/for
  "2025-09-18", // cours/tableaux1d
  "2025-09-22", // cours/integration-for
  "2025-09-25", // cours/formatif1
  "2025-09-29", // cours/examen1
  "2025-10-02", // cours/tableaux2d
  "2025-10-06", // cours/integration-2d
  "2025-10-09", // cours/integration-tp2-1
  "2025-10-20", // cours/integration-tp2-2
  "2025-10-23", // cours/ecriture-texte
  "2025-10-27", // cours/lecture-texte
  "2025-10-30", // cours/csv
  "2025-11-03", // cours/formatif2
  "2025-11-06", // cours/examen2
  "2025-11-13", // cours/integration-tp3-1
  "2025-11-17", // cours/integration-tp3-2
  "2025-11-20", // cours/winform
  "2025-11-24", // cours/poo
  "2025-11-27", // cours/integration-poo
  "2025-12-01", // cours/integration-tp4-1
  "2025-12-04", // cours/integration-tp4-2
  "2025-12-08", // cours/formatif3
  "2025-12-15",  // cours/examen3
  "2025-12-22"  // cours/examen3
];

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: "doc",
      label: "1.1 - Introduction 🏁",
      id: "cours/introduction",
      customProps: {
        calendrier: {
          "David": [{"1090":"2025-08-25"}, {"1100":"2025-08-25"}],
          "Éric": [{"1050":"2025-08-22"}, {"1060":"2025-08-22"}],
          "Jamil": [{"1010":"2025-08-26"}, {"1020":"2025-08-26"}],
          "Jean-Michel": [{ "1120": g1120[0] }, { "1080": g1080[0] }],
          "Pierre-Paul": [{"1030":"2025-08-25"}, {"1040":"2025-08-25"}],
          "Tommy": [{"1130":"2025-08-22"}],
          "Philippe": [{"1070":"2025-08-25"}]
        },
        tooltip:"cache"
      },
    },
    {
      type: "doc",
      label: "1.2 - Variables et opérations",
      id: "cours/variables",
      customProps: {
        calendrier: {
          "David": [{"1090":"2025-08-28"}, {"1100":"2025-08-28"}],
          "Éric": [{"1050":"2025-08-27"}, {"1060":"2025-08-27"}],
          "Jamil": [{"1010":"2025-08-28"}, {"1020":"2025-08-28"}],
          "Jean-Michel": [{ "1120": g1120[1] }, { "1080": g1080[1] }],
          "Pierre-Paul": [{"1030":"2025-08-27"}, {"1040":"2025-08-27"}],
          "Tommy": [{"1130":"2025-08-26"}],
          "Philippe": [{"1070":"2025-08-28"}]
        },

        tooltip:"cache"
      },
    },
    {
      type: "doc",
      label: "2.1 - Structures conditionnelles (if/else)",
      id: "cours/ifelse",
      customProps: {
        calendrier: {
          "David": [{"1090":"2025-08-29"}, {"1100":"2025-08-29"}],
          "Éric": [{"1050":"2025-09-03"}, {"1060":"2025-09-05"}],
          "Jamil": [{"1010":"2025-09-02"}, {"1020":"2025-09-02"}],
          "Jean-Michel": [{ "1120": g1120[2] }, { "1080": g1080[2] }],
          "Pierre-Paul": [{"1030":"2025-08-29"}, {"1040":"2025-08-29"}],
          "Tommy": [{"1130":"2025-09-02"}],
          "Philippe": [{"1070":"2025-08-29"}]
        },
        tooltip:"cache"
      },
    },
    {
      type: "doc",
      label: "2.2 - Fonctions",
      id: "cours/fonctions",
      customProps: {
        avancementLabel: "TP1",
        avancement: 0.1,
        calendrier: {
          "David": [{"1090":"2025-09-04"}, {"1100":"2025-09-04"}],
          "Éric": [{"1050":"2025-09-10"}, {"1060":"2025-09-10"}],
          "Jamil": [{"1010":"2025-09-04"}, {"1020":"2025-09-04"}],
          "Jean-Michel": [{ "1120": g1120[3] }, { "1080": g1080[3] }],
          "Pierre-Paul": [{"1030":"2025-09-03"}, {"1040":"2025-09-03"}],
          "Tommy": [{"1130":"2025-09-05"}],
          "Philippe": [{"1070":"2025-09-04"}]
        },
        tooltip:"cache"
      },
    },
    {
      type: "doc",
      label: "3.1 - Intégration des fonctions",
      id: "cours/integration-fonctions",
      customProps: {
        avancementLabel: "TP1",
        avancement: 0.4,
        calendrier: {
          "David": [{"1090":"2025-09-08"}, {"1100":"2025-09-08"}],
          "Éric": [{"1050":"2025-09-12"}, {"1060":"2025-09-12"}],
          "Jamil": [{"1010":"2025-09-09"}, {"1020":"2025-09-09"}],
          "Jean-Michel": [{ "1120": g1120[4] }, { "1080": g1080[4] }],
          "Pierre-Paul": [{"1030":"2025-09-08"}, {"1040":"2025-09-08"}],
          "Tommy": [{"1130":"2025-09-09"}],
          "Philippe": [{"1070":"2025-09-08"}]
        },
        tooltip:"cache"
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
          "David": [{"1090":"2025-09-11"}, {"1100":"2025-09-11"}],
          "Éric": [{"1050":"2025-09-17"}, {"1060":"2025-09-17"}],
          "Jamil": [{"1010":"2025-09-11"}, {"1020":"2025-09-11"}],
          "Jean-Michel": [{ "1120": g1120[5] }, { "1080": g1080[5] }],
          "Pierre-Paul": [{"1030":"2025-09-10"}, {"1040":"2025-06-10"}],
          "Tommy": [{"1130":"2025-09-12"}],
          "Philippe": [{"1070":"2025-09-11"}]
        },
        tooltip:"cache"
      },
    },
    {
      type: "doc",
      label: "4.1 - Boucles for",
      id: "cours/for",
      customProps: {
        calendrier: {
          "David": [{"1090":"2025-09-15"}, {"1100":"2025-09-15"}],
          "Éric": [{"1050":"2025-09-19"}, {"1060":"2025-09-19"}],
          "Jamil": [{"1010":"2025-09-16"}, {"1020":"2025-09-16"}],
          "Jean-Michel": [{ "1120": g1120[6] }, { "1080": g1080[6] }],
          "Pierre-Paul": [{"1030":"2025-09-15"}, {"1040":"2025-09-15"}],
          "Tommy": [{"1130":"2025-09-16"}],
          "Philippe": [{"1070":"2025-09-15"}]
        },
        tooltip:"cache"
      }
    },
    {
      type: "doc",
      label: "4.2 - Tableaux 1D",
      id: "cours/tableaux1d",
      customProps: {
        calendrier: {
          "David": [{"1090":"2025-09-18"}, {"1100":"2025-09-18"}],
          "Éric": [{"1050":"2025-09-24"}, {"1060":"2025-09-24"}],
          "Jamil": [{"1010":"2025-09-18"}, {"1020":"2025-09-18"}],
          "Jean-Michel": [{ "1120": g1120[7] }, { "1080": g1080[7] }],
          "Pierre-Paul": [{"1030":"2025-09-17"}, {"1040":"2025-09-17"}],
          "Tommy": [{"1130":"2025-09-19"}],
          "Philippe": [{"1070":"2025-09-18"}]
        },
        tooltip:"cache"
      }
    },
    {
      type: "doc",
      label: "5.1 - Intégration des notions",
      id: "cours/integration-for",
      customProps: {
        calendrier: {
          "David": [{"1090":"2025-09-22"}, {"1100":"2025-09-22"}],
          "Éric": [{"1050":"2025-09-26"}, {"1060":"2025-09-26"}],
          "Jamil": [{"1010":"2025-09-23"}, {"1020":"2025-09-23"}],
          "Jean-Michel": [{ "1120": g1120[8] }, { "1080": g1080[8] }],
          "Pierre-Paul": [{"1030":"2025-09-22"}, {"1040":"2025-09-22"}],
          "Tommy": [{"1130":"2025-09-23"}],
          "Philippe": [{"1070":"2025-09-22"}]
        },
        tooltip:"cache"
      }
    },
    {
      type: "doc",
      label: "5.2 - Formatif 1",
      id: "cours/formatif1",
      customProps: {
        calendrier: {
          "David": [{"1090":"2025-09-25"}, {"1100":"2025-09-25"}],
          "Éric": [{"1050":"2025-10-01"}, {"1060":"2025-10-01"}],
          "Jamil": [{"1010":"2025-09-25"}, {"1020":"2025-09-25"}],
          "Jean-Michel": [{ "1120": g1120[9] }, { "1080": g1080[9] }],
          "Pierre-Paul": [{"1030":"2025-09-24"}, {"1040":"2025-09-24"}],
          "Tommy": [{"1130":"2025-09-26"}],
          "Philippe": [{"1070":"2025-09-25"}]
        },
        tooltip:"cache"
      }
    },
    {
      type: "doc",
      label: "6.1 - Examen 1",
      id: "cours/examen1",
      className: "examen",
      customProps: {
        calendrier: {
          "David": [{"1090":"2025-09-29"}, {"1100":"2025-09-29"}],
          "Éric": [{"1050":"2025-10-03"}, {"1060":"2025-10-03"}],
          "Jamil": [{"1010":"2025-09-30"}, {"1020":"2025-09-30"}],
          "Jean-Michel": [{ "1120": g1120[10] }, { "1080": g1080[10] }],
          "Pierre-Paul": [{"1030":"2025-09-29"}, {"1040":"2025-09-29"}],
          "Tommy": [{"1130":"2025-09-30"}],
          "Philippe": [{"1070":"2025-09-29"}]
        },
        tooltip:"cache"
      }
    },
    {
      type: "doc",
      label: "6.2 - Tableaux 2D",
      id: "cours/tableaux2d",
      customProps: {
        avancementLabel: "TP2",
        avancement: 0.1,
        calendrier: {
          "David": [{"1090":"2025-10-02"}, {"1100":"2025-10-02"}],
          "Éric": [{"1050":"2025-10-08"}, {"1060":"2025-10-08"}],
          "Jamil": [{"1010":"2025-10-02"}, {"1020":"2025-10-02"}],
          "Jean-Michel": [{ "1120": g1120[11] }, { "1080": g1080[11] }],
          "Pierre-Paul": [{"1030":"2025-10-01"}, {"1040":"2025-10-01"}],
          "Tommy": [{"1130":"2025-10-03"}],
          "Philippe": [{"1070":"2025-10-02"}]
        },
        tooltip:"cache"
      }
    },
    {
      type: "doc",
      label: "7.1 - Intégration des tableaux 2D",
      id: "cours/integration-2d",
      customProps: {
        avancementLabel: "TP2",
        avancement: 0.3,
        calendrier: {
          "David": [{"1090":"2025-10-06"}, {"1100":"2025-10-06"}],
          "Éric": [{"1050":"2025-10-10"}, {"1060":"2025-10-10"}],
          "Jamil": [{"1010":"2025-10-07"}, {"1020":"2025-10-07"}],
          "Jean-Michel": [{ "1120": g1120[12] }, { "1080": g1080[12] }],
          "Pierre-Paul": [{"1030":"2025-10-06"}, {"1040":"2025-10-06"}],
          "Tommy": [{"1130":"2025-10-07"}],
          "Philippe": [{"1070":"2025-10-06"}],
        },
        tooltip:"cache"
      }
    },
    {
      type: "doc",
      label: "7.2 - Switch, while, do while",
      id: "cours/switch-while",
      customProps: {
        avancementLabel: "TP2",
        avancement: 0.3,
        calendrier: {
          "David": [{"1090":"2025-10-09"}, {"1100":"2025-10-09"}],
          "Éric": [{"1050":"2025-10-22"}, {"1060":"2025-10-22"}],
          "Jamil": [{"1010":"2025-10-09"}, {"1020":"2025-10-09"}],
          "Jean-Michel": [{ "1120": g1120[13] }, { "1080": g1080[13] }],
          "Pierre-Paul": [{"1030":"2025-10-08"}, {"1040":"2025-10-08"}],
          "Tommy": [{"1130":"2025-10-10"}],
          "Philippe": [{"1070":"2025-10-09"}],
        },
        tooltip:"cache"
      }
    },
    {
      type: "doc",
      label: "8.1 - Intégration - TP2",
      id: "cours/integration-tp2-1",
      customProps: {
        avancementLabel: "TP2", 
        avancement: 0.6,
        calendrier: {
          "David": [{"1090":"2025-10-20"}, {"1100":"2025-10-20"}],
          "Éric": [{"1050":"2025-10-24"}, {"1060":"2025-10-24"}],
          "Jamil": [{"1010":"2025-10-21"}, {"1020":"2025-10-21"}],
          "Jean-Michel": [{ "1120": g1120[14] }, { "1080": g1080[14] }],
          "Pierre-Paul": [{"1030":"2025-10-20"}, {"1040":"2025-10-20"}],
          "Tommy": [{"1130":"2025-10-21"}],
          "Philippe": [{"1070":"2025-10-20"}],
        },
        tooltip:"cache"
      }
    },
    {
      type: "doc",
      label: "8.2 - TP2 - Mini RPG",
      id: "cours/integration-tp2-2",
      className: "remise-tp2",
      customProps: {
        avancementLabel: "TP2",
        avancement: 1.0,
        calendrier: {
          "David": [{"1090":"2025-10-23"}, {"1100":"2025-10-23"}],
          "Éric": [{"1050":"2025-10-29"}, {"1060":"2025-10-29"}],
          "Jamil": [{"1010":"2025-10-23"}, {"1020":"2025-10-23"}],
          "Jean-Michel": [{ "1120": g1120[15] }, { "1080": g1080[15] }],
          "Pierre-Paul": [{"1030":"2025-10-22"}, {"1040":"2025-10-22"}],
          "Tommy": [{"1130":"2025-10-24"}],
          "Philippe": [{"1070":"2025-10-23"}],
        },
        tooltip:"cache"
      }
    },
    {
      type: "doc",
      label: "9.1 - Écriture dans un fichier",
      id: "cours/ecriture-texte",
      customProps: {
        avancementLabel: "TP3 - Créé - ",
        avancement: 0.1,
        calendrier: {
          "David": [{"1090":"2025-10-27"}, {"1100":"2025-10-27"}],
          "Éric": [{"1050":"2025-10-31"}, {"1060":"2025-10-31"}],
          "Jamil": [{"1010":"2025-10-28"}, {"1020":"2025-10-28"}],
          "Jean-Michel": [{ "1120": g1120[16] }, { "1080": g1080[16] }],
          "Pierre-Paul": [{"1030":"2025-10-27"}, {"1040":"2025-10-27"}],
          "Tommy": [{"1130":"2025-10-28"}],
          "Philippe": [{"1070":"2025-10-27"}],
        },
        tooltip:"cache"
      }
    },
    {
      type: "doc",
      
      label: "9.2 - Lecture de fichiers texte",
      id: "cours/lecture-texte",
      customProps: {
        avancementLabel: "TP3",
        avancement: 0.2,
        calendrier: {
          "David": [{"1090":"2025-10-30"}, {"1100":"2025-10-30"}],
          "Éric": [{"1050":"2025-11-05"}, {"1060":"2025-11-05"}],
          "Jamil": [{"1010":"2025-10-30"}, {"1020":"2025-10-30"}],
          "Jean-Michel": [{ "1120": g1120[17] }, { "1080": g1080[17] }],
          "Pierre-Paul": [{"1030":"2025-10-29"}, {"1040":"2025-10-29"}],
          "Tommy": [{"1130":"2025-10-31"}],
          "Philippe": [{"1070":"2025-10-30"}],
        },
        tooltip:"cache"
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
          "David": [{"1090":"2025-11-03"}, {"1100":"2025-11-03"}],
          "Éric": [{"1050":"2025-11-07"}, {"1060":"2025-11-07"}],
          "Jamil": [{"1010":"2025-11-04"}, {"1020":"2025-11-04"}],
          "Jean-Michel": [{ "1120": g1120[18] }, { "1080": g1080[18] }],
          "Pierre-Paul": [{"1030":"2025-11-03"}, {"1040":"2025-11-03"}],
          "Tommy": [{"1130":"2025-11-04"}],
          "Philippe": [{"1070":"2025-11-03"}]
        },
        tooltip:"cache"
      }
    },
    {
      type: "doc",
      label: "10.2 - Formatif 2",
      id: "cours/formatif2",
      customProps: {
        calendrier: {
          "David": [{"1090":"2025-11-06"}, {"1100":"2025-11-06"}],
          "Éric": [{"1050":"2025-11-12"}, {"1060":"2025-11-12"}],
          "Jamil": [{"1010":"2025-11-06"}, {"1020":"2025-11-06"}],
          "Jean-Michel": [{ "1120": g1120[19] }, { "1080": g1080[19] }],
          "Pierre-Paul": [{"1030":"2025-11-05"}, {"1040":"2025-11-05"}],
          "Tommy": [{"1130":"2025-11-07"}],
          "Philippe": [{"1070":"2025-11-06"}]
        },
        tooltip:"cache"
      }
    },
    {
      type: "doc",
      label: "11.1 - Examen 2",
      id: "cours/examen2",
      className: "examen",
      customProps: {
        calendrier: {
          "David": [{"1090":"2025-11-13"}, {"1100":"2025-11-13"}],
          "Éric": [{"1050":"2025-11-14"}, {"1060":"2025-11-14"}],
          "Jamil": [{"1010":"2025-11-11"}, {"1020":"2025-11-11"}],
          "Jean-Michel": [{ "1120": g1120[20] }, { "1080": g1080[20] }],
          "Pierre-Paul": [{"1030":"2025-11-12"}, {"1040":"2025-11-12"}],
          "Tommy": [{"1130":"2025-11-11"}],
          "Philippe": [{"1070":"2025-11-13"}, {"1080":"2025-11-13"}]
        },
        tooltip:"cache"
      }
    },
    {
      type: "doc",
      label: "11.2 - TP3 - RPG avancé",
      id: "cours/integration-tp3-1",
      customProps: {
        avancementLabel: "TP3",
        avancement: 0.1,
        calendrier: {
          "David": [{"1090":"2025-11-17"}, {"1100":"2025-11-17"}],
          "Éric": [{"1050":"2025-11-19"}, {"1060":"2025-11-19"}],
          "Jamil": [{"1010":"2025-11-13"}, {"1020":"2025-11-13"}],
          "Jean-Michel": [{ "1120": g1120[21] }, { "1080": g1080[21] }],
          "Pierre-Paul": [{"1030":"2025-11-17"}, {"1040":"2025-11-17"}],
          "Tommy": [{"1130":"2025-11-14"}],
          "Philippe": [{"1070":"2025-11-17"}]
        },
        tooltip:"cache"
      }
    },
    {
      type: "doc",
      label: "12.1 - TP3 - suite",
      id: "cours/integration-tp3-2",
      className: "remise-tp3",
      customProps: {
        avancementLabel: "TP3",
        avancement: 1.0,
        calendrier: {
          "David": [{"1090":"2025-11-20"}, {"1100":"2025-11-20"}],
          "Éric": [{"1050":"2025-11-21"}, {"1060":"2025-11-21"}],
          "Jamil": [{"1010":"2025-11-18"}, {"1020":"2025-11-18"}],
          "Jean-Michel": [{ "1120": g1120[22] }, { "1080": g1080[22] }],
          "Pierre-Paul": [{"1030":"2025-11-19"}, {"1040":"2025-11-19"}],
          "Tommy": [{"1130":"2025-11-18"}],
          "Philippe": [{"1070":"2025-11-20"}]
        },
        tooltip:"cache"
      }
    },
    {
      type: "doc",
      label: "12.2 - Interface graphique",
      id: "cours/winform",
      customProps: {
        avancementLabel: "TP4 - Créé - ",
        avancement: 0.15,
        calendrier: {
          "David": [{"1090":"2025-11-24"}, {"1100":"2025-11-24"}],
          "Éric": [{"1050":"2025-11-26"}, {"1060":"2025-11-26"}],
          "Jamil": [{"1010":"2025-11-20"}, {"1020":"2025-11-20"}],
          "Jean-Michel": [{ "1120": g1120[23] }, { "1080": g1080[23] }],
          "Pierre-Paul": [{"1030":"2025-11-24"}, {"1040":"2025-11-24"}],
          "Tommy": [{"1130":"2025-11-21"}],
          "Philippe": [{"1070":"2025-11-24"}]
        },
        tooltip:"cache"
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
          "David": [{"1090":"2025-11-27"}, {"1100":"2025-11-27"}],
          "Éric": [{"1050":"2025-11-28"}, {"1060":"2025-11-28"}],
          "Jamil": [{"1010":"2025-11-25"}, {"1020":"2025-11-25"}],
          "Jean-Michel": [{ "1120": g1120[24] }, { "1080": g1080[24] }],
          "Pierre-Paul": [{"1030":"2025-11-26"}, {"1040":"2025-11-26"}],
          "Tommy": [{"1130":"2025-11-25"}],
          "Philippe": [{"1070":"2025-11-27"}]
        },
        tooltip:"cache"
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
          "David": [{"1090":"2025-12-01"}, {"1100":"2025-12-01"}],
          "Éric": [{"1050":"2025-12-03"}, {"1060":"2025-12-03"}],
          "Jamil": [{"1010":"2025-11-27"}, {"1020":"2025-11-27"}],
          "Jean-Michel": [{ "1120": g1120[25] }, { "1080": g1080[25] }],
          "Pierre-Paul": [{"1030":"2025-12-01"}, {"1040":"2025-12-01"}],
          "Tommy": [{"1130":"2025-11-28"}],
          "Philippe": [{"1070":"2025-12-01"}, {"1080":"2025-12-01"}]
        },
        tooltip:"cache"
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
          "David": [{"1090":"2025-12-04"}, {"1100":"2025-12-04"}],
          "Éric": [{"1050":"2025-12-05"}, {"1060":"2025-12-05"}],
          "Jamil": [{"1010":"2025-12-02"}, {"1020":"2025-12-02"}],
          "Jean-Michel": [{ "1120": g1120[26] }, { "1080": g1080[26] }],
          "Pierre-Paul": [{"1030":"2025-12-03"}, {"1040":"2025-12-03"}],
          "Tommy": [{"1130":"2025-12-02"}],
          "Philippe": [{"1070":"2025-12-04"}]
        },
        tooltip:"cache"
      }
    },
    {
      type: "doc",
      label: "14.2 - TP4 - suite",
      id: "cours/integration-tp4-2",
      className: "remise-tp4",
      customProps: {
        avancementLabel: "TP4",
        avancement: 1.0,
        calendrier: {
          "David": [{"1090":"2025-12-08"}, {"1100":"2025-12-08"}],
          "Éric": [{"1050":"2025-12-09"}, {"1060":"2025-12-09"}],
          "Jamil": [{"1010":"2025-12-04"}, {"1020":"2025-12-04"}],
          "Jean-Michel": [{ "1120": g1120[27] }, { "1080": g1080[27] }],
          "Pierre-Paul": [{"1030":"2025-12-08"}, {"1040":"2025-12-08"}],
          "Tommy": [{"1130":"2025-12-05"}],
          "Philippe": [{"1070":"2025-12-08"}]
        },
        tooltip:"cache"
      }
    },
    {
      type: "doc",
      label: "15.1 - Formatif 3",
      id: "cours/formatif3",
      customProps: {
        calendrier: {
          "David": [{"1090":"2025-12-11"}, {"1100":"2025-12-11"}],
          "Éric": [{"1050":"2025-12-10"}, {"1060":"2025-12-10"}],
          "Jamil": [{"1010":"2025-12-11"}, {"1020":"2025-12-11"}],
          "Jean-Michel": [{ "1120": g1120[28] }, { "1080": g1080[28] }],
          "Pierre-Paul": [{"1030":"2025-12-10"}, {"1040":"2025-12-10"}],
          "Tommy": [{"1130":"2025-12-16"}],
          "Philippe": [{"1070":"2025-12-11"}]
        },
        tooltip:"cache"
      }
    },
    {
      type: "doc",
      label: "15.2 - Examen 3",
      id: "cours/examen3",
      className: "examen",
      customProps: {
        calendrier: {
          "David": [{"1090":"2025-12-22"}, {"1100":"2025-12-22"}],
          "Éric": [{"1050":"2025-12-22"}, {"1060":"2025-12-22"}],
          "Jamil": [{"1010":"2025-12-22"}, {"1020":"2025-12-22"}],
          "Jean-Michel": [{ "1120": g1120[29] }, { "1080": g1080[29] }],
          "Pierre-Paul": [{"1030":"2025-12-22"}, {"1040":"2025-12-22"}],
          "Tommy": [{"1130":"2025-12-19"}],
          "Philippe": [{"1070":"2025-12-22"}]
        },
        tooltip:"cache"
      }
    }

  ],
  tp: [
    { type: "autogenerated", dirName: "02-tp" }
  ],
  laboratoire: [
    {
      type: 'category',
      label: 'Laboratoire 1.1',
      collapsible: true,
      collapsed: collapseBloc1,
      items: ['laboratoire/laboratoire1.1', 'laboratoire/laboratoire1.1B']
    },
    {
      type: 'category',
      label: 'Laboratoire 1.2',
      collapsible: true,
      collapsed: collapseBloc1,
      items: ['laboratoire/laboratoire1.2A', 'laboratoire/laboratoire1.2B']
    },
    {
      type: 'category',
      label: 'Laboratoire 2.1',
      collapsible: true,
      collapsed: collapseBloc1,
      items: ['laboratoire/laboratoire2.1A', 'laboratoire/laboratoire2.1B']
    },
    {
      type: 'category',
      label: 'Laboratoire 2.2',
      collapsible: true,
      collapsed: collapseBloc1,
      items: ['laboratoire/laboratoire2.2A', 'laboratoire/laboratoire2.2B', 'laboratoire/laboratoire2.2C']
    },
    {
      type: 'category',
      label: 'Laboratoire 3.1',
      collapsible: true,
      collapsed: collapseBloc1,
      items: ['laboratoire/laboratoire3.1A', 'laboratoire/laboratoire3.1B']
    },

    {
      type: 'category',
      label: 'Laboratoire 4.1',
      collapsible: true,
      collapsed: collapseBloc1,
      items: ['laboratoire/laboratoire4.1A', 'laboratoire/laboratoire4.1B']
    },
    {
      type: 'category',
      label: 'Laboratoire 4.2',
      collapsible: true,
      collapsed: collapseBloc1,
      items: ['laboratoire/laboratoire4.2A','laboratoire/laboratoire4.2B','laboratoire/laboratoire4.2C']
    },
    {
      type: 'category',
      label: 'Laboratoire 5.1',
      collapsible: true,
      collapsed: collapseBloc1,
      items: ['laboratoire/laboratoire5.1A', 'laboratoire/laboratoire5.1B', 'laboratoire/laboratoire5.1C']
    },
    {
      type: 'category',
      label: 'Laboratoire 6.2',
      collapsible: true,
      collapsed: collapseBloc2,
      items: ['laboratoire/laboratoire6.2A','laboratoire/laboratoire6.2B']
    },
    {
      type: 'category',
      label: 'Laboratoire 7.2',
      collapsible: true,
      collapsed: collapseBloc2,
      items: ['laboratoire/laboratoire7.2A', 'laboratoire/laboratoire7.2B']
    },
    {
      type: 'category',
      label: 'Laboratoire 8.1',
      collapsible: true,
      collapsed: collapseBloc2,
      items: ['laboratoire/laboratoire8.1A']
    },
    {
      type: 'category',
      label: 'Laboratoire 9.1',
      collapsible: true,
      collapsed: collapseBloc2,
      items: ['laboratoire/laboratoire9.1']
    },
    {
      type: 'category',
      label: 'Laboratoire 9.2',
      collapsible: true,
      collapsed: collapseBloc2,
      items: ['laboratoire/laboratoire9.2']
    },
    {
      type: 'category',
      label: 'Laboratoire 10.1',
      collapsible: true,
      collapsed: collapseBloc2,
      items: ['laboratoire/laboratoire10.1']
    },
    {
      type: 'category',
      label: 'Laboratoire 12.2',
      collapsible: true,
      collapsed: collapseBloc3,
      items: ['laboratoire/laboratoire12.2']
    },
    {
      type: 'category',
      label: 'Laboratoire 13.1',
      collapsible: true,
      collapsed: collapseBloc3,
      items: ['laboratoire/laboratoire13.1']
    },
    {
      type: 'category',
      label: 'Laboratoire 13.2',
      collapsible: true,
      collapsed: collapseBloc3,
      items: ['laboratoire/laboratoire13.2']
    },
  ],
  solution: [{ type: "autogenerated", dirName: "04-solution" }],
  extra: [{ type: "autogenerated", dirName: "05-extra" }],
};


module.exports = sidebars;