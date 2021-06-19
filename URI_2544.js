const input = require('fs').readFileSync('URI_2544_stdin', 'utf-8').trim();
const inputLines = input.split('\n');

const testCases = inputLines.length;



for (let i = 0; i < testCases; i++) {

    const numToTest = parseInt(inputLines.shift());
    let expo = 1;
    let count = 0;
    if (numToTest === 1) {
        count = 0;
     } else{
        do {
            expo = expo * 2;
            count++;
        } while (expo < numToTest);
    }
    console.log(count);
}