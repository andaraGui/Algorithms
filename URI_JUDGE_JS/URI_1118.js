/*
Write an program to read two scores of a student. Calculate and print the semester average. The program must accept only valid scores (a score must fit in the range [0.10]). Each score must be validated separately.

The program must print a message "novo calculo (1-sim 2-nao)" that means "new calculate (1-yes 2-no)". After, the input will be (1 or 2). 1 means a new calculation, 2 means that the execution must be finished.

Input
The input file contains several positive or negative floating-point (double) values​. After the input of 2 valid scores, an integer number X will be read. Your program must stop when X = 2.

Output
If an invalid score is read, must be printed the message "nota invalida". When two valid scores are read, the message "media = " must be printed folowed by the average between these 2 scores. The message "novo calculo (1-sim 2-nao)" must be printed after reading X. This message should be displayed again if the standard input number for X is less than 1 or greater than 2, as example below.

The output average must be printed with 2 digits after the decimal point.
*/
const input = require('fs').readFileSync('URI_1118_stdin', 'utf8');
const lines = input.split('\n');
let TestGrade = function () {
    let [media, mediaCalc, validGradeCount] = [0, 0, 0];
    do {
        const grade = Number(lines.shift());
        if (grade < 0 || grade > 10) {
            console.log('nota invalida')
        } else {
            validGradeCount++;
            mediaCalc += grade;
        }
    } while (validGradeCount < 2);
    media = mediaCalc / 2;
    console.log('media = ' + media.toFixed(2));
}

TestGrade();
do {
    console.log('novo calculo (1-sim 2-nao)')
    let newCalcTest = Number(lines.shift());
    if(newCalcTest === 1 ){
        TestGrade();
    }else if(newCalcTest === 2){
     break;
  }
} while (lines.length >  0);
