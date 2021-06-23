/*
Write a program that keep reading a password until it is valid. For each wrong password read, write the message "Senha inválida". When the password is typed correctly print the message "Acesso Permitido" and finished the program. The correct password is the number 2002.

Input
The input file contains several tests cases. Each test case contains only an integer number.

Output
For each number read print a message corresponding to the description of the problem.
*/
const input = require('fs').readFileSync('URI_1114_stdin', 'utf8');
const lines = input.split('\n')
const password = 2002;
do{
    const passTest = parseInt(lines.shift());
        if(passTest == password){
            console.log('Acesso Permitido');
            break;
        }else{
            console.log('Senha Invalida');
        }
   
}while(lines.length > 0);
