/*
Read an integer value N. After, read these N values and print a message for each value saying if this value is odd, even, positive or negative. In case of zero (0), although the correct description would be "EVEN NULL", because by definition zero is even, your program must print only "NULL", without quotes.

Input
The first line of input is an integer N (N < 10000), that indicates the total number of test cases. Each case is a integer number X (-107 < X <107)..

Output
For each test case, print a corresponding message, according to the below example. All messages must be printed in uppercase letters and always will have one space between two words in the same line.
*/
var input = require('fs').readFileSync('URI_1078_stdin', 'utf8');
let values = input.split('\n').map(Number);
let result = [];
for (let x = 1; x <= values[0]; x++) {
    values[x] === 0 ? result[x] = 'NULL' :
        values[x] % 2 === 0 & values[x] > 0 ? result[x] = 'EVEN POSITIVE' :
            values[x] % 2 === 0 & values[x] < 0 ? result[x] = 'EVEN NEGATIVE' :
                values[x] % 2 !== 0 & values[x] > 0 ? result[x] = 'ODD POSITIVE' :
                    result[x] = 'ODD NEGATIVE';
}
for(let x = 1 ; x <= values[0] ; x++){
    console.log(result[x]);
}