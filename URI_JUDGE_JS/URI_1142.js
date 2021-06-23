/*
Write a program that reads an integer N. This N is the number of output lines printed by this program.

Input
The input file contains an integer N.

Output
Print the output according to the given example.
*/
var input = require('fs').readFileSync('URI_1142_stdin', 'utf8');
const lines = parseInt(input.split('\n'));
let res = [0 , 0 , 0];
let begin = 1;
let finish =  (lines * 4) - 1;
do{
    
    res[0] = begin;
    res[1] = begin + 1;
    res[2] = begin + 2;
    begin += 4;
    console.log(res[0] + ' ' + res[1] + ' ' + res[2] + ' PUM')
}while(res[2] < finish);