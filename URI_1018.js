/* 
    In this problem you have to read an integer value and calculate the smallest possible number of banknotes in which the value may be decomposed. The possible banknotes are 100, 50, 20, 10, 5, 2 e 1. Print the read value and the list of banknotes.

Input
The input file contains an integer value N (0 < N < 1000000).

Output
Print the read number and the minimum quantity of each necessary banknotes in Portuguese language, as the given example. Do not forget to print the end of line after each line, otherwise you will receive “Presentation Error”.
*/
var input = require('fs').readFileSync('URI_1018_stdin', 'utf8');
var money = parseInt(input.split('\n'));
var notas = [100, 50, 20, 10, 5, 2, 1];
var notasc = [0 , 0 , 0 , 0 , 0 , 0 , 0];
console.log(money)
for(var x = 0 ; x < notas.length ; x++){
    while(money >= notas[x]){
        money -= notas[x];
        notasc[x]++;
    }   
}for(var x = 0 ; x < notas.length ; x++){
   
    console.log(notasc[x] + ' nota(s) de R$ ' + notas[x] + ',00');
}