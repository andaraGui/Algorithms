/*
Read an integer N. Print all numbers between 1 and 10000, which divided by N will give the rest = 2.

Input
The input is an integer N (N < 10000)

Output
Print all numbers between 1 and 10000, which divided by n will give the rest = 2, one per line.
*/
var input = require('fs').readFileSync('URI_1074_stdin', 'utf8');
const value = parseInt(input.split('\n'));
for(let x = 1 ; x < 10000 ; x++){
    if(x % value === 2 ){
        console.log(x)
    }
}