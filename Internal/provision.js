const fs = require('fs')
const path = require('path');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const DEFAULT_DIR = '/Users/ppot/.hyper_plugins/local/hyper-automator';

module.exports = {
  Load: (p) => {
    const file = path.join(DEFAULT_DIR, `/.profiles/${p}.profile`);
    
    if (!fs.existsSync(file)) {
      return;
    }
    const adapter = new FileSync(file);
    const db = low(adapter);
    console.log(db.getState());
  },
  save: (p) => {
    console.log(p);
    const file = path.join(DEFAULT_DIR, `/.profiles/${p}.profile`);
    const adapter = new FileSync(file);
    const db = low(adapter);
    db.defaults({ profile: {}})
    .write()
  }
}
// const filePath = path.join(__dirname, `/.profiles/${uid}`);
  // const adapter = new FileSync(filePath);


// module.exports = (uid) => {
//   console.log(filePath);
//   // console.log(adapter);
// };