const input = require('fs').readFileSync('URI_2147_stdin', 'utf8');
const inputLines = input.split('\n');

const quant = parseInt(inputLines.shift());

for(let x = 0 ; x < quant ; x++){
    const eQuant = inputLines.shift().length;
    console.log((eQuant * 0.01).toFixed(2))
}