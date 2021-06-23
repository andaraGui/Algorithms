/*
The Federação Gaúcha de Futebol invited you to write a program to present a statistical result of several GRENAIS. Write a program that read the number of goals scored by Inter and the number of goals scored by Gremio in a GRENAL. Write the message "Novo grenal (1-sim 2-nao)" and request a response. If the answer is 1, two new numbers must be read (another input case) asking the number of goals scored by the teams in a new departure, otherwise the program must be finished, printing:

- How many GRENAIS were part of the statistics.
- The number of victories of Inter.
- The number of victories of Gremio.
- The number of Draws.
- A message indicating the team that won the largest number of GRENAIS (or the message: "Não houve vencedor" if both team won the same quantity of GRENAIS).

Input
The input contains two integer values​​, corresponding to the goals scored by both teams. Then there is an integer (1 or 2), corresponding to the repetition of the algorithm.

Output
After each reading of the goals it must be printed the message "Novo grenal (1-sim 2-nao)". When the program is finished, the program must print the statistics as the example below.
*/
const input = require('fs').readFileSync('URI_1131_stdin', 'utf8');
const lines = input.split('\n');
let repetitionTest = 1;
let grenaisCount = 0 , interWinCount = 0, gremioWinCount = 0, drawCount = 0;

while(repetitionTest === 1){
    const [interScore , gremioScore] = lines.shift().split(' ').map(Number);
    grenaisCount++;
    if(interScore === gremioScore){
        drawCount++;
    }else if(interScore > gremioScore){
        interWinCount++;
    }else{
        gremioWinCount++;
    }

    console.log('Novo grenal (1-sim 2-nao)');
    repetitionTest = parseInt(lines.shift());

}
console.log(grenaisCount + ' grenais');
console.log('Inter:' + interWinCount);
console.log('Gremio:' + gremioWinCount);
console.log('Empates:' + drawCount);
interWinCount > gremioWinCount ? console.log('Inter venceu mais') :
gremioWinCount > interWinCount ? console.log('Gremio venceu mais') :
console.log('Nao houve vencedor');