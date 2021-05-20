/*
Write a program that reads a number and print the Fibonacci number corresponding to this read number. Remember that the first elements of the Fibonacci series are 0 and 1 and each next term is the sum of the two preceding it. All the Fibonacci numbers calculated in this program must fit in a unsigned 64 bits number.

Input
The first line of the input contains a single integer T, indicating the number of test cases. Each test case contains a single integer N (0 ≤ N ≤ 60), corresponding to the N-th term of the Fibonacci series.

Output
For each test case in the input, print the message "Fib(N) = X", where X is the N-th term of the Fibonacci series.
*/
const input = require('fs').readFileSync('URI_1176_stdin', 'utf8');
const inputLines = input.split('\n').map(Number);
const numberTests  = inputLines.shift(); 

let fibonacci = [0, 1];
const max = Math.max(...inputLines)
for(let x = 2 ; x <= max ; x++){
    fibonacci[x] = fibonacci[x - 1] + fibonacci [ x - 2];
    
}
for(let x = 0 ; x < numberTests ; x++){
    actualNumber = inputLines.shift();
    console.log('Fib('+ actualNumber + ') = ' + fibonacci[actualNumber])
}