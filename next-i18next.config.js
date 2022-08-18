const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'vi'],
    localePath: path.resolve('./public/locales'),
    localeDetection: false,
  },
};
