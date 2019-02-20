// const Session = require('../Models/Session');

class Record {
    constructor() {
      this.state = [];
      this.active = undefined;
      this.windows = new Map();
    }
    
    onProfileSave() {
      console.log('onProfileSave');
    }

    onWindow(window) {
      this.windows.set(window.uid, window);
    }
    
    findWindow(uid) {
      return this.windows.get(uid);
    }
    
    onWindowClose(uid) {
      if (this.windows.get(uid)) {
        this.windows.delete(uid)
      }
    }
    
    getAllWindows() {
      // return Array.from(this.windows); 
    }
    
    onSession(uid) {
      // const session = new Session(uid);
      // console.log(session);
    }
}

module.exports = Record;