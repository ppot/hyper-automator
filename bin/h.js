#!/usr/bin/env node
'use strict';
const arg = require('arg');
// const dotenv = require('dotenv');
const dir = require('./tools/dir');
const fs = require('fs');
const low = require('lowdb');

const _ = process.env.HOME;
const _cd = _ + '/.hyper/.profiles';

// const result = dotenv.config();
const args = arg({
  '--profile': Boolean, // Set the name of the curent profile
  '--config': Boolean, 

	// Types
	'--help':    Boolean,
	'--version': Boolean,
	'--verbose': arg.COUNT,   // Counts the number of times --verbose is passed
	'--port':    Number,      // --port <number> or --port=<number>
	'--name':    String,      // --name <string> or --name=<string>
	'--tag':     [String],    // --tag <string> or --tag=<string>
	'--folder':  String, 
  '--directory': Boolean,
  '--save': Boolean,  

	// Aliases
	'-v':        '--verbose',
	'-n':        '--name',    // -n <string>; result is stored in --name
	'--label':   '--name',    // --label <string> or --label=<string>;
	                          //     result is stored in --name
	// Aliases
  '-p':   '--profile',
  '-c':   '--config',
  '-d':   '--directory',
  '-f':   '--folder',
  '-s':   '--save',
});

const h = (args) => { 
  console.log(args);
  const p = args['--profile'];  
  const n = args['--name'];
  const c = args['--config'];
  const d = args['--directory'];
  const s = args['--save'];
  
  if (c && d && !s) {
    if (!dir(_cd)) {
      console.log('profiles directory not set \n'
       + 'use: h -c -d -s or create the directory by hand at: ' + _cd );
    }
  }
  if (c && d && s) {
    const _cds = dir(_cd);
    if (!_cds) {
      fs.mkdirSync(_cd);
      console.log('created directory profile at : ' + _cd);
    } else {
      console.log('profile directory already exist at : ' + _cd);
    }
  }
};

h(args);