const input = require('fs').readFileSync('URI_2203_stdin', 'utf-8');
const inputLines = input.split('\n');

do {

    const [fiddleCordX, fiddleCordY, invaderCordX, invaderCordY, invaderSpeed, ultRadius, crowsFlightRadius] = inputLines.shift().split(' ').map(Number);

    let distanceX = fiddleCordX - invaderCordX;
    let distanceY = fiddleCordY - invaderCordY;

    if(distanceX < 0){
        distanceX = -distanceX;
    }
    if(distanceY < 0){
        distanceY = -distanceY;
    }
    
    distanceX += invaderSpeed * 1.5;
    distanceY += invaderSpeed * 1.5;

    const hitRange = ultRadius + crowsFlightRadius;
    if(distanceX <= hitRange  & distanceY <= hitRange){
        console.log('Y');
    }else{
        console.log('N')
    }


} while (inputLines.length > 0);