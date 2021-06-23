/* 
Read an integer N that is the number of test cases that follows. Each test case contains two integers X and Y. Print one output line for each test case that is the sum of Y odd numbers from X including it if is the case. For example:
for the input 4 5, the output must be 45, that is: 5 + 7 + 9 + 11 + 13
for the input 7 4, the output must be 40, that is: 7 + 9 + 11 + 13

Input
The first line of the input is an integer N that is the number of test cases that follow. Each test case is a line containing two integer X and Y.

Output
Print the sum of all consecutive odd numbers from X.
*/
const input = require('fs').readFileSync('URI_1158_stdin', 'utf8');
const inputLines = input.split('\n');
const testsNumber = parseInt(inputLines.shift());
for(let i = 0 ; i < testsNumber ; i ++){
    let [x , y] = inputLines.shift().split(' ').map(Number);
    if(x % 2 === 0){
        x+=1;
    }
    y = (x + y * 2)//determine the finish of loop
    let oddSum = 0;
    for(let  j = x ; j < y ; j+=2){
        oddSum +=j;
    }
    console.log(oddSum)
}