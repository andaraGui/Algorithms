/*
Write an algorithm to read a value A and a value N. Print the sum of N numbers from A (inclusive). While N is negative or ZERO, a new N (only N) must be read. All input values are in the same line.

Input
The input contains only integer values, ​​can be positive or negative.

Output
The output contains only an integer value.
*/
const input = require('fs').readFileSync('URI_1149_stdin', 'utf8');
const linesInput = input.split(' ').map(Number);
const begin = linesInput.shift();//will remove the first input witch wil be only used when find some positive value to combine
let outuput = 0;
for (let x = 0; x < linesInput.length; x++) {//Will pass through every input left
    if (linesInput[x] > 0) {//will test every input untill find some positive value
        for(let i = begin ; i < begin+ linesInput[x] ; i++ ){//when find a positive value the program will make the sum until the especified number
            outuput+=i;
        }
    }
}
console.log(outuput)