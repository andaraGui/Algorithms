/*
Read four integer values named A, B, C and D. Calculate and print the difference of product A and B by the product of C and D (A * B - C * D).

Input
The input file contains 4 integer values.

Output
Print DIFERENCA (DIFFERENCE in Portuguese) with all the capital letters, according to the following example, with a blank space before and after the equal signal.
*/

var input = require('fs').readFileSync('URI_1007_stdin', 'utf8');
var lines = input.split('\n');
var a = parseInt(lines.shift()), b = parseInt(lines.shift()), c = parseInt(lines.shift()), d = parseInt(lines.shift());
var dif = (a * b) - (c * d);
console.log('DIFERENCA = ' + dif);