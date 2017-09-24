'use strict'
let os = require('os');
let fs = require('fs');
let util = require('util');

module.exports = (context, callback) => {
    fs.readFile("/etc/hostname", "utf8", (err, data) => {
	let val = {}
	val.hostname=data.trim("\n");
	val.platform=os.platform();
	val.arch = os.arch();
	val.cpus = os.cpus().length;

    	callback(undefined, val);
    });
}
