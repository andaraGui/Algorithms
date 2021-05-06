/*
Read an integer number between 1 and 12, including. Corresponding to this number, you must print the month of the year, in english, with the first letter in uppercase.

Input
The input contains only an integer number.

Output
Print the name of the month according to the input number, with the first letter in uppercase.
*/

var input = require('fs').readFileSync('URI_1052_stdin', 'utf8');
var month = parseInt(input.split('\n'));
switch (month) {
    case 1: console.log('January'); break;
    case 2: console.log('February'); break;
    case 3: console.log('March'); break;
    case 4: console.log('April'); break;
    case 5: console.log('May'); break;
    case 6: console.log('June'); break;
    case 7: console.log('July'); break;
    case 8: console.log('August'); break;
    case 9: console.log('September'); break;
    case 10: console.log('October'); break;
    case 11: console.log('November'); break;
    case 12: console.log('December'); break;
}