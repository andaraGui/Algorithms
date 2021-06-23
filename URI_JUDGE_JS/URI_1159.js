/*
The program must read an integer X indefinite times (stop when X=0). For each X, print the sum of five consecutive even numbers from X, including it if X is even. If the input number is 4, for example, the output must be 40, that is the result of the operation: 4+6+8+10+12. If the input number is 11, for example, the output must be 80, that is the result of 12+14+16+18+20.

Input
The input file contains many integer numbers. The last one is zero.

Output
Print the output according to the example below.
*/
const input = require('fs').readFileSync('URI_1159_stdin', 'utf8');
const inputLines = input.split('\n').map(Number);
do{
    let x  = inputLines.shift();
    if(x % 2 !== 0){
        x+=1;
    }
    y = x + 10;
    let evenSum = 0;
    for(let  i = x ; i < y ; i+=2){
        evenSum += i;
    }
    console.log(evenSum);
}while(inputLines[0] !== 0);