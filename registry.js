let windows = new Set([]);

exports.addWindow = window => {
      windows.add(window);
};


exports.getAllWindows = () => {
  return Array.from(windows); 
}
exports.findWindow = window => {
  const {uid} = window;
    if (!windows.size) {
      return null;
    }
    return Array.from(windows).find((win) => win.uid === uid);
};