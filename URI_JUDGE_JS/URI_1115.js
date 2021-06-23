/*
Write a program to read the coordinates (X, Y) of an indeterminate number of points in Cartesian system. For each point write the quadrant to which it belongs. The program finish when at least one of two coordinates is NULL (in this situation without writing any message).

Input
The input contains several tests cases. Each test case contains two integer numbers.

Output
For each test case, print the corresponding quadrant which these coordinates belong, as in the example.
*/
const input = require('fs').readFileSync('URI_1115_stdin', 'utf8');
const lines = input.split('\n');
do{
    const[x , y] = lines.shift().split(' ').map(Number);
    if(x === 0 || y === 0){
        break;
        
    }else{
      x > 0 & y > 0 ? console.log('primeiro') : 
      x < 0 & y > 0 ? console.log('segundo') : 
      x < 0 & y < 0 ? console.log('terceiro') :
                      console.log('quarto');
    }

}while(lines.length > 0);