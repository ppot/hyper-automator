const _ = process.env.HOME;
const _cd = _ + '/.hyper/.profiles';

module.exports = (args) => {
  console.log(args);
  const p = args['--profile'];  
  const n = args['--name'];
  const c = args['--config'];
  const d = args['--directory'];
  const s = args['--save'];
  // 
  // if (c && d && !s) {
  //   if (!dir(_cd)) {
  //     console.log('profiles directory not set \n'
  //      + 'use: h -c -d -s or create the directory by hand at: ' + _cd );
  //   }
  // }
  // if (c && d && s) {
  //   const _cds = dir(_cd);
  //   if (!_cds) {
  //     fs.mkdirSync(_cd);
  //     console.log('created directory profile at : ' + _cd);
  //   } else {
  //     console.log('profile directory already exist at : ' + _cd);
  //   }
  // }
};