/*
Read a value of floating point with two decimal places. This represents a monetary value. After this, calculate the smallest possible number of notes and coins on which the value can be decomposed. The considered notes are of 100, 50, 20, 10, 5, 2. The possible coins are of 1, 0.50, 0.25, 0.10, 0.05 and 0.01. Print the message “NOTAS:” followed by the list of notes and the message “MOEDAS:” followed by the list of coins.

Input
The input file contains a value of floating point N (0 ≤ N ≤ 1000000.00).

Output
Print the minimum quantity of banknotes and coins necessary to change the initial value, as the given example.
*/

var input = require('fs').readFileSync('URI_1021_stdin', 'utf8');
var money = parseFloat(input.split('\n'));
var notas = [100.00, 50.00, 20.00, 10.00, 5.00, 2.00, 1.00, 0.50, 0.25, 0.10, 0.05, 0.0099 ];
var notasc = [0 , 0 , 0 , 0 , 0 , 0 , 0, 0, 0, 0, 0, 0];
for(var x = 0 ; x < notas.length ; x++){
    while(money >= notas[x]){
        money -= notas[x];
        notasc[x]++;
    }   
}
console.log('NOTAS:');
for(var x = 0 ; x < 6 ; x++){
   
    console.log(notasc[x] + ' nota(s) de R$ ' + notas[x].toFixed(2));
}
console.log('MOEDAS:')
for(var x = 6 ; x < 12 ; x++){
   
    console.log(notasc[x] + ' moeda(s) de R$ ' + notas[x].toFixed(2));
}