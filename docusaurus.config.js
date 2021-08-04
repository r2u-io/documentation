/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'R2U',
  tagline:
    "R2U helps e-commerce stores sell more by allowing users to try-out products at home with Augmented Reality",
  url: 'https://docs.r2u.io',
  baseUrl: '/',
  favicon: 'https://sdk.r2u.io/documentation/favicon-32x32.png',
  organizationName: 'R2U',
  projectName: 'documentation',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    localeConfigs: {
      en: {
        label: 'English'
      },
      pt: {
        label: 'Português'
      },
    }
  },
  themeConfig: {
    algolia: {
      apiKey: '118c8b4016ab9e4ebc990266e4b347c6',
      indexName: 'r2u',
    },
    navbar: {
      title: 'Docs',
      logo: {
        src: 'https://sdk.r2u.io/documentation/logo.png',
        href: 'https://r2u.io/'
      },
      items: [
        // {
        //   to: 'docs/introduction',
        //   label: 'Showcase',
        //   position: 'left',
        //   activeBasePath: 'docs',
        // },
        // {
        //   type: 'localeDropdown',
        //   position: 'right'
        // },
        {
          type: 'search',
          position: 'right',
        }
      ]
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/'
          // Please change this to your repo.
        },
        themes: ['@docusaurus/theme-live-codeblock']
      }
    ]
  ]
}
