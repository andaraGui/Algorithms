/*
Everyone is talking about the Jatoba Teacher classes. The MEC representatives came to the UNIME of Lauro de Freitas to know more details about this new way of teaching algorithms. In addition, they wanted to select one student to participate in the OBI-Tec (Olympiad Informatics Technical Level) and represent Kroton in the competition, because they know that there are the best. To select the best, they have available a list of the registration number of each student and their respective notes in the discipline. Your task is to help the Ministry of Education staff to find students better able to represent the institution and who knows guarantee your place. If the highest score is not greater than or equal to 8, you should print "Minimum note not reached" .

Input
The file first contains the number of students (3 <= n <= 100) and then the n students bearing the registration number (0 < m < 1000000) each, followed by the note (0 <= note <= 10.0, with 1 decimal place).

Obs .: the notes will not be repeated. In other words, has no chance to have two students with the same note.

Output
You must print the student's registration number with the highest score or "Minimum note not reached" (without quotes) if no student has taken greater note than or equal to 8.
*/
const input = require('fs').readFileSync('URI_1983_stdin', 'utf8');
const inputLines = input.split('\n');

const quant = parseInt(inputLines.shift());

let [higherScore , highGradeRegister] = [ 0 , 0 ];

for( let i  = 0 ; i < quant ; i++ ){

    const [regNumber , score] = inputLines.shift().split(' ').map(Number);

    if(score >= 8 & score > higherScore){

        highGradeRegister = regNumber;
        higherScore = score;

    }
}

if(higherScore >= 8){

    console.log(highGradeRegister);

}else{

    console.log('Minimum note not reached')

}