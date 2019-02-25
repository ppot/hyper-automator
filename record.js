const Store = require('./Memory/store');

class Record {
    constructor() {
      Store.setup();
      this.state = [];
      this.active = undefined;
      this.windows = new Map();
    }

    onWindow(window) {
      Store.window.create(window);
      this.windows.set(window.uid, window);
    }
    
    findWindow(uid) {
      return this.windows.get(uid);
    }
    
    onWindowClose(uid) {
      if (this.windows.get(uid)) {
        this.windows.delete(uid);
        Store.window.remove(uid);
      }
    }
    
    getAllWindows() {
      return this.windows.values();
    }
    
    onSession(uid) {
      // const session = new Session(uid);
      // console.log(session);
    }
}

module.exports = Record;