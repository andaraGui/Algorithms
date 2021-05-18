/*
Read a value N. Calculate and write its corresponding factorial. Factorial of N = N * (N-1) * (N-2) * (N-3) * ... * 1.

Input
The input contains an integer value N (0 < N < 13).

Output
The output contains an integer value corresponding to the factorial of N.
*/
const input = require('fs').readFileSync('URI_1153_stdin', 'utf8');
let inputNumber = parseInt(input.split('\n'));
let factorial = 1;
for(let i = inputNumber ; i > 1 ; i--){
    factorial *=  i;
}

console.log(factorial)