/*
Read an undetermined number of pairs values M and N (stop when any of these values is less or equal to zero). For each pair, print the sequence from the smallest to the biggest (including both) and the sum of consecutive integers between them (including both).

Input
The input file contains pairs of integer values M and N. The last line of the file contains a number zero or negative, or both.

Output
For each pair of numbers, print the sequence from the smallest to the biggest and the sum of these values, as shown below.
*/
const input = require('fs').readFileSync('URI_1101_stdin', 'utf8');
const lines = input.split('\n')
let sum = 0;

do{
    let numbers = '';
    let begin = 0 , finish = 0;
    const [m, n] = lines.shift().split(' ').map(Number)
    if(m > 0 && n > 0){
        if(m <= n){
            begin = m;
            finish = n
        }else{
            begin = n;
            finish = m;
        }  
        
        for(let i = begin ; i <= finish ; i++){
            sum += i;
            numbers += (i + ' ');
        }
            console.log(numbers + 'Sum=' + sum);
            sum = 0;
    }
   
}while(lines.length > 0);
