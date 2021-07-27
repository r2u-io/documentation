/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'R2U',
  tagline:
    "R2U helps e-commerce stores sell more by allowing users to try-out products at home with Augmented Reality",
  url: 'https://docs.r2u.io',
  baseUrl: '/',
  favicon: 'https://storage.googleapis.com/r2u-sdk-bucket/documentation/favicon-32x32.png',
  organizationName: 'R2U',
  projectName: 'documentation',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
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
    navbar: {
      title: 'Docs',
      logo: {
        src: 'https://storage.googleapis.com/r2u-sdk-bucket/documentation/logo.png',
        href: 'https://r2u.io/'
      },
      items: [
        {
          type: 'localeDropdown',
          position: 'right'
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
