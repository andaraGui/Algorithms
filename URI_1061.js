/*
Peter is organizing an event in his University. The event will be in April month, beginning and finishing within April month. The problem is: Peter wants to calculate the event duration in seconds, knowing obviously the begin and the end time of the event.

You know that the event can take from few seconds to some days, so, you must help Peter to compute the total time corresponding to duration of the event.

Input
The first line of the input contains information about the beginning day of the event in the format: “Dia xx”. The next line contains the start time of the event in the format presented in the sample input. Follow 2 input lines with same format, corresponding to the end of the event.

Output
Your program must print the following output, one information by line, considering that if any information is null for example, the number 0 must be printed in place of W, X, Y or Z:

W dia(s)
X hora(s)
Y minuto(s)
Z segundo(s)

Obs: Consider that the event of the test case have the minimum duration of one minute. “dia” means day, “hora” means hour, “minuto” means minute and “Segundo” means second in Portuguese.
*/

var input = require('fs').readFileSync('URI_1061_stdin', 'utf8');
let lines = input.split('\n');
let beginDay = lines[0].split(' ');  //transform Day 'x' in Number 'x'
    beginDay = parseInt(beginDay[1]);
let finishDay = lines[2].split(' ');
    finishDay = parseInt(finishDay[1]);//transform Day 'x' in Number 'x'
let beginTime = lines[1].split(':').map(Number);
let finishTime = lines[3].split(':').map(Number);
let calcSeconds = finishTime[2] - beginTime[2];
let calcMinutes = 0;
let calcHours = 0;
let calcDays = 0;
//Seconds Calc
if (calcSeconds < 0) {
    calcMinutes--;
    calcSeconds = calcSeconds + 60;
}
//Minutes Calc
calcMinutes = calcMinutes + (finishTime[1] - beginTime[1]);
if (calcMinutes < 0) {
    calcHours--;
    calcMinutes = calcMinutes + 60;
}
//Hours Calc
calcHours = calcHours + (finishTime[0] - beginTime[0]);
if(calcHours < 0){
    calcDays--;
    calcHours = calcHours + 24;
}
//Days Calc
calcDays = calcDays + (finishDay - beginDay);

//Reponse
console.log(calcDays + ' dia(s)');
console.log(calcHours + ' hora(s)');
console.log(calcMinutes + ' minuto(s)');
console.log(calcSeconds + ' segundo(s)');