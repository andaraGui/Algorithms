/*
Read 3 floating-point numbers. After, print the roots of bhaskara’s formula. If it's impossible to calculate the roots because a division by zero or a square root of a negative number, presents the message “Impossivel calcular”.

Input
Read 3 floating-point numbers (double) A, B and C.

Output
Print the result with 5 digits after the decimal point or the message if it is impossible to calculate.
*/
var input = require('fs').readFileSync('URI_1036_stdin', 'utf8');
var [a , b , c] = input.split(' ').map(Number);
var [r1 , r2] = [0 , 0];   
var res = Math.pow(b , 2) - (4 * a * c);
    if(res < 0 || 2 * a === 0){
        console.log('Impossivel calcular');
    }else{
            r1 = (-b) +  Math.sqrt(res) ;
            r1 = r1 / (2 * a);
            r2 = (-b) - Math.sqrt(res) ;
            r2 = r2 / (2 * a);
            console.log('R1 = ' + r1.toFixed(5));
            console.log('R2 = ' + r2.toFixed(5));
        }
       
    
 

