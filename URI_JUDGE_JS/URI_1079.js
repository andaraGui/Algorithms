/*
Read an integer N, which represents the number of following test cases. Each test case consists of three floating-point numbers, each one with one digit after the decimal point. Print the weighted average for each of these sets of three numbers, considering that the first number has weight 2, the second number has weight 3 and the third number has weight 5.

Input
The input file contains an integer number N in the first line. Each N following line is a test case with three float-point numbers, each one with one digit after the decimal point.

Output
For each test case, print the weighted average according with below example.
*/
var input = require('fs').readFileSync('URI_1079_stdin', 'utf8');
const lines  = input.split('\n');
const quant = parseInt(lines.shift());
for(let i = 0 ; i < quant ; i++){
    
    const [valueOne, valueTwo , valueThree] = lines.shift().split(' ').map(Number);
    const media = ((valueOne * 2) + (valueTwo  * 3) + (valueThree * 5)) / 10;
    console.log(media.toFixed(1))
}