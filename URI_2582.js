const input = require('fs').readFileSync('URI_2582_stdin', 'utf-8');
const inputLines = input.split('\n');

const testsQuant = parseInt(inputLines.shift());

for(let i = 0 ; i < testsQuant ; i++){
    const [ numA , numB ] = inputLines.shift().split(' ').map(Number);
    const sumBetween = numA + numB;
    let output = '';
    switch (sumBetween) {
        case 0:
            output = 'PROXYCITY';
            break;
        case 1:
            output = 'P.Y.N.G.';
        break;
        case 2:
            output = 'DNSUEY!';
        break;
        case 3:
            output = 'SERVERS';
        break;
        case 4:
            output = 'HOST!';
        break;
        case 5:
            output = 'CRIPTONIZE';
        break;
        case 6:
            output = 'OFFLINE DAY';
        break;
        case 7:
            output = 'SALT';
        break;
        case 8:
            output = 'ANSWER!';
        break;
        case 9:
            output = 'RAR?';
        break;
        case 10:
            output = 'WIFI ANTENNAS';
        break;
    
        default:
            break;
    }
    console.log(output)
}