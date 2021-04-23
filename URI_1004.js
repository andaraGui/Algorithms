/*
Read two integer values. After this, 
calculate the product between them and store the result in a variable named PROD. 
Print the result like the example below. Do not forget to print the end of line after the result, otherwise you will receive “Presentation Error”.

Input
The input file contains 2 integer numbers.

Output
Print the message "PROD" and PROD according to the following example, with a blank space before and after the equal signal.
*/

var input = require('fs').readFileSync('URI_1004_stdin', 'utf8');
var lines = input.split('\n');
var a = parseInt(lines.shift());
var b = parseInt(lines.shift());
var prod = a * b;
console.log('PROD = ' + prod);
