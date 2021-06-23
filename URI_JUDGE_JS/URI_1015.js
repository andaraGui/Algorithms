/* 
Read the four values corresponding to the x and y axes of two points in the plane, p1 (x1, y1) and p2 (x2, y2) and calculate the distance between them, showing four decimal places after the comma, according to the formula:

Distance = 

Input
The input file contains two lines of data. The first one contains two double values: x1 y1 and the second one also contains two double values with one digit after the decimal point: x2 y2.

Output
Calculate and print the distance value using the provided formula, with 4 digits after the decimal point.
*/

var input = require('fs').readFileSync('URI_1015_stdin', 'utf8');
let lines = input.split('\n');
var pointOne = lines.shift().split(' ').map(Number);
var pointTwo =  lines.shift().split(' ').map(Number);
var res = Math.sqrt(Math.pow((pointTwo[0] - pointOne[0]), 2) + Math.pow((pointTwo[1] - pointOne[1] ), 2));
console.log(res.toFixed(4));