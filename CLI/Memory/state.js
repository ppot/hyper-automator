const low = require('lowdb')
const Memory = require('lowdb/adapters/Memory')

const db = low(new Memory());

db.defaults(require('./constructor'))
  .write()

module.exports = {
  profile: (p) => {
    db.set('profile.name', p)
    .write()
    console.log(db.getState());
  },
};