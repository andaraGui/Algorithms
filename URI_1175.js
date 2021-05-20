/*
Write a program that reads an array N [20]. After, change the first element by the last, the second element by the last but one, etc.., Up to change the 10th to the 11th. print the modified array.

Input
The input contains 20 integer numbers, positive or negative.

Output
For each position of the array N print "N[i] = Y", where i is the array position and Y is the number stored in that position.
*/
const input = require('fs').readFileSync('URI_1165_stdin', 'utf8');
const inputLines = input.split('\n').map(Number);
let definePosition = [] ;

    for(let x = 0 ; x < 20 ; x++){
        definePosition[x] = inputLines.shift();
    }

    definePosition.reverse();
    
    for(let x = 0 ; x < 20 ; x++){
        console.log('N[' + x + '] = ' + definePosition[x]);
    }
