const input = require('fs').readFileSync('URI_2028_stdin', 'utf8');
const inputLines = input.split('\n').map(Number);
inputLines.pop()

for (let i = 0; i < inputLines.length; i++) {
    let outputLines = '';
    let count = 0;

    for (let x = 0; x <= inputLines[i]; x++) {
        if (x === 0) {
            outputLines += "0";
            count++;
        } else if (x == 1) {
            outputLines += " 1";
            count++;
        } else {
            for (let j = 0; j < x; j++) {
                
                outputLines += " " + x;
                count++;
            }
        }
    }

    if (outputLines === "0") {
        console.log('Caso ' + (i + 1) + ': ' + count + ' numero');
        console.log('0');
    } else {
        console.log('Caso ' + (i + 1) + ': ' + count + ' numeros');
        console.log(outputLines);
    }
        console.log('')
}
