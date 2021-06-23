/*
Read an undetermined number of pairs of integer values. Write a message for each pair indicating if this two numbers are in ascending or descending order.

Input
The input file contains several test cases. Each test case contains two integer numbers X and Y. The input will finished when X = Y.

Output
For each test case print “Crescente”, if the values X and Y are in ascending order, otherwise print “Decrescente”.
*/
const input = require('fs').readFileSync('URI_1113_stdin', 'utf8');
const lines = input.split('\n')
do{
    const [x, y] = lines.shift().split(' ').map(Number);
        if(x === y){
            break;
        }else if(y < x){
            console.log('Decrescente');
        }else{
            console.log('Crescente');
        }          
   
}while(lines.length > 0);
