const input = require('fs').readFileSync('URI_2344_stdin', 'utf8');
const score = parseInt(input.split('\n'));

if(score === 0){
    console.log('E');
}
else if(score <= 35){
    console.log('D');
}
else if(score <= 60){
    console.log('C');
}
else if(score <= 85){
    console.log('B');
}
else if(score <= 100){
    console.log('A');
}