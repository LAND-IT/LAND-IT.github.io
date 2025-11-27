import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title:
    "LAND IT - Land ANalysis and Design of the Integrated areas of the Territory",
  tagline:
    "Is a spatial decision support system, designed to assist AIGP managing entities in planning and executing territorial reorganisation.",
  favicon: "favicons/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://land-it.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "LAND-IT",
  projectName: "LAND-IT.github.io",

  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "pt",
    locales: ["pt", "en"],
    localeConfigs: {
      pt: { label: "Português" },
      en: { label: "English" },
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "images/social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
      defaultMode: "light",
    },
    navbar: {
      title: "LAND IT",
      logo: {
        alt: "LAND IT Logo",
        src: "images/logo_navbar.png",
        srcDark: "images/logo_navbar_branco.png",
      },
      items: [
        {
          to: "/",
          label: "Home",
          position: "left",
          sidebarId: "homeSidebar",
        },
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Documentação",
        },
        {
          to: "/blog",
          label: "Blog",
          position: "left",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Contactos",
          items: [
            {
              label: "Email",
              href: "mailto:land.it.web.app@gmail.com",
            },
            {
              label: "GitHub",
              href: "https://github.com/LAND-IT",
            },
          ],
        },
        {
          title: "Links Úteis",
          items: [
            {
              label: "Plataforma LAND IT",
              href: "https://landit.pt",
            },
            {
              label: "Podcast gerado por IA sobre o LAND IT",
              href: "https://drive.google.com/file/d/1VwBF_oKHChhNPTup_Fa1dikuQQEUek_x/view?usp=sharing",
            },
            {
              label: "Como construir uma OIGP?",
              href: "https://drive.google.com/drive/folders/1A9KU2nZ6xXibhZnzlcDErIp21YEacsZF?usp=sharing",
            },
            {
              label: "OIGP em consulta pública",
              href: "https://www.dgterritorio.gov.pt/paisagem/ptp/oigp/consulta-publica-OIGP",
            },
          ],
        },
        {
          title: "Entidades Colaboradoras",
          items: [
            {
              html: `
                <div style="display: flex; flex-direction: column; align-items: start;">
                  <div style="display: flex; flex-direction: row; justify-content: flex-start; width: 100%; gap: 16px; margin-bottom: 12px;">
                    <img class="logo-light" style="height: 100px;" src="/images/aflomacao.png" alt="Aflomação logo" />
                    <img class="logo-dark" style="height: 100px;" src="/images/aflomacao-outlined.png" alt="Aflomação logo" />
                    <img class="logo-light" style="height: 100px;" src="/images/azr.png" alt="AZR logo" />
                    <img class="logo-dark" style="height: 100px;" src="/images/azr-outlined.png" alt="AZR logo" />
                  </div>

                  <div style="display: flex; flex-direction: row; justify-content: flex-start; width: 100%; gap: 16px; margin-bottom: 12px;">
                    <img class="logo-light" style="height: 100px;" src="/images/fct.png" alt="FCT logo" />
                    <img class="logo-dark" style="height: 100px;" src="/images/fct-white.png" alt="FCT logo" />
                    <img style="height: 100px;" src="/images/macao.png" alt="Mação logo" />
                  </div>
                </div>
              `,
            },
          ],
        },
      ],
      copyright: `
        Copyright © ${new Date().getFullYear()} LAND IT. 
        Design do logotipo por <a style="color:white; text-decoration:underline;" href="https://www.linkedin.com/in/mariaines-gomes" target="_blank"> Maria Inês Gomes</a>.
        Built with Docusaurus.
      `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

    metadata: [
      {
        name: "description",
        content:
          "Is a spatial decision support system, designed to assist AIGP managing entities in planning and executing territorial reorganisation.",
      },
      {
        name: "keywords",
        content: `LAND IT, 
          Land Analysis and Design of the Integrated areas of the Territory, 
          gestão da paisagem, 
          landscape management, 
          análise territorial, 
          territorial analysis, 
          ferramenta SIG, 
          GIS tool, 
          edição de polígonos, 
          polygon editing, 
          sistemas de informação geográfica, 
          geographic information systems, 
          ordenamento do território, 
          territorial planning, 
          planeamento geoespacial, 
          geospatial planning, 
          geoprocessamento, 
          geoprocessing, 
          cartografia digital, 
          digital cartography, 
          dados geográficos, 
          geographic data
          `,
      },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "LAND IT Team" },
    ],
  } satisfies Preset.ThemeConfig,
};

export default config;
