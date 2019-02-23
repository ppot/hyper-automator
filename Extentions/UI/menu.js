const { EDIT, ROLE, LEAD_KEY } = require('./constants');

const provision = require('../../Internal/provision');

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
                  const {uid} = focusedWindow;
                  provision.save(uid);
                  // focusedWindow.onProfile();
                }
              }
            }
          ]
        });
    }
  }
  return menu;
};