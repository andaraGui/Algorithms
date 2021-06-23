/*
Read four numbers (N1, N2, N3, N4), which one with 1 digit after the decimal point, corresponding to 4 scores obtained by a student. Calculate the average with weights 2, 3, 4 e 1 respectively, for these 4 scores and print the message "Media: " (Average), followed by the calculated result. If the average was 7.0 or more, print the message "Aluno aprovado." (Approved Student). If the average was less than 5.0, print the message: "Aluno reprovado." (Reproved Student). If the average was between 5.0 and 6.9, including these, the program must print the message "Aluno em exame." (In exam student).

In case of exam, read one more score. Print the message "Nota do exame: " (Exam score) followed by the typed score. Recalculate the average (sum the exam score with the previous calculated average and divide by 2) and print the message “Aluno aprovado.” (Approved student) in case of average 5.0 or more) or "Aluno reprovado." (Reproved student) in case of average 4.9 or less. For these 2 cases (approved or reproved after the exam) print the message "Media final: " (Final average) followed by the final average for this student in the last line.

Input
The input contains four floating point numbers that represent the students' grades.

Output
Print all the answers with one digit after the decimal point.
*/
var input = require('fs').readFileSync('URI_1040_stdin', 'utf8');
var lines = input.split('\n');
var n =  lines[0].split(' ').map(Number);
var nMedia = 0;
var weight = [2 ,3 , 4 , 1];
for(var x = 0 ; x < n.length ; x++){
    nMedia += n[x] * weight[x];
}
nMedia = nMedia / 10;
console.log('Media: ' + nMedia.toFixed(1));
if(nMedia >= 7.0){
    console.log('Aluno aprovado.');
}else if( nMedia >= 5.0){  
    var rec = parseFloat(lines[1]);
    console.log('Aluno em exame.');
    console.log('Nota do exame: ' + rec.toFixed(1));
    if(rec >= 6.0){
        console.log('Aluno aprovado.');
        nMedia += rec;
        nMedia = nMedia / 2;
        console.log('Media final: ' + nMedia.toFixed(1))
    }else{
        console.log('Aluno reprovado.');
    }
    
}else{
    console.log('Aluno reprovado.');
}

