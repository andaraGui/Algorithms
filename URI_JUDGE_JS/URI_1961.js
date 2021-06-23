/*
In each stage of the Jumping Frog game you must safely get your amphibian through a sequence of pipes of different heights to the rightmost pipe. Nevertheless the frog just survives if the height difference of consecutive pipes is at most the frog jump height. If the next pipe height is too high, the frog hits the pipe and fall. If the next pipe height is too low, the frog does not survive the fall. The frog always starts on the top of the leftmost pipe.

In this game the distance of pipes is irrelevant, which means that the frog always can reach the next pipe with a jump.



You must write a program that, given the pipe heights and the frog jump height, show if the game stage can be beaten or not.

Input
The input is given in two lines. The first one has two positive integer numbers P and N, the frog jump height and the number of pipes (1 ≤ P ≤ 5 and 2 ≤ N ≤ 100). The second line has N positive integer numbers that indicate the pipes heights ordered from left to right. There are no height greater than 10.

Output
The output is given in a single line. If the frog can reach the rightmost pipe write "YOU WIN". If the frog fails, write "GAME OVER".
*/
const input = require('fs').readFileSync('URI_1961_stdin', 'utf8');
const inputLines = input.split('\n')


const [jumpHeight, numberOfPipes] = inputLines.shift().split(' ').map(Number);
const pipesHeight = inputLines.shift().split(' ').map(Number);

let count = 1;

for (let x = 1; x < numberOfPipes; x++) {

    const prevPipe = pipesHeight[x - 1];

    if (pipesHeight[x] >= prevPipe) {
        if (jumpHeight >= pipesHeight[x] - prevPipe) {
            count++;
        } else {
            break;
        }
    }else{
        if (jumpHeight >= prevPipe - pipesHeight[x]) {
            count++;
        } else {
            break;
        }
    }

}

if (count === numberOfPipes) {
    console.log('YOU WIN')
} else {
    console.log('GAME OVER')
}
