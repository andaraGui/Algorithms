const input = require('fs').readFileSync('URI_2060_stdin', 'utf8');
const inputLines = input.split('\n');

const quant  = parseInt(inputLines.shift());
const inputNumbers = inputLines.shift().split(' ').map(Number);

let count = [0, 0, 0, 0]


for(let x = 0 ; x < quant ; x++){

    const num = inputNumbers.shift();

    for(let i = 2 ; i <= 5 ; i++){

        if(num % i === 0){
            count[i - 2]++;
        }

    }

}

for(let i = 2 ; i <= 5 ; i++){
    console.log(count[i - 2]  + ' Multiplo(s) de ' + i)
}