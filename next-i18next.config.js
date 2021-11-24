const path = require('path')

module.exports = {
    i18n: {
      defaultLocale: 'en-US',
      locales: ['en-US', 'zh-CN'],
    },
    localePath: path.resolve('./i18n'),
    defaultNS: 'index',
    // for dev envrionment
    reloadOnPrerender: true
  }