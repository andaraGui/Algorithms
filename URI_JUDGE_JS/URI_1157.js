/*
Read an integer N and compute all its divisors.

Input
The input file contains an integer value.

Output
Write all positive divisors of N, one value per line.
*/
const input = require('fs').readFileSync('URI_1157_stdin', 'utf8');
const inputNumber = parseInt(input.split('\n'));
for(let i = 1 ; i <= inputNumber ; i++){
    if(inputNumber % i === 0){
        console.log(i)
    }
}