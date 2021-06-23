/*
The slugs racing is a sport that has grown in recent years, causing several people dedicate their lives trying to capture fast slugs, and trains them to make millions in races around the world. But the task of capturing fast slugs is not an easy task, since almost all the slugs are very slow. Each slug is classified at a level depending on their speed:


Level 1: If speed is less than 10 cm/h.
Level 2: If speed is greater than or equal to 10 cm/h and lower than 20 cm/h.
Level 3: If speed is greater than or equal to 20 cm/h.


Your task is to identify which level of speed faster slug of a group of slugs.

Input
The entry consists consists multiple test cases, and each consists of two lines: The first line contains an integer L (1 ≤ L ≤ 500) representing the number of slugs of the group, and the second line contains L integers Vi (1 ≤ Vi ≤ 50) representing the speeds of each slug.
The input ends with end of file (EOF).

Output
For each test case, output a single line with the level of speed faster slug of a group of slugs.
*/
const input = require('fs').readFileSync('URI_1789_stdin', 'utf8');
const inputLines = input.split('\n');


while (inputLines.length > 1) {
    const numberOfSlugs = parseInt(inputLines.shift());
    const slugsSpeed = inputLines.shift().split(' ').map(Number);
    
    let levelOfSpeed = 1;
    
    for (let x = 0; x < numberOfSlugs; x++) {
        if (slugsSpeed[x] >= 20) {
            levelOfSpeed = 3;
            break;
        } else if (slugsSpeed[x] >= 10) {
            levelOfSpeed = 2;
        }
    }
    console.log(levelOfSpeed)
}
