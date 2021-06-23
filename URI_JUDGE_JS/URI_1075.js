/*
Read an integer N (2 < N < 1000). Print the multiplication table of N.
1 x N = N      2 x N = 2N        ...       10 x N = 10N  

Input
The input is an integer N (1 < N < 1000).

Output
Print the multiplication table of N., like the following example.
*/
var input = require('fs').readFileSync('URI_1075_stdin', 'utf8');
const value = parseInt(input.split('\n'));
for(let x = 1 ; x  <= 10 ; x++){
    const result = x * value;
    console.log(x + ' x ' + value + ' = ' + result);
}