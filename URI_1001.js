var input = require('fs').readFileSync('URI_1001_stdin', 'utf8');
var lines = input.split('\n');
var A = parseInt(lines.shift());
var B = parseInt(lines.shift());
var X = A + B;
console.log('X = ' + X);