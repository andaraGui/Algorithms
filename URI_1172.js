/*
Read an array X[10]. After, replace every null or negative number of X ​by 1. Print all numbers stored in the array X.

Input
The input contains 10 integer numbers. These numbers ​​can be positive or negative.

Output
For each position of the array, print "X [i] = x", where i is the position of the array and x is the number stored in that position.
 */
const input = require('fs').readFileSync('URI_1172_stdin', 'utf8');
const inputLines = input.split('\n').map(
    i => i <= 0 ? i = 1 : i = Number(i)
)
for (let i = 0; i < inputLines.length; i++) {
    console.log('X[' + i + '] = ' + inputLines[i]);
}