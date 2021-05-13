/**
Write a program that reads two scores of a student. Calculate and print the average of these scores. Your program must accept just valid scores [0..10]. Each score must be validated separately.

Input
The input file contains many floating-point numbers​​, positive or negative. The program execution will be finished after the input of two valid scores.

Output
When an invalid score is read, you should print the message "nota invalida".
After the input of two valid scores, the message "media = " must be printed followed by the average of the student. The average must be printed with 2 numbers after the decimal point.
 */
const input = require('fs').readFileSync('URI_1117_stdin', 'utf8');
const lines = input.split('\n');
let mediaCalc = 0;
let media = 0;
do {
    const testGrade = Number(lines.shift());
    if (testGrade < 0 || testGrade > 10) {//TEST VALID TEST GRADE
        console.log('nota invalida');
    } else {
        if (mediaCalc > 0) {//TEST IF IT'S THE SECOND VALID GRADE ON THE INPUT
            media = (mediaCalc + testGrade) / 2;
        } else {
            mediaCalc += testGrade;
        }

    }

} while (media === 0);//MEDIA IS ONLY CALCULED IF WAS READ TWO VALID TEST GRADES
console.log('media = ' + media.toFixed(2));