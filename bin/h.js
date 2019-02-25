#!/usr/bin/env node
'use strict';
const arg = require('arg');
// const dotenv = require('dotenv');
// const dir = require('./tools/dir');
// const fs = require('fs');
// const low = require('lowdb');

const _args = arg({
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

require('./handlers/args')(_args);