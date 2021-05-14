/*
Write a program that reads two integer numbers X and Y and calculate the sum of all number not divisible by 13 between them, including both.

Input
The input file contains 2 integer numbers X and Y without any order.

Output
Print the sum of all numbers between X and Y not divisible by 13, including them if it is the case.
*/
const input = require('fs').readFileSync('URI_1132_stdin', 'utf8');
const lines = input.split('\n');
const [x , y] = lines.map(Number)
let [begin , finish] = x > y ? [y , x] : [x , y]; 
let divSum = 0;

for(let i = begin ; i <= finish ; i++){
    if( i % 13 !== 0){
        divSum+= i;
    }
}
console.log(divSum);
