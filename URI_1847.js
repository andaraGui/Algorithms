const input = require('fs').readFileSync('URI_1847_stdin', 'utf8');

const [ dayOne, dayTwo, dayThree ] = input.split(' ').map(Number);

if(dayOne > dayTwo ){
    if(dayTwo <= dayThree){
    console.log(':)');
    }else{
        const difOne =  dayOne - dayTwo;
        const difTwo =  dayTwo - dayThree;
        if(difOne <= difTwo){
            console.log(':(');
        }else{
            console.log(':)');
        }
    }
}
else if(dayOne <  dayTwo){
    if(dayTwo >= dayThree){
        console.log(':(');  
    }else{
        const difOne = dayTwo - dayOne ;
        const difTwo = dayThree - dayTwo ;
        if(difTwo < difOne){
            console.log(':(');
        }else{
            console.log(':)');
        }
    }
}
else{ 
    if(dayOne === dayTwo & dayTwo < dayThree){
        console.log(':)');
    }else{
        console.log(':(');
    }
}