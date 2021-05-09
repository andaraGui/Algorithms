/*
Read an integer N. Print the square of each one of the even values from 1 to N including N if it is the case.

Input
The input contains an integer N (5 < N < 2000).

Output
Print the square of each one of the even values from 1 to N, as the given example.

Be carefull! Some language automaticly print 1e+006 instead 1000000. Please configure your program to print the correct format setting the output precision.


*/
var input = require('fs').readFileSync('URI_1073_stdin', 'utf8');
const lines = parseInt(input.split('\n'));
for(let x = 2 ; x <= lines ; x = x + 2){
    console.log(x + '^2 = ' + (Math.pow(x , 2)));
}