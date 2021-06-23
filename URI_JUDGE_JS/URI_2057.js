const input = require('fs').readFileSync('URI_2057_stdin' , 'utf-8');
const [departure , travelTime , timeZone]= input.split(' ').map(Number);

const  hours = departure + travelTime + timeZone;

if(hours >= 24){
    const output = hours - 24;
    console.log(output)
}else if(hours < 0){    
    const output = hours + 24;
    console.log(output)
}else{
    console.log(hours);
}