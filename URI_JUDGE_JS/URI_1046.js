/*
Read the start time and end time of a game, in hours. Then calculate the duration of the game, knowing that the game can begin in a day and finish in another day, with a maximum duration of 24 hours. The message must be printed in portuguese “O JOGO DUROU X HORA(S)” that means “THE GAME LASTED X HOUR(S)”

Input
Two integer numbers representing the start and end time of a game.

Output
Print the duration of the game as in the sample output.
*/
var input = require('fs').readFileSync('URI_1046_stdin', 'utf8');
var [bg , fn] = input.split(' ').map(Number);
var hours = 0;
if(bg === fn){
    console.log('O JOGO DUROU 24 HORA(S)');
}else if(bg < fn){
    hours = fn - bg;
     console.log('O JOGO DUROU ' + hours + ' HORA(S)')
}else if(bg > fn){
    hours = bg - fn;
    hours = -hours + 24;
    console.log('O JOGO DUROU ' + hours + ' HORA(S)')
}

