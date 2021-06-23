/*
Make a program that reads five integer values. Count how many of these values ​​are even and  print this information like the following example.

Input
The input will be 5 integer values.

Output
Print a message like the following example with all letters in lowercase, indicating how many even numbers were typed.
*/
var input = require('fs').readFileSync('URI_1065_stdin', 'utf8');
let lines = input.split('\n');
let evenCount = 0;
for(let x = 0 ; x < 5 ; x++){
    const num = parseInt(lines.shift());
    if(num % 2 === 0){
        evenCount++;
    }
}
console.log(evenCount + ' valores pares');