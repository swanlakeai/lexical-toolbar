
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./text-page.cjs.production.min.js')
} else {
  module.exports = require('./text-page.cjs.development.js')
}
