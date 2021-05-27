/*
You have gotten two circular energy cables. The first one has radius R1 and the second R2. You need to buy a circular conduit (see the image below) that fits those two cables:



What is the smallest radius of a conduit you need to buy? In other words, given two circles, what is the smallest radius of a third circle that circumscribe the other two?

Input
In the first line there is an integer T (T ≤ 10000), indicating the number of test cases.

On the only line of each test case we will have the two integers R1 and R2 indicating the cables radius. The integers will be positive and all the math will fit in a regular integer of 32 bits.
Output
In each test case, output the answer in a single line.
*/
const input = require('fs').readFileSync('URI_1589_stdin', 'utf8');
const inputLines = input.split('\n');
const numberOfTests = parseInt(inputLines.shift());

for(let x = 0 ; x < numberOfTests ; x++){
    const [R1 , R2] = inputLines.shift().split(' ').map(Number)
    console.log(R1 + R2)
}