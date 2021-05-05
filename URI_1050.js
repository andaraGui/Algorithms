/*
Read an integer number that is the code number for phone dialing. Then, print the destination according to the following table:




If the input number isn’t found in the above table, the output must be:
DDD nao cadastrado
That means “DDD not found” in Portuguese language.

Input
The input consists in a unique integer number.

Output
Print the city name corresponding to the input DDD. Print DDD nao cadastrado if doesn't exist corresponding DDD to the typed number.
*/
var input = require('fs').readFileSync('URI_1050_stdin', 'utf8');
var ddd = parseInt(input.split('\n'));
switch(ddd){
    case 61: var cidade = "Brasilia"; break;
    case 71: var cidade = "Salvador"; break;
    case 11: var cidade = "Sao Paulo"; break;
    case 21: var cidade = "Rio de Janeiro" ; break;
    case 32: var cidade = "Juiz de Fora" ; break;
    case 19: var cidade = "Campinas" ; break;
    case 27: var cidade = "Vitoria" ; break;
    case 31: var cidade = "Belo Horizonte" ; break;
}
console.log(cidade)