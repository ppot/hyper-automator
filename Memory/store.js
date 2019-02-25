const low = require('lowdb')
const Memory = require('lowdb/adapters/Memory')
const db = low(new Memory());

module.exports = {
  setup : () => {
    db.defaults(require('./profileDto'))
      .write()
  },
  window: {
    create: (window) => {
      db.get('profile.windows')
      .push(window)
      .write()
    },
    // update: (window) => {
      // console.log(window);
      // const t = db.get('profile.windows')
      // .find({ uid: window.uid }).value();
      // console.log(t);
      // .assign({ bounds: window.bonds})
      // .write()
      // console.log(db.getState().profile.windows);
    // },
    remove: (uid) => {
      db.get('profile.windows')
      .remove({uid: uid})
      .write()
      console.log(db.getState().profile.windows);
    }
  },
  state: () => {
    console.log(db.getState());
    return db.getState();
  }
};