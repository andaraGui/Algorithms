/*
In this problem you need to read 15 numbers and must put them into two different arrays: par if the number is even or impar if this number is odd. But  the size of each of the two arrrays is only 5 positions. So every time you fill one of two arrays, you must print the entire array to be able to use it again for the next numbers that are read. At the end, all remaining numbers of each one of these two arrays must be printed beggining with the odd array. Each array can be filled how many times are necessary.

Input
The input contains 15 integer numbers.

Output
Print the output like the following example.
*/
const input = require('fs').readFileSync('URI_1179_stdin', 'utf8');
const inputLines = input.split('\n').map(Number);
let evenArray = [];
let oddArray = [];
let iEven = 0, iOdd = 0;

do {
    const testNumber = inputLines.shift();
    if (testNumber % 2 === 0) {
        evenArray[iEven] = testNumber;
        iEven++;
    } else {
        oddArray[iOdd] = testNumber
        iOdd++;
    }


    if (iOdd === 5 || inputLines.length === 0) {
        for (let x = 0; x < iOdd; x++) {
            console.log('impar[' + x + '] = ' + oddArray[x]);

        }
        oddArray = []
        iOdd = 0;
    }

    if (iEven === 5 || inputLines.length === 0) {
        for (let x = 0; x < iEven; x++) {
            console.log('par[' + x + '] = ' + evenArray[x]);

        }
        evenArray = [];
        iEven = 0;
    }


}while(inputLines.length > 0)

