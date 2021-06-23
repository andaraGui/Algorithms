/*
In the 8th episode of Big Bang Theory's second season, The Lizard-Spock Expansion, Sheldon and Raj are arguing about what is the best: the movie Saturn 3 or the TV show Deep Space 9. Raj suggests rock-paper-scissors to settle down the dispute. However, Sheldon says "Ooh, I don't think so. No, anectodal evidence suggests that in the game of rock-paper-scissors, players familiar with each other will tie 75 to 80% of the time due to the limited number of outcomes. I suggest rock-paper-scissors-lizard-Spock".

The rules of the game are:

scissors cuts paper;
paper covers rock;
rock crushes lizard;
lizard poisons Spock;
Spock smashes scissors;
scissors decapitates lizard;
lizard eats paper;
paper disproves Spock;
Spock vaporizes rock;
rock crushes scissors.
Both choosed Spock and the game tied. However, it isn't hard to realize what would happened if the game had continued. In the case of Sheldon's victory, he would've said: "Bazinga!"; if Raj had won, Sheldon would declare: "Raj trapaceou!" ("Raj cheated" in portuguese); in ties, he would request a new game: "De novo!" ("Again!", in portuguese). Given the options chosen by both, make a program that prints Sheldon reaction to the outcome.

Input
The first line contains an integer T (T ≤ 100) indicating the number of test cases. Each test case is described using one line. The line contains Sheldon and Raj options, separated by one blank space. The possible options are: pedra, papel, tesoura, lagarto e Spock (rock, paper, scissors, lizard and Spock).

Output
For each test case your program must output a single line with the following message: "Caso #t: R", where t is the test case number and R is Sheldon's reaction to the outcome: "Bazinga!", "Raj trapaceou!", or "De novo!".
 */
const input = require('fs').readFileSync('URI_1828_stdin', 'utf8');
const inputLines = input.split('\n');
const testQuant = parseInt(inputLines.shift());
for (let x = 1; x <= testQuant; x++) {
    let [sheld, raj] = inputLines.shift().split(' ')
    raj = raj.trim();
    switch (sheld) {
        case 'tesoura':
            if (raj === 'Spock' || raj === 'pedra') {
                console.log(`Caso #${x}: Raj trapaceou!`)
                break;
            } else if (raj === 'papel' || raj === 'lagarto') {
                console.log(`Caso #${x}: Bazinga!`)
                break;
            } else {
                console.log(`Caso #${x}: De novo!`)
                break;
            }
            break;

        case 'papel':
            if (raj === 'lagarto' || raj === 'tesoura') {
                console.log(`Caso #${x}: Raj trapaceou!`)
                break;
            } else if (raj === 'pedra' || raj === 'Spock') {
                console.log(`Caso #${x}: Bazinga!`)
                break;
            } else {
                console.log(`Caso #${x}: De novo!`)
                break;
            }
            break;
        case 'pedra':
            if (raj === 'papel' || raj === 'Spock') {
                console.log(`Caso #${x}: Raj trapaceou!`)
                break;
            } else if (raj === 'lagarto' || raj === 'tesoura') {
                console.log(`Caso #${x}: Bazinga!`)
                break;
            } else {
                console.log(`Caso #${x}: De novo!`)
                break;
            }
            break;
        case 'lagarto':
            if (raj === 'pedra' || raj === 'tesoura') {
                console.log(`Caso #${x}: Raj trapaceou!`)
                break;
            } else if (raj === 'Spock' || raj === 'papel') {
                console.log(`Caso #${x}: Bazinga!`)
                break;
            } else {
                console.log(`Caso #${x}: De novo!`)
                break;
            }
            break;
        case 'Spock':
            if (raj === 'lagarto' || raj === 'papel') {
                console.log(`Caso #${x}: Raj trapaceou!`)
                break;
            } else if (raj === 'tesoura' || raj === 'pedra') {
                console.log(`Caso #${x}: Bazinga!`)
                break;
            } else {
                console.log(`Caso #${x}: De novo!`)
                break;
            }
            break;
    }



}