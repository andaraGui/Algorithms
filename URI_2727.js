const input = require('fs').readFileSync('URI_2727_stdin', 'utf-8');
const inputLines = input.split('\n');

const letters = [null, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v','w', 'x', 'y', 'z' ]
do{
    let type = ''
    const linesToReturn = parseInt(inputLines.shift());

    for(let i = 0 ; i < linesToReturn; i++){
        
        const lineToConvertSplited = inputLines.shift().trim().split(' ');
        let positionInAlphabet = 0;

        for(let j = 0 ; j < lineToConvertSplited.length ; j++){
            
            if(lineToConvertSplited[j] === '...'){
                type = 'threeDot';
                positionInAlphabet+=3;
            }else if(lineToConvertSplited[j] === '..'){
                type = 'twoDot';
                positionInAlphabet+=2;
            }else if(lineToConvertSplited[j] === '.'){
                type = 'oneDot';
                positionInAlphabet+=2;
            }
        }
            
        let modifier = 0;
            if(type == 'twoDot'){
                modifier = lineToConvertSplited.length - 1;
            }else
            if(type == 'oneDot'){
                modifier = lineToConvertSplited.length - 2;
            }

            console.log(letters[positionInAlphabet + modifier]); 
    }


}while(inputLines.length > 0);
