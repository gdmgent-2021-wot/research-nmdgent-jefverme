const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Automation',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Over automation',
        link: '/over/over',
      },
      {
        text: 'OpenHAB',
        link: '/OpenHAB/OpenHAB',
      },
      {
        text: 'Home Assistant',
        link: '/HomeAssistant/HomeAssistant',
      },
      {
        text: 'Domoticz',
        link: '/Domoticz/Domoticz',
      },
    ],
    sidebar: {
      '/over/': [
        {
          title: 'Over',
          collapsable: false,
          children: [
            'over',
          ]
        }
      ],
      '/OpenHAB/': [
        {
          title: 'OpenHAB',
          collapsable: false,
          children: [
            'OpenHAB',
            'Installatie',
            'Client',
            'ToDo',
            'Configuratie'
          ]
        }
      ],
      '/HomeAssistant/': [
        {
          title: 'Home Assistant',
          collapsable: false,
          children: [
            'HomeAssistant',
          ]
        }
      ],
      '/Domoticz/': [
        {
          title: 'Domoticz',
          collapsable: false,
          children: [
            'Domoticz',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    'vuepress-plugin-medium-zoom',
      {
        selector: '.my-wrapper .my-img',
        delay: 1000,
        options: {
          margin: 24,
          background: '#BADA55',
          scrollOffset: 0,
        },
      },
  ]
}
