const path = require('path');

module.exports = {
  i18n: {
    locales: ['en', 'pt-BR'],
    defaultLocale: 'en',
    localeDetection: true,
  },
  ns: ['common', 'about', 'home', 'contacts'],
  defaultNS: 'common',
  localePath: path.resolve('./public/locales'),
};
