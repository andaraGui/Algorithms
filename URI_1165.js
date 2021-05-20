/*
Write a program that reads an array N [20]. After, change the first element by the last, the second element by the last but one, etc.., Up to change the 10th to the 11th. print the modified array.

Input
The input contains 20 integer numbers, positive or negative.

Output
For each position of the array N print "N[i] = Y", where i is the array position and Y is the number stored in that position.
*/
const input = require('fs').readFileSync('URI_1165_stdin', 'utf8');
const inputLines = input.split('\n').map(Number);
const testsNumber = inputLines.shift();

for (let i = 0; i < testsNumber; i++) {
    let isPrime = true;
    const test = inputLines.shift();
    
    for (let x = 2; x < test; x++) {
        if (test % x === 0) {
            isPrime = false;
            break;
        } else {
            isPrime = true;
        }
    }
    isPrime === true ? console.log(test + ' eh primo') : console.log(test + ' nao eh primo');
}