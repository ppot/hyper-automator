const Store = require('./../Memory/store');

const Tab = require('./Tab');

class Window {
    constructor(uid) {
      this.uid = uid;
      this.bounds = {x: undefined, y: undefined};
      this.activeTab = undefined;
    }
    
    onMove(position) {
      this.bounds = {x: position[0], y: position[1]}
    }
    
    onTab() {
      
    }
}

module.exports = Window;