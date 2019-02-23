const { decorateMenu } = require('./Extentions/UI/menu');

// const fs = require('fs');
// const path = require('path');

const provision = require('./Internal/provision');

const Record = require('./Record');
// const registry = require('./registry');
const Window = require('./Models/Window');

// const CLI = require('./CLI/Memory/state');
// CLI.profile("default");
// const UI = require('./Actions/ui');

const reccord = new Record();

// provision.Load('77e7344f-bfaa-45ea-abf9-4298db609321');
// let activeTab = undefined;

exports.decorateMenu = decorateMenu;

// exports.decorateWindowClass = defaults => {
//   defaults.uid = 'profileId_dev';
//   return defaults;
// }

// exports.decorateBrowserOptions = defaults => {
//   console.log('decorateBrowserOptions', defaults);
//   return defaults;
// }

exports.onWindowClass = (window) => {
    reccord.onWindow(new Window(window.uid));
}

exports.onWindow = pWindow => {
  // pWindow.onProfile = () => {
  //   provision.save(pWindow.uid);
  // };
  const window = reccord.findWindow(pWindow.uid);
  window.onMove(pWindow.getPosition());
  
  pWindow.on('move', e =>  {
    const {sender} = e;
    const {uid} = sender;
    const window = reccord.findWindow(uid);
    window.onMove(sender.getPosition());
  });
  
  pWindow.on('close', e =>  {
    const {sender} = e;
    const {uid} = sender;
    reccord.onWindowClose(uid);
  });
  
  // console.log(reccord.getAllWindows());
  // const window = new Window(pWindow.id, pWindow.getPosition());
  // const bounds = pWindow.getPosition() => { 
  //   const
  //   return {x: p[0], y:p[1]};
  // }
  // console.log(pWindow.getPosition());
  // const {bounds} = pWindow.getPosition();
  // console.log(windows);
  // console.log(window.sessions);
  // reccord.onWindow(window);
  // console.log(reccord);
  
    // pWindow.rpc.on('hyper-automator:profile:save', obj => {
    //   console.log('hyper-automator:profile:save');
    // });
}

// exports.decorateSessionOptions = defaults => {
//   console.log('decorateSessionOptions', defaults);
//   return defaults;
// };

// exports.decorateSessionClass = Session => {
//   return class mySession extends Session {
//     constructor(options) {
//       super(options);
// 
//       // const filename = path.join(DEFAULT_DIR, `${options.uid}.log`);
//       // console.log(filename);
//       // this.file = fs.createWriteStream(filename);
//       this.on('data', data => {
//         const content = data.slice(36);
//         console.log(content);
//         // this.file.write(content);
//       });
//     }
//     destroy() {
//       this.file.end();
//       super.destroy();
//     }
//   };
// };

// exports.middleware = (store) => (next) => (action) => {
//   if ('INIT' === action.type) {
//       const window = new Window();
//       reccord.onWindow(window);
//       console.log(reccord);
//   }
//   if (UI.WINDOW_MOVE === action.type) {
//     // const {bounds} = action.window;
//     // window.onMove(action.window)
//   }
//   if ('SESSION_ADD' === action.type) {
//     const uid = action.uid;
//     reccord.onSession(uid);
//   }
// 
//   if ('UI_COMMAND_EXEC' === action.type) {
//     if ('tab:new' === action.command) {
//       // const tab = new Tab(undefined);
//       // activeTab = tab;
//     }
//   }
//   // const {data} = action;
//   // console.log(data);
//   next(action);
// }
