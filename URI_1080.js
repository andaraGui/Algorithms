/*
Read 100 integer numbers. Print the highest read value and the input position.

Input
The input file contains 100 distinct positive integer numbers.

Output
Print the highest number read and the input position of this value, according to the given example.
*/
const input = require('fs').readFileSync('uri_1080_stdin', 'utf-8');
let values = input.split('\n').map(Number);
let highest = 0
let position = 0
for(let x = 0 ; x < values.length ; x++){
    const num = values[x];
    if(num > highest){
        highest = num;
        position = x + 1;
    }
}
console.log(highest);
console.log(position);
