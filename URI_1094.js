/*
Maria has just started as graduate student in a medical school and she's needing your help to organize a laboratory experiment which she is responsible about. She wants to know, at the end of the year, how many animals were used in this laboratory and the percentage of each type of animal is used at all.

This laboratory uses in particular three types of animals: frogs, rats and rabbits. To obtain this information, it knows exactly the number of experiments that were performed, the type and quantity of each animal is used in each experiment.

Input
The first line of input contains an integer N indicating the number of test cases that follows. Each test case contains an integer Amount (1 ≤ Amount ≤ 15) which represents the amount of animal used and a character Type ('C', 'R' or 'S'), indicating the type of animal:
- C: Coelho (rabbit in portuguese)
- R: Rato (rat  in portuguese)
- S: Sapo (frog in portuguese)

Output
Print the total of animals used, the total of each type of animal and the percentual of each one in relation of the total of animals used. The percentual must be printed with 2 digits after the decimal point.
*/
const input = require('fs').readFileSync('URI_1094_stdin', 'utf8');
const lines = input.split('\n');
const quantTests = parseInt(lines.shift());
let [totalRabbits, totalRats, totalFrogs , totalAnimals] = [0, 0, 0 , 0];
for (let i = 0; i < quantTests; i++) {
    let [quant, type] = lines.shift().split(' ');
    if (type == 'C' || type == 'C\r') {
        totalRabbits += parseInt(quant);
        totalAnimals += parseInt(quant);
    } else if (type == 'R' || type == 'R\r') {
        totalRats += parseInt(quant);
        totalAnimals += parseInt(quant);
    }
    else if (type == 'S' || type == 'S\r') {
        totalFrogs += parseInt(quant);
        totalAnimals += parseInt(quant);
    }
}
const rabbitsPercent =(100 / totalAnimals)* totalRabbits;
const ratsPercent = (100 / totalAnimals) * totalRats;
const frogsPercent = (100 / totalAnimals) * totalFrogs;

console.log('Total: ' + totalAnimals + ' cobaias');
console.log('Total de coelhos: ' + totalRabbits);
console.log('Total de ratos: ' + totalRats);
console.log('Total de sapos: ' + totalFrogs);
console.log('Percentual de coelhos: ' + rabbitsPercent.toFixed(2) + ' %');
console.log('Percentual de ratos: ' + ratsPercent.toFixed(2) + ' %');
console.log('Percentual de sapos: ' + frogsPercent.toFixed(2) + ' %');
