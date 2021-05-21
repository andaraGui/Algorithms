/*
Write a program that reads a number T and fill a vector N[1000] with the numbers from 0 to T-1 repeated times, like as the example below.

Input
The input contains an integer number T (2 ≤ T ≤ 50).

Output
For each position of the array N, print "N[i] = x", where i is the array position and x is the number stored in that position.
*/
const input = require('fs').readFileSync('URI_1177_stdin', 'utf8');
const arrayLimit = parseInt(input.split('\n'));
let vector = 0;
while(vector < 1000){
    for(let x = 0 ; x < arrayLimit ; x++){
        console.log('N[' + vector + '] = ' + x)
        vector++;
        if(vector === 1000){
            break;
        }
        
    }
}