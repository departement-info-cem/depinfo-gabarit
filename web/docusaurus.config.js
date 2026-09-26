// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
import { themes } from "prism-react-renderer";

const siteConfig = require("./config");

const lightCodeTheme = themes.vsLight;
const darkCodeTheme = themes.vsDark;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: siteConfig.nom,
  tagline: siteConfig.description,
  url: "https://info.cegepmontpetit.ca/",
  baseUrl: `/${siteConfig.nomUrl}/`,
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",

  organizationName: "departement-info-cem",
  projectName: siteConfig.nomUrl,
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  i18n: {
    defaultLocale: "fr",
    locales: ["fr"],
  },

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com',
      rel: 'preconnect',
    },
    {
      href: 'https://fonts.gstatic.com',
      rel: 'preconnect',
      crossorigin: 'anonymous',
    },
    {
      href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400..700;1,400..700&display=swap',
      rel: 'stylesheet',
    },
  ],

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  themes: ["@docusaurus/theme-mermaid"],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          editUrl: `https://github.com/departement-info-cem/${siteConfig.nomUrl}/tree/main/web`,
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
      }),
    ],
  ],

  plugins: [
    '@docusaurus/plugin-ideal-image',
    [
      require.resolve("./plugins/docs-metadata"),
      {
        docsDir: "docs/01-cours",
      },
    ],
    [
      require.resolve("./plugins/quiz"),
      {
        // Par défaut, utilise le serveur de courtage public gratuit de PeerJS.
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: siteConfig.nom,
        logo: {
          alt: "Logo CEM",
          src: "img/logo.svg",
        },
        items: [
          {
            // Mène au prochain cours selon l'horaire du premier prof trouvé dans
            // sidebars.js, sinon au premier cours de la sidebar
            type: "custom-prochainCours",
            position: "left",
            sidebarId: "docs",
            label: "Cours",
          },
          {
            // Mène au TP dont le nom (ex : « TP1 - ... ») est contenu dans le className
            // du prochain cours qui en mentionne un (ex : remise-tp1), sinon au premier TP
            type: "custom-tpCourant",
            position: "left",
            sidebarId: "tp",
            label: "Travaux Pratiques",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Sources",
            items: [
              {
                label: "GitHub",
                href: `https://github.com/departement-info-cem/${siteConfig.nomUrl}`,
              },
              {
                // Seul lien vers cette page, qui n'est ni dans le menu ni
                // dans les barres latérales.
                label: "Proposer une correction",
                to: "/contribuer",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}. ${siteConfig.nom
          }. CÉGEP Édouard-Montpetit.`,
      },
      // Décommenter et remplir pour activer l'indexation des pages par le moteur de recherche local
      // algolia: {
      //   appId: '',
      //   apiKey: '',
      //   indexName: '',
      //   contextualSearch: true,
      //   searchPagePath: 'search',
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["csharp", "java", "dart", "powershell"],
      },
      metadata: [
        {
          name: "keywords",
          content: `${siteConfig.nom}, ${siteConfig.description}, informatique, technique, cégep, cegep, édouard-montpetit, edouard-montpetit, édouard montpetit, edouard montpetit`,
        },
      ],
    }),
};

module.exports = config;
