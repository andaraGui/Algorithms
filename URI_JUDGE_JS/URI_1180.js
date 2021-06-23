const input = require('fs').readFileSync('URI_1180_stdin', 'utf8');
const inputLines = input.split('\n');
const quant = parseInt(inputLines.shift());
const array = inputLines.shift().split(' ').map(Number);
let lowest = array[0], lowestPosition = 0;
for (let x = 0; x < quant; x++) {
    const lowestTemp = Math.min(array[x], array[x - 1]);
    if (lowestTemp < lowest) {
        lowest = lowestTemp;
        lowestPosition = x;
    }
}
console.log('Menor valor: ' + lowest)
console.log('Posicao: ' + lowestPosition)
