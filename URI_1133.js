/*
Write a program that reads two integer numbers X and Y. Print all numbers between X and Y which dividing it by 5 the rest is equal to 2 or equal to 3.

Input
The input file contains 2 any positive integers, not necessarily in ascending order.

Output
Print all numbers according to above description, always in ascending order.
*/
const input = require('fs').readFileSync('URI_1133_stdin', 'utf8');
const lines = input.split('\n');
const [x, y] = lines.map(Number)
let [begin, finish] = x > y ? [y + 1, x] : [x + 1, y];

for (let i = begin; i < finish; i++) {
    if (i % 5 === 2) {
        console.log(i)
    } else if (i % 5 === 3) {
        console.log(i)
    }
}