/*
Write an program that reads two numbers X and Y (X < Y). After this, show a sequence of 1 to y, passing to the next line to each X numbers.

Input
The input contains two integer numbers X (1 < X < 20) and Y (X < Y < 100000).

Output
Each sequence must be printed in one line, with a blank space between each number, like the following example.
 */
var input = require('fs').readFileSync('URI_1145_stdin', 'utf8');
const [numbersInLine, finishCount] = input.split(' ').map(Number);
let valueCount = 1;
do {
  let lineOutput = '';
  for (let i = 1; i <= numbersInLine; i++) {
    if (valueCount <= finishCount) {
      if (i == numbersInLine) {
        lineOutput += valueCount.toString();
      } else {
        lineOutput += valueCount.toString() + ' ';
      }
    }
    valueCount++;
  }
  console.log(lineOutput)
} while (valueCount <= finishCount);