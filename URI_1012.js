/* 
    Make a program that reads three floating point values: A, B and C. Then, calculate and show:
a) the area of the rectangled triangle that has base A and height C.
b) the area of the radius's circle C. (pi = 3.14159)
c) the area of the trapezium which has A and B by base, and C by height.
d) the area of ​​the square that has side B.
e) the area of the rectangle that has sides A and B.

Input
The input file contains three double values with one digit after the decimal point.

Output
The output file must contain 5 lines of data. Each line corresponds to one of the areas described above, always with a corresponding message (in Portuguese) and one space between the two points and the value. The value calculated must be presented with 3 digits after the decimal point.
*/

var input = require('fs').readFileSync('URI_1012_stdin', 'utf8');
var lines = input.split(' ');
var a = parseFloat(lines[0]), b = parseFloat(lines[1]), c = parseFloat(lines[2]);
var triangle = (a * c) / 2;
var circle = 3.14159 * Math.pow(c , 2);
var trapezium = ((a + b) * c) / 2;
var square = b * b;
var rectangle = a * b;
console.log('TRIANGULO: ' + triangle.toFixed(3));
console.log('CIRCULO: ' + circle.toFixed(3));
console.log('TRAPEZIO: ' + trapezium.toFixed(3));
console.log('QUADRADO: ' + square.toFixed(3));
console.log('RETANGULO: ' + rectangle.toFixed(3));
