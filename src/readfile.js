var fs = require('fs');
var content =
fs.readFileSync('basic.html','utf8');
console.info(content);