/* 
You must make a program that read a float-point number and print a message saying in which of following intervals the number belongs: [0,25] (25,50], (50,75], (75,100]. If the read number is less than zero or greather than 100, the program must print the message “Fora de intervalo” that means "Out of Interval".

The symbol '(' represents greather than. For example:
[0,25] indicates numbers between 0 and 25.0000, including both.
(25,50] indicates numbers greather than 25 (25.00001) up to 50.0000000.

Input
The input file contains a floating-point number.

Output
The output must be a message like following example.
*/
var input = require('fs').readFileSync('URI_1037_stdin', 'utf8');
var  lines = parseFloat(input.split('\n'));
if(lines < 0 || lines > 100){
    console.log('Fora de intervalo');
}else if(lines <= 25.0000){
        console.log('Intervalo [0,25]');
    }else if(lines <= 50.0000){
        console.log('Intervalo (25,50]');
    }else if(lines <= 75.0000){
        console.log('Intervalo (50,75]');
    }else if(lines <= 100.0000){
        console.log('Intervalo (75,100]');
    }
