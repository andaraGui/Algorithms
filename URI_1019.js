/*
Read an integer value, which is the duration in seconds of a certain event in a factory, and inform it expressed in hours:minutes:seconds.

Input
The input file contains an integer N.

Output
Print the read time in the input file (seconds) converted in hours:minutes:seconds like the following example.
*/
var input = require('fs').readFileSync('URI_1019_stdin', 'utf8');
var lines = parseInt(input.split('\n'));
var time = [0 , 0 , 0];
do{
    lines--;
    time[2]++;
    if(time[2] == 60){
        time[1]++;
        time[2] = 0;
    }if(time[1] == 60){
        time[0]++;
        time[1] = 0;
    }
}while(lines > 0); 

console.log(time[0] + ':' + time[1] + ':' + time[2]);
    