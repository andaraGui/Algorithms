/*
Read two integer values X and Y. Print the sum of all odd values between them.

Input
The input file contain two integer values.

Output
The program must print an integer number. This number is the sum off all odd values between both input values that must fit in an integer number.
*/
var input = require('fs').readFileSync('URI_1071_stdin', 'utf8');
let lines = input.split('\n').map(Number);
let res = 0, param = 0;
if (lines[1] > lines[0]) {
        lines[0] % 2 === 0 ? param = 1 : param = 2;
        for (let x = (lines[0] + param); x < lines[1]; x += 2) {
                res += x;
        }
        console.log(res);
} else if (lines[0] > lines[1]) {
        lines[1] % 2 === 0 ? param = 1 : param = 2;
        for (let x = (lines[1] + param); x < lines[0]; x += 2) {
                res += x;
        }
        console.log(res);
} else {
        console.log(0)

}

