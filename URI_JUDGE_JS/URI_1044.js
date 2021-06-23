/*
Read two nteger values (A and B). After, the program should print the message "Sao Multiplos" (are multiples) or "Nao sao Multiplos" (aren’t multiples), corresponding to the read values.

Input
The input has two integer numbers.

Output
Print the relative message to the input as stated above. 
*/
var input = require('fs').readFileSync('URI_1044_stdin', 'utf8');
var lines = input.split(' ').map(Number);
if(lines[1] % lines[0] === 0 || lines[0] % lines[1] === 0){
    console.log('Sao Multiplos');
}else{
    console.log('Nao sao Multiplos');
}
