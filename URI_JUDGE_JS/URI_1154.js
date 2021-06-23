/*
Write an algorithm to read an undeterminated number of data, each containing an individual's age. The final data, which will not enter in the calculations, contains the value of a negative age. Calculate and print the average age of this group of individuals.

Input
The input contains an undetermined number of integers. The input will be stop when a negative value is read.

Output
The output contains a value corresponding to the average age of individuals.

The average should be printed with two digits after the decimal point.
*/
const input = require('fs').readFileSync('URI_1154_stdin', 'utf8');
const agesInput = input.split('\n').map(Number);
let agesSum = 0;
let count = 0;
for(let i = 0 ; i < agesInput.length ; i++){
    if(agesInput[i] > 0){
        agesSum += agesInput[i];
        count++;
    }else{
        break;
    }
}

let agesMedia = agesSum / count;
console.log(agesMedia.toFixed(2))
