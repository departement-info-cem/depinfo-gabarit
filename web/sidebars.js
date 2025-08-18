// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: "doc",
      label: "1.1 - Rencontre",
      id: "cours/rencontre1.1", // Doit matcher le nom du document qui est dans docs/01-cours/. Les chiffres au début (ex : 01-) sont ignorés.
      customProps: { // Attention, il faut recompiler à chaque modification dans sidebar.js pour que les modifications s'appliquent.
        calendrier: {
          "Prof 1": [
            {"1010": "2025-06-09"}  // Date du cours pour le groupe 1010 du le Prof 1
          ],
          "Prof 2": [
            {"1020": "2025-06-09"},  // Date du cours pour le groupe 1020 du le Prof 2
            {"1030": "2025-06-09"} // Date du cours pour le groupe 1030 du le Prof 2
          ]
        },
        tooltip: "visible" // Valeurs possibles visible ou cache, valeur par défaut "visible"
      }
    },
    {
      type: "doc",
      label: "1.2 - Rencontre",
      id: "cours/rencontre1.2",
      customProps: {
        calendrier: {
          "Prof 1": [
            {"1010": "2025-06-09"} // Date du cours pour le groupe 1010 du le Prof 1
          ],
          "Prof 2": [
            {"1020": "2025-06-09"}, // Date du cours pour le groupe 1020 du le Prof 2
            {"1030": "2025-06-09"} // Date du cours pour le groupe 1030 du le Prof 2
          ]
        },
        tooltip: "cache"
      }
    },
    {
      type: "doc",
      label: "2.1 - Rencontre",
      id: "cours/rencontre2.1",
      customProps: {
        calendrier: {
          "Prof 1": [
            {"1010": "2025-06-11"}
          ],
          "Prof 2": [
            {"1020": "2025-06-09"},
            {"1030": "2025-06-09"}
          ]
        },
        avancementLabel: "TP1 - Créé",
        avancement: 0.0
      }
    },
    {
      type: "doc",
      label: "2.2 - Rencontre",
      id: "cours/rencontre2.2",
      customProps: {
        calendrier: {
          "Prof 1": [
            {"1010": "2025-06-11"}
          ],
          "Prof 2": [
            {"1020": "2025-06-11"},
            {"1030": "2025-06-11"}
          ]
        },
        avancementLabel: "TP1",
        avancement: 0.1
      }
    },
    {
      type: "doc",
      label: "3.1 - Rencontre",
      id: "cours/rencontre3.1",
      customProps: {
        calendrier: {
          "Prof 1": [
            {"1010": "2025-06-12"}
          ],
          "Prof 2": [
            {"1020": "2025-06-11"},
            {"1030": "2025-06-11"}
          ]
        },
        avancementLabel: "TP1",
        avancement: 0.25
      }
    },
    {
      type: "doc",
      label: "3.2 - Rencontre",
      id: "cours/rencontre3.2",
      customProps: {
        calendrier: {
          "Prof 1": [
            {"1010": "2025-06-12"}
          ],
          "Prof 2": [
            {"1020": "2025-06-12"},
            {"1030": "2025-06-12"}
          ]
        },
        avancementLabel: "TP1",
        avancement: 0.5
      }
    },
    {
      type: "doc",
      label: "4.1 - Rencontre",
      id: "cours/rencontre4.1",
      customProps: {
        calendrier: {
          "Prof 1": [
            {"1010": "2025-06-16"}
          ],
          "Prof 2": [
            {"1020": "2025-06-12"},
            {"1030": "2025-06-12"}
          ]
        },
        avancementLabel: "TP1",
        avancement: 0.75
      }
    },
    {
      type: "doc",
      label: "4.2 - Rencontre",
      id: "cours/rencontre4.2",
      customProps: {
        calendrier: {
          "Prof 1": [
            {"1010": "2025-06-16"}
          ],
          "Prof 2": [
            {"1020": "2025-06-16"},
            {"1030": "2025-06-16"}
          ]
        },
        avancementLabel: "TP1",
        avancement: 1
      }
    },
    {
      type: "doc",
      label: "5.1 - Rencontre",
      id: "cours/rencontre5.1",
      customProps: {
        calendrier: {
          "Prof 1": [
            {"1010": "2025-06-18"}
          ],
          "Prof 2": [
            {"1020": "2025-06-18"},
            {"1030": "2025-06-18"}
          ]
        },
        avancementLabel: "TP2 - Créé",
        avancement: 0.0
      },
      "className": "remise-tp1"
    },
    {
      type: "doc",
      label: "5.2 - Rencontre",
      id: "cours/rencontre5.2",
      customProps: {
        calendrier: {
          "Prof 1": [
            {"1010": "2025-06-18"}
          ],
          "Prof 2": [
            {"1020": "2025-06-18"},
            {"1030": "2025-06-18"}
          ]
        },
        avancementLabel: "TP2",
        avancement: 0.1
      }
    },
    {
      type: "doc",
      label: "6.1 - Rencontre",
      id: "cours/rencontre6.1",
      customProps: {
        calendrier: {
          "Prof 1": [
            {"1010": "2025-06-19"}
          ],
          "Prof 2": [
            {"1020": "2025-06-19"},
            {"1030": "2025-06-19"}
          ]
        },
        avancementLabel: "TP2",
        avancement: 0.3
      }
    },
    {
      type: "doc",
      label: "6.2 - Rencontre",
      id: "cours/rencontre6.2",
      customProps: {
        calendrier: {
          "Prof 1": [
            {"1010": "2025-06-19"}
          ],
          "Prof 2": [
            {"1020": "2025-06-19"},
            {"1030": "2025-06-19"}
          ]
        },
        avancementLabel: "TP2",
        avancement: 0.4
      }
    },
    {
      type: "doc",
      label: "7.1 - Rencontre",
      id: "cours/rencontre7.1",
      customProps: {
        calendrier: {
          "Prof 1": [
            {"1010": "2025-06-23"}
          ],
          "Prof 2": [
            {"1020": "2025-06-16"},
            {"1030": "2025-06-16"}
          ]
        },
        avancementLabel: "TP2",
        avancement: 0.4
      }
    },
    {
      type: "doc",
      label: "7.2 - Rencontre",
      id: "cours/rencontre7.2",
      customProps: {
        calendrier: {
          "Prof 1": [
            {"1010": "2025-06-23"}
          ],
          "Prof 2": [
            {"1020": "2025-06-19"},
            {"1030": "2025-06-19"}
          ]
        }
      },
      "className": "examen"
    },
    {
      type: "doc",
      label: "8.1 - Rencontre",
      id: "cours/rencontre8.1",
      customProps: {
        calendrier: {
          "Prof 1": [
            {"1010": "2025-06-25"}
          ],
          "Prof 2": [
            {"1020": "2025-06-23"},
            {"1030": "2025-06-23"}
          ]
        },
        avancementLabel: "TP2",
        avancement: 0.6
      }
    },
    {
      type: "doc",
      label: "8.2 - Rencontre",
      id: "cours/rencontre8.2",
      customProps: {
        calendrier: {
          "Prof 1": [
            {"1010": "2025-06-25"}
          ],
          "Prof 2": [
            {"1020": "2025-06-23"},
            {"1030": "2025-06-23"}
          ]
        },
        avancementLabel: "TP2",
        avancement: 0.7
      }
    },
    {
      type: "doc",
      label: "9.1 - Rencontre",
      id: "cours/rencontre9.1",
      customProps: {
        calendrier: {
          "Prof 1": [
            {"1010": "2025-06-26"}
          ],
          "Prof 2": [
            {"1020": "2025-06-25"},
            {"1030": "2025-06-25"}
          ]
        },
        avancementLabel: "TP2",
        avancement: 0.9
      }
    },
    {
      type: "doc",
      label: "9.2 - Rencontre",
      id: "cours/rencontre9.2",
      customProps: {
        calendrier: {
          "Prof 1": [
            {"1010": "2025-06-26"}
          ],
          "Prof 2": [
            {"1020": "2025-06-25"},
            {"1030": "2025-06-25"}
          ]
        },
        avancementLabel: "TP2",
        avancement: 1
      },
      "className": "remise-tp2"
    },
    {
      type: "doc",
      label: "10.1 - Rencontre",
      id: "cours/rencontre10.1",
      customProps: {
        calendrier: {
          "Prof 1": [
            {"1010": "2025-07-01"}
          ],
          "Prof 2": [
            {"1020": "2025-06-26"},
            {"1030": "2025-06-26"}
          ]
        },
        avancementLabel: "TP3 - Créé",
        avancement: 0.0
      }
    },
    {
      type: "doc",
      label: "10.2 - Rencontre",
      id: "cours/rencontre10.2",
      customProps: {
        calendrier: {
          "Prof 1": [
            {"1010": "2025-07-01"}
          ],
          "Prof 2": [
            {"1020": "2025-06-26"},
            {"1030": "2025-06-26"}
          ]
        },
        avancementLabel: "TP3",
        avancement: 0.1
      }
    },
    {
      type: "doc",
      label: "11.1 - Rencontre",
      id: "cours/rencontre11.1",
      customProps: {
        calendrier: {
          "Prof 1": [
            {"1010": "2025-07-02"}
          ],
          "Prof 2": [
            {"1020": "2025-06-26"},
            {"1030": "2025-06-26"}
          ]
        },
        avancementLabel: "TP3",
        avancement: 0.2
      }
    },
    {
      type: "doc",
      label: "11.2 - Rencontre",
      id: "cours/rencontre11.2",
      customProps: {
        calendrier: {
          "Prof 1": [
            {"1010": "2025-07-02"}
          ],
          "Prof 2": [
            {"1020": "2025-07-01"},
            {"1030": "2025-07-01"}
          ]
        },
        avancementLabel: "TP3",
        avancement: 0.3
      }
    },
    {
      type: "doc",
      label: "12.1 - Rencontre",
      id: "cours/rencontre12.1",
      customProps: {
        calendrier: {
          "Prof 1": [
            {"1010": "2025-07-03"}
          ],
          "Prof 2": [
            {"1020": "2025-07-01"},
            {"1030": "2025-07-01"}
          ]
        },
        avancementLabel: "TP3",
        avancement: 0.4
      }
    },
    {
      type: "doc",
      label: "12.2 - Rencontre",
      id: "cours/rencontre12.2",
      customProps: {
        calendrier: {
          "Prof 1": [
            {"1010": "2025-07-03"}
          ],
          "Prof 2": [
            {"1020": "2025-07-01"},
            {"1030": "2025-07-01"}
          ]
        },
        avancementLabel: "TP3",
        avancement: 0.5
      }
    },
    {
      type: "doc",
      label: "13.1 - Rencontre",
      id: "cours/rencontre13.1",
      customProps: {
        calendrier: {
          "Prof 1": [
            {"1010": "2025-07-07"}
          ],
          "Prof 2": [
            {"1020": "2025-07-02"},
            {"1030": "2025-07-02"}
          ]
        },
        avancementLabel: "TP3",
        avancement: 0.6
      }
    },
    {
      type: "doc",
      label: "13.2 - Rencontre",
      id: "cours/rencontre13.2",
      customProps: {
        calendrier: {
          "Prof 1": [
            {"1010": "2025-07-07"}
          ],
          "Prof 2": [
            {"1020": "2025-07-07"},
            {"1030": "2025-07-07"}
          ]
        },
        avancementLabel: "TP3",
        avancement: 0.7
      }
    },
    {
      type: "doc",
      label: "14.1 - Rencontre",
      id: "cours/rencontre14.1",
      customProps: {
        calendrier: {
          "Prof 1": [
            {"1010": "2025-07-10"}
          ],
          "Prof 2": [
            {"1020": "2025-07-04"},
            {"1030": "2025-07-04"}
          ]
        },
        avancementLabel: "TP3",
        avancement: 0.8
      }
    },
    {
      type: "doc",
      label: "14.2 - Rencontre",
      id: "cours/rencontre14.2",
      customProps: {
        calendrier: {
          "Prof 1": [
            {"1010": "2025-07-09"}
          ],
          "Prof 2": [
            {"1020": "2025-07-07"},
            {"1030": "2025-07-07"}
          ]
        },
        avancementLabel: "TP3",
        avancement: 1
      }
    },
    {
      type: "doc",
      label: "15.1 - Rencontre",
      id: "cours/rencontre15.1",
      customProps: {
        calendrier: {
          "Prof 1": [
            {"1010": "2025-07-09"}
          ],
          "Prof 2": [
            {"1020": "2025-07-02"},
            {"1030": "2025-07-02"}
          ]
        }
      },
      "className": "remise-tp3"
    },
    {
      type: "doc",
      label: "15.2 - Rencontre",
      id: "cours/rencontre15.2",
      customProps: {
        calendrier: {
          "Prof 1": [
            {"1010": "2025-07-10"}
          ],
          "Prof 2": [
            {"1020": "2025-07-04"},
            {"1030": "2025-07-04"}
          ]
        }
      },
      "className": "examen"
    }
  ],
  "tp": [
    {
      type: "autogenerated",
      "dirName": "02-tp"
    }
  ]
};

module.exports = sidebars;
