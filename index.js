'use strict'
module.exports = function (obj, key, def) {
  return (key.split ? key.split('.') : [key]).reduce((obj, key) => obj[key], obj) || def
}
