/*
Raul Seixas sang that he was born 10 thousand years ago and there was nothing in this world that he cannot know too much. The Mamomas Assassinas band sang that more than 10 thousand years "have gone by and passed" [sic] since they have failed at 5th grade. So many past events and professor MC was curious about what year each of these have happened.

You must write a program that, given a series of how many years have passed, show, for each number, in what year the event had happened. Remember that you must indicate if it had happened BC (Before Christ) or AD (Anno Domini). Use the portuguese A.C. for BC and D.C. for AD according to the output sample.

Input
The input has several lines. The first one has a positive integer number N (1 ≤ N ≤ 100000). There are N lines after the first one. Each of these N lines has a single non negative integer T, which indicates how many years have passed until 2015 AD (0 ≤ T < 231).

Output
The output has N lines. In each one there is the year A in which the correspondent time T had happened. Look at the sample output.
*/
const input = require('fs').readFileSync('URI_1962_stdin', 'utf8');
const inputLines = input.split('\n').map(Number);

const testQuant = inputLines.shift();

for( let i = 0 ; i < testQuant ; i++ ){

    const years = inputLines.shift();

    if(years < 2015){
        console.log( (2015 - years) + ' D.C.' );
    }else{
        console.log( (years - 2014)  + ' A.C.' );
    }
}