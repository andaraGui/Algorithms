const input = require('fs').readFileSync('URI_2006_stdin', 'utf8');
const inputLines = input.split('\n');

const teaType = parseInt(inputLines.shift());
const teaTest = inputLines.shift().split(' ').map(Number);


let count = 0;

for(let i = 0 ; i < 5 ; i++){
    if(teaTest[i] === teaType){
        count++;
    }
}
console.log(count)