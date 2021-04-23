/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Documentação R2U',
  tagline: 'O SDK de Realidade Aumentada da R2U permite exibir modelos 3D interativos na web e em Realidade Aumentada (RA).',
  url: 'https://r2u-io.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'DOCUMENTAÇÂO ',
      logo: {
        src: 'https://real2u-public-assets.s3.amazonaws.com/images/logo-r2u.png',
      },
    },
    
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          
        },
        themes: ['@docusaurus/theme-live-codeblock'],
      },
    ],
  ],
};
