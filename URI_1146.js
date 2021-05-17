/*
Your program must read an integer X indefinited times (the program must stop when X is equal to zero). For each X print the sequence from 1 to X, with one space between each one of these numbers.

PS: Be carefull. Don't leave any space after the last number of each line, otherwise you'll get Presentation Error.

Input
The input file contains many integer numbers. The last one is zero.

Output
For each number N of the input file, one output line must be printed, from 1 to N like the following example. Be careful with blank spaces after the last line number.


*/
const input = require('fs').readFileSync('URI_1146_stdin', 'utf8');
const linesInput = input.split('\n').map(Number);
for (let i = 0; i < linesInput.length; i++) {
    if (linesInput[i] === 0) {
        break;
    } else {
        let lineOutput = '';
        for (let x = 1; x <= linesInput[i]; x++) {
            if (x === linesInput[i]) {
                lineOutput += x.toString()
            } else {
                lineOutput += (x.toString() + ' ');
            }

        }
        console.log(lineOutput)
    }
}