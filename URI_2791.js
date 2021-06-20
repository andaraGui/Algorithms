const input = require('fs').readFileSync('uri_2791_stdin','utf-8').trim();
const inputSplited = input.split(' ');

for(let i = 0 ; i < 4 ; i++){
    if(inputSplited[i] === '1'){
        console.log(i + 1)
    }
}