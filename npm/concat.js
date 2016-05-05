// Inspired by "Simple build script to minify
// and concatenate files using node.js"
// by Cedric Dugas on October 11, 2012
// ––
// http://www.position-absolute.com/articles/
// simple-build-script-to-minify-and-concatenate-files-using-node-js/

var fs = require('fs');
var path = require('path');

var EOL = '\n';
var FILE_ENCODING = 'utf-8';
var filesArray = [
	path.join(__dirname, '../src/Prototypes.js'),
	path.join(__dirname, '../src/Object.defineProperty.js'),
	path.join(__dirname, '../src/Array.where.js'),
	path.join(__dirname, '../src/Array.forEach.js'),
	path.join(__dirname, '../src/Array.filter.js'),
	path.join(__dirname, '../src/Array.indexOf.js'),
	path.join(__dirname, '../src/String.localeCompare.js')
];

function concat(opts) {
	var fileList = opts.src;
	var distPath = opts.dest;
	var out = fileList.map(function(filePath){
		return fs.readFileSync(filePath, FILE_ENCODING);
	});

	fs.writeFileSync(distPath, out.join(EOL), FILE_ENCODING);
	console.log(' '+ distPath +' built.');
}

concat({
	src : filesArray,
	dest : path.join(__dirname, '../lib/extendscript.prototypes.js')
});

process.exit();
