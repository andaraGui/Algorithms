/*
The following sequence of numbers 0 1 1 2 3 5 8 13 21 ... is known as the Fibonacci Sequence. Thereafter, each number after the first 2 is equal to the sum of the previous two numbers. Write an algorithm that reads an integer N (N < 46) and that print the first N numbers of this sequence.

Input
The input file contains an integer number N (0 < N < 46).

Output
The numbers ​​should be printed on the same line, separated by a blank space. There is no space after the last number.
*/
const input = require('fs').readFileSync('URI_1151_stdin', 'utf8');
const inputNumber = parseInt(input.split('\n'));
let resLine = '';
let resArray = [];

for (let x = 0; x < inputNumber; x++) {
    if (x === 0 || x === 1) {
        resArray[x] = x;
    } else {
        resArray[x] = resArray[(x -1)] + resArray[(x - 2)]
    }
    resLine +=resArray[x] + ' ';
}
console.log(resLine)