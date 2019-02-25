const fs = require('fs')
const path = require('path');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const DEFAULT_DIR = '/Users/ppot/.hyper_plugins/local/hyper-automator';

const Store = require('./../Memory/store');

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
    const file = path.join(DEFAULT_DIR, `/.profiles/${p}.profile`);
    const adapter = new FileSync(file);
    const db = low(adapter);
    db.defaults(Store.state())
    .write()
  }
}