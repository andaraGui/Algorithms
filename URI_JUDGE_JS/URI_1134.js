/*
A gas station wants to determine which of their products is the preference of their customers. Write a program to read the type of fuel supplied (coded as follows: 1. Alcohol 2. Gasoline 3. Diesel 4. End). If you enter an invalid code (outside the range of 1 to 4) a new code must be requested. The program will end when the inserted code is the number 4.

Input
The input contains only integer and positive values.

Output
It should be written the message: "MUITO OBRIGADO" and the amount of customers who fueled each fuel type, as an example.
*/
const input = require('fs').readFileSync('URI_1134_stdin', 'utf8');
const lines = input.split('\n')
let insertedCode = Number(lines.shift());
let alcoholCount = 0, gasolineCount = 0, dieselCount = 0;
do {
    switch (insertedCode) {
        case 1: alcoholCount++;
            break;
        case 2: gasolineCount++;
            break;
        case 3: dieselCount++;
            break;
    }
    insertedCode = Number(lines.shift());
} while (insertedCode !== 4);
console.log('MUITO OBRIGADO')
console.log('Alcool: ' + alcoholCount);
console.log('Gasolina: ' + gasolineCount);
console.log('Diesel: ' + dieselCount);