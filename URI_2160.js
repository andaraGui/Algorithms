const input = require('fs').readFileSync('URI_2160_stdin', 'utf8')
const inputLines = input.split('\r')

if(inputLines[0].length <= 81){//why 81? i don't know
    console.log('YES');
}else{
    console.log('NO');
}