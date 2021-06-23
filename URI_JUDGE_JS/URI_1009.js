/* 
Make a program that reads a seller's name, his/her fixed salary and the sale's total made by himself/herself in the month (in money). Considering that this seller receives 15% over all products sold, write the final salary (total) of this seller at the end of the month , with two decimal places.

- Don’t forget to print the line's end after the result, otherwise you will receive “Presentation Error”.

- Don’t forget the blank spaces.

Input
The input file contains a text (employee's first name), and two double precision values, that are the seller's salary and the total value sold by him/her.

Output
Print the seller's total salary, according to the given example.
*/
var input = require('fs').readFileSync('URI_1009_stdin', 'utf8');
var lines = input.split('\n');
var name = lines.shift();
var salaryBase = parseFloat(lines.shift());
var sell = parseFloat(lines.shift());
var comission = salaryBase + (sell * 0.15);
console.log('TOTAL = R$ ' + comission.toFixed(2));