const input = require('fs').readFileSync('URI_1182_stdin', 'utf8');
const inputLines = input.split('\n');
const columnToOperate = parseInt(inputLines.shift());
const operator = inputLines.shift();
let column = [];
let sum = 0;

for (let i = 0; i < 12; i++) {
    
    for (let x = 0; x < 12; x++) {
        column[x] = parseInt(inputLines.shift())
        if (x === columnToOperate) {
            sum += column[x]
        }
    }
}

if(operator == 'S\r'){//Change for 'S\r' to test on nodeJS.
    console.log(sum.toFixed(1))
}else if(operator == 'M\r'){//Change for 'M\r' to test on nodeJS.
    const media = sum / 12;
    console.log(media.toFixed(1))
}


