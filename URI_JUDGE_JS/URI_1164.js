/*
In mathematics, a perfect number is an integer for which the sum of all its own positive divisors (excluding itself) is equal to the number itself. For example the number 6 is perfect, because 1+2+3 is equal to 6. Your task is to write a program that read integer numbers and print a message informing if these numbers are perfect or are not perfect.

Input
The input contains several test cases. The first contains the number of test cases N (1 ≤ N ≤ 100). Each one of the following N lines contains an integer X (1 ≤ X ≤ 108), that can be or not a perfect number.

Output
For each test case print the message “X eh perfeito” (X is perfect) or “X nao eh perfeito” (X isn't perfect) according with to above specification.
*/
const input = require('fs').readFileSync('URI_1164_stdin', 'utf8');
const inputLines = input.split('\n').map(Number);
const testNumber = inputLines.shift();
for (let x = 0; x < testNumber; x++) {
    let divisorsSum = 0;
    const num = inputLines.shift();
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            divisorsSum += i;
        }
    }
    if (divisorsSum === num) {
        console.log(num + ' eh perfeito')
    } else {
        console.log(num + ' nao eh perfeito')
    }
}

