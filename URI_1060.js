/*
Write a program that reads 6 numbers. These numbers will only be positive or negative (disregard null values). Print the total number of positive numbers.

Input
Six numbers, positive and/or negative.

Output
Print a message with the total number of positive numbers.
*/
var input = require('fs').readFileSync('URI_1060_stdin', 'utf8');
let lines = input.split('\n').map(Number);
let positiveCount = 0;
for(let x = 0 ; x < lines.length ; x++){
    if(lines[x] > 0){
            positiveCount++;
    }
}
console.log(positiveCount + ' valores positivos');