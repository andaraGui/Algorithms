/* 
Make a program that reads 3 integer values and present the greatest one followed by the message "eh o maior". 

Input
The input file contains 3 integer values.

Output
Print the greatest of these three values followed by a space and the message “eh o maior”.
 */
var input = require('fs').readFileSync('URI_1013_stdin', 'utf8');
var lines  = input.split(' ').map(Number);
lines.sort(function(a, b){return b-a});
console.log(lines[0] + ' eh o maior');
