/**
 Read an integer N that is the number of test cases. Each test case is a line containing two integer numbers X and Y. Print the sum of all odd values between them, not including X and Y.

Input
The first line of input is an integer N that is the number of test cases that follow. Each test case is a line containing two integer X and Y.

Output
Print the sum of all odd numbers between X and Y.


 */
const input = require('fs').readFileSync('URI_1099_stdin', 'utf8');
const lines = input.split('\n');
const quant = lines.shift();
let sum = 0;
let begin = 0;
let finish = 0;
for (let i = 0; i < quant; i++) {
    const [x, y] = lines.shift().split(' ').map(Number);
    if (x <= y) {
        begin = x;
        finish = y;
    } else {
        begin = y;
        finish = x;
    }
    for (let j = (begin + 1); j < finish; j++) {
        if (j % 2 !== 0) {
            sum += j;
        }
    }
    console.log(sum)
    sum = 0;
}
