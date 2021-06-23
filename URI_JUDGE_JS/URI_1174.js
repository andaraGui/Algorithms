/*
In this problem, your task is to read an array A[100]. At the end, print all array positions that store a number less or equal to 10 and the number stored in that position.

Input
The input contains 100 numbers. Each number can be integer, floating-point number, positive or negative.

Output
For each number of the array that is equal to 10 or less, print "A [i] = x", where i is the position of the array and x is the number stored in the position, with one digit after the decimal point.
*/
const input = require('fs').readFileSync('URI_1174_stdin', 'utf8');
const inputLines  = input.split('\n');

for(let i = 0 ; i < 100 ; i++){
    const testNumber = Number(inputLines[i])
    if(inputLines[i] <= 10){   
        console.log('A[' + i + '] = ' + testNumber.toFixed(1));
    }
}