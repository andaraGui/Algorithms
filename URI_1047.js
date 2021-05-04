/* 
Read the start time and end time of a game, in hours and minutes (initial hour, initial minute, final hour, final minute). Then print the duration of the game, knowing that the game can begin in a day and finish in another day,

Obs.: With a maximum game time of 24 hours and the minimum game time of 1 minute.

Input
Four integer numbers representing the start and end time of the game.

Output
Print the duration of the game in hours and minutes, in this format: “O JOGO DUROU XXX HORA(S) E YYY MINUTO(S)” . Which means: the game lasted XXX hour(s) and YYY minutes.
*/
var input = require('fs').readFileSync('URI_1047_stdin', 'utf8');
var [inicialHour, inicialMin, finalHour, finalMin] = input.split(' ').map(Number);
var hours = 0, mins = 0;

if (inicialHour === finalHour & inicialMin === finalMin) {
    console.log('O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)')
}else{
    hours = finalHour - inicialHour;
    mins = finalMin - inicialMin;
    if (mins < 0) {
        mins += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
    }
    console.log('O JOGO DUROU ' + hours + ' HORA(S) E ' + mins + ' MINUTO(S)');
}
