/*
Read three integers and sort them in ascending order. After, print these values in ascending order, a blank line and then the values in the sequence as they were readed.

Input
The input contains three integer numbers.

Output
Present the output as requested above.
*/
var input = require('fs').readFileSync('URI_1042_stdin', 'utf8');
var lines = input.split(' ').map(Number);
var srt = lines.sort(function(a , b){return a - b});
for(var x = 0 ; x < lines.length ; x++){
    console.log(srt[x]);
}
console.log('');
lines = input.split(' ').map(Number);
for(var x = 0 ; x < lines.length ; x++){
    console.log(lines[x]);
}
