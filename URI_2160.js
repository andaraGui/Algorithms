const input = require('fs').readFileSync('URI_2160_stdin', 'utf8')
const inputLines = input.split('\r')

if(inputLines[0].length <= 81){
    console.log('YES');
}else{
    console.log('NO');
}