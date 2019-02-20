const { EDIT, ROLE, LEAD_KEY } = require('./constants');
// const ROLE = 'window';
    // if (menuItem.role === ROLE) {
              // label: 'Profiles',

exports.decorateMenu = (menu) => {
  for (const menuItem of menu) {
    if (menuItem.label === ROLE) {
        menuItem.submenu = menuItem.submenu.concat({
          label: 'Profiles',
          submenu: [
            {
              label: 'Save profile',
              click(item, focusedWindow) {
                if (focusedWindow !== null) {
                  focusedWindow.rpc.emit('hyper-automator:profile:save', focusedWindow);
                }
              }
            }
          ]
        });
    }
  }
  return menu;
};