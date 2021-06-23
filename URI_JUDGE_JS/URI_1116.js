/*
Write a program that read two numbers X and Y and print the result of dividing the X by Y. If it's not possible, print the message "divisao impossivel".

Input
The input contains an integer number N. This N is the quantity of pairs of integer numbers X and Y read (dividend and divisor).

Output
For each test case print the result of this division with one digit after the decimal point, or “divisao impossivel” if it isn't possible to perform the calculation.
Obs.: Be carefull. The division between two integers in some languages generates another integer. Use cast:)
*/
const input = require('fs').readFileSync('URI_1116_stdin', 'utf8');
const lines = input.split('\n');
const quant = parseInt(lines.shift());
for(let i = 0 ; i < quant ; i++){
    const [x, y] = lines.shift().split(' ').map(Number);
    if( y === 0){
        console.log('divisao impossivel');
    }else{
        console.log((x / y).toFixed(1));
    }
}