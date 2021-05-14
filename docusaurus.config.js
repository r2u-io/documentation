/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Documentação R2U',
  tagline: 'O SDK de Realidade Aumentada da R2U permite exibir modelos 3D interativos na web e em Realidade Aumentada (RA).',
  url: 'https://docs.r2u-io',
  baseUrl: '/',
  favicon:'https://storage.googleapis.com/r2u-sdk-bucket/documentation/favicon-32x32.png',
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
      title: 'DOCUMENTAÇÃO ',
      logo: {
        src: 'https://storage.googleapis.com/r2u-sdk-bucket/documentation/logo.png',
        href: 'https://r2u.io/'
      },
      items: [
        {
          type: 'localeDropdown',
          position: 'right',
        }
      ],
      
    },
   
    
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
