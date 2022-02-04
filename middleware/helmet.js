const helmet = require('helmet')

module.exports = () =>
  helmet({
      contentSecurityPolicy:
        process.env.NODE_ENV === 'production' ? undefined : false,
    })
