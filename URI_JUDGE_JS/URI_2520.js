const input = require('fs').readFileSync('URI_2520_stdin', 'utf-8').trim();
const inputLines = input.split('\n');

let [pikaPositionX, pikaPositionY, ashPositionX, ashPositionY] = [0];
let [ashMovesX, ashMovesY] = [0];

do {
    const [rows, columns] = inputLines.shift().split(' ').map(Number);

    for (let i = 0; i < rows; i++) {

        const actualRow = inputLines.shift().split(' ').map(Number);
        
        for (let x = 0; x < columns; x++) {

            if (actualRow[x] === 1) {
                ashPositionX = x;
                ashPositionY = i;
            } else
                if (actualRow[x] === 2) {
                    pikaPositionX = x;
                    pikaPositionY = i;
                }
        }
    }
    
    
    ashPositionX > pikaPositionX ?  ashMovesX = ashPositionX - pikaPositionX : ashMovesX = pikaPositionX - ashPositionX ;
    ashPositionY > pikaPositionY ? ashMovesY = ashPositionY - pikaPositionY : ashMovesY =  pikaPositionY - ashPositionY;

    const ashMoves = ashMovesY + ashMovesX;
    console.log(ashMoves);

} while (inputLines.length > 0) ;

