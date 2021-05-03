var input = require('fs').readFileSync('URI_1044_stdin', 'utf8');
var lines = input.split(' ').map(Number);
if(lines[1] % lines[0] === 0 || lines[0] % lines[1] === 0){
    console.log('Sao Multiplos');
}else{
    console.log('Nao sao Multiplos');
}
