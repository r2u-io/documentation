/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Documentação R2U',
  tagline: 'O SDK de Realidade Aumentada da R2U permite exibir modelos 3D interativos na web e em Realidade Aumentada (RA).',
  url: 'https://r2u-io.github.io',
  baseUrl: '/documentation/',
  favicon:'https://real2u-public-assets.s3.amazonaws.com/images/logo-r2u.png',
  organizationName: 'R2U', // Usually your GitHub org/user name.
  projectName: 'documentação', // Usually your repo name.
  i18n: {
    defaultLocale: "pt",
    locales: ["pt", "en"],
    localeConfigs: {
      pt: {
        label: "Português",
      },
      en: {
        label: "Inglês",
      },
    },
  },
  themeConfig: {
    navbar: {
      title: 'DOCUMENTAÇÂO ',
      logo: {
        src: 'https://real2u-public-assets.s3.amazonaws.com/images/logo-r2u.png',
      },
    },
    items: [
      {
        type: 'localeDropdown',
        position: 'left',
      },
    ],
    
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          
        },
        themes: ['@docusaurus/theme-live-codeblock'],
      },
    ],
  ],
};
