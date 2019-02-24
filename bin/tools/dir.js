const fs = require('fs')

module.exports = (p) => {
  return fs.existsSync(p)
};