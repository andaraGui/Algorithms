/*
Read an integer N. This N will be the number of integer numbers X that will be read.

Print how many these numbers X are in the interval [10,20] and how many values are out of this interval.
 

Input
The first line of input is an integer N (N < 10000), that indicates the total number of test cases.
Each case is an integer number X (-107 < X < 107).

 

Output
For each test case, print how many numbers are in and how many values are out of the interval.
*/
const input = require('fs').readFileSync('URI_1072_stdin', 'utf8');
const lines = input.split('\n').map(Number);
let ins = 0 , out = 0;
for( let x = 1 ; x <= lines[0] ; x++){
    lines[x] >= 10 & lines[x]<= 20 ? ins++ : out++;
}
console.log(ins + ' in');
console.log(out + ' out');