const path = require('path')

module.exports = {
    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'zh'],
    },
    localePath: path.resolve('./i18n'),
    defaultNS: 'index',
    // for dev envrionment
    // reloadOnPrerender: true
  }