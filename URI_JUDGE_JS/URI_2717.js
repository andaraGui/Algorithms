const input = require('fs').readFileSync('URI_2717_stdin','utf-8');
const inputLines = input.split('\n');

const timeLeft = parseInt(inputLines.shift());
const [timeToFabricateOne, timeToFabricateTwo] = inputLines.shift().split(' ').map(Number)

const timeToFabricate = timeToFabricateOne + timeToFabricateTwo;

if(timeToFabricate > timeLeft){
    console.log('Deixa para amanha!');
}else{
    console.log('Farei hoje!');
}