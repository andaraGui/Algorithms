/*
Read an integer value X (1 <= X <= 1000).  Then print the odd numbers from 1 to X, each one in a line, including X if is the case.

Input
The input will be an integer value.

Output
Print all odd values between 1 and X, including X if is the case.
*/
var input = require('fs').readFileSync('URI_1067_stdin', 'utf8');
let lines = parseInt(input.split('\n'));
for(let x = 0 ; x <= lines ; x++){
    if(x % 2 !== 0){
        console.log(x)
    }
}
