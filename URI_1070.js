/*
Read an integer value X and print the 6 consecutive odd numbers from X, a value per line, including X if it is the case.

Input
The input will be a positive integer value.

Output
The output will be a sequence of six odd numbers.
*/
var input = require('fs').readFileSync('URI_1070_stdin', 'utf8');
const lines = parseInt(input.split('\n'));
for(let x = lines ; x < lines + 12 ; x++ ){
    if(x % 2 !== 0){
        console.log(x);
    }
}