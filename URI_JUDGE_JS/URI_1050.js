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
switch (ddd) {
    case 61: var cidade = "Brasilia"; console.log(cidade); break;
    case 71: var cidade = "Salvador"; console.log(cidade); break;
    case 11: var cidade = "Sao Paulo"; console.log(cidade); break;
    case 21: var cidade = "Rio de Janeiro"; console.log(cidade); break;
    case 32: var cidade = "Juiz de Fora"; console.log(cidade); break;
    case 19: var cidade = "Campinas"; console.log(cidade); break;
    case 27: var cidade = "Vitoria"; console.log(cidade); break;
    case 31: var cidade = "Belo Horizonte"; console.log(cidade); break;
    default: console.log('DDD nao cadastrado');
}
