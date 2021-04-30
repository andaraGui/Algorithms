/*  
Read an integer value corresponding to a person's age (in days) and print it in years, months and days, followed by its respective message “ano(s)”, “mes(es)”, “dia(s)”.

Note: only to facilitate the calculation, consider the whole year with 365 days and 30 days every month. In the cases of test there will never be a situation that allows 12 months and some days, like 360, 363 or 364. This is just an exercise for the purpose of testing simple mathematical reasoning.

Input
The input file contains 1 integer value.

Output
Print the output, like the following example.
*/
var input = require('fs').readFileSync('URI_1020_stdin', 'utf8');
var lines = parseInt(input.split('\n'));
var [year , month , day] = [0 , 0 , 0];
do{
    if(lines >= 365){
        lines -= 365;
        year++;
    }else if(lines >= 30){
        lines -=30;
        month++;
    }else{
        lines--;
        day++;
    }
}while(lines > 0);
console.log(year + ' ano(s)');
console.log(month + ' mes(es)');
console.log(day + ' dia(s)');