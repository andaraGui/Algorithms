/*
NASA scientists have discovered a new exoplanet which is 1 billion light years from earth. The name of this planet was named Pronalândia in honor of the young scientists being formed in PRONATEC. But the most amazing is yet to come. Observing the planet they were able to identify that the inhabitants of Pronalândia were trying to communicate with a number. But the number who have found is reversed and how they found many of them, they called you to be able to automate this process. Thus, given a number, your task is to print the invert number.

Input
 The file contains only a test line which is the number found (0 < n < 9999999999).

Note.: the read number is too high to store in a variable of type int, so you will need to use the long type, for reading and printing in C, you should use the %llu.

Output
print read number inverted. Do not forget to print the end of line (\n) else you will receved the Presentation Error message.
*/
const input = require('fs').readFileSync('URI_1984_stdin', 'utf8');
const inputLines = input.split('\n').toString();

let output = '';
for( let x = inputLines.length -1 ; x >= 0 ; x-- ){
    parseInt(inputLines[x]) >= 0 & parseInt(inputLines[x]) <= 9999999999 ? output+=inputLines[x] : '';
    
}
    
console.log(output)