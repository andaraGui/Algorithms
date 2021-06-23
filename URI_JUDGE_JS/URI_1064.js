/*
Read 6 values that can be floating point numbers. After, print how many of them were positive. In the next line, print the average of all positive values typed, with one digit after the decimal point.

Input
The input consist in 6 numbers that can be integer or floating point values. At least one number will be positive.

Output
The first output value is the amount of positive numbers. The next line should show the average of the positive values ​typed.


*/
var input = require('fs').readFileSync('URI_1064_stdin', 'utf8');
let lines  = input.split('\n').map(Number);
let positiveCount = 0 , positiveSum = 0;
for(var x = 0 ; x < lines.length ; x++){
    if(lines[x] > 0){
        positiveCount++;
        positiveSum +=  lines[x];
    }
}
let positiveAverage = positiveSum / positiveCount;
console.log(positiveCount + ' valores positivos');
console.log(positiveAverage.toFixed(1));