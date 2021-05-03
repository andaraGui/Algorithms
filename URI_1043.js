/*
Read three point floating values (A, B and C) and verify if is possible to make a triangle with them. If it is possible, calculate the perimeter of the triangle and print the message:


Perimetro = XX.X


If it is not possible, calculate the area of the trapezium which basis A and B and C as height, and print the message:


Area = XX.X

Input
The input file has tree floating point numbers.

Output
Print the result with one digit after the decimal point.
*/
var input = require('fs').readFileSync('URI_1043_stdin', 'utf8');
var [a , b , c] = input.split(' ').map(Number);
var triangle = 0;
if((b - c) < a & a < (b + c)){
    triangle++;
}if((a - c) < b & b < (a + c)){
    triangle++;
}if((a - b) < c & c < (a + b)){
    triangle++;
}
if(triangle === 3){
    var per = a + b + c;
    console.log('Perimetro = ' + per.toFixed(1));
}else{
    var area = ((a + b) * c) / 2;
    console.log('Area = ' + area.toFixed(1));
}