/*
Write a program that reads an integer N (1 < N < 1000). This N is the number of output lines printed by this program.

Input
The input file contains an integer N.

Output
Print the output according to the given example.
*/
var input = require('fs').readFileSync('URI_1143_stdin', 'utf8');
const lines = parseInt(input.split('\n'));

for(let i  = 1 ; i <=  lines ; i++){
    const res  = [0 , 0 , 0];
   res[0] = i;
   res[1] = res[0] * res[0]
   res[2] = res[0] * res[1]
   console.log(res[0] + ' ' + res[1] + ' ' + res[2])

}