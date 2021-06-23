/*
The company ABC decided to give a salary increase to its employees, according to the following table:


Salary	Readjustment Rate
0 - 400.00
400.01 - 800.00
800.01 - 1200.00
1200.01 - 2000.00
Above 2000.00

15%
12%
10%
7%
4%


Read the employee's salary, calculate and print the new employee's salary, as well the money earned and the increase percentual obtained by the employee, with corresponding messages in Portuguese, as the below example.
Input
The input contains only a floating-point number, with 2 digits after the decimal point.

Output
Print 3 messages followed by the corresponding numbers (see example) informing the new salary, the among of money earned and the percentual obtained by the employee. Note:
Novo salario:  means "New Salary"
Reajuste ganho: means "Money earned"
Em percentual: means "In percentage"
*/
var input = require('fs').readFileSync('URI_1048_stdin', 'utf8');
var salary = parseFloat(input.split('\n'));
var readjustmentRate = [0.15 , 0.12 , 0.10 , 0.07 , 0.04];

if(salary <= 400){
    var readjustment = salary * readjustmentRate[0];
    var percent = readjustmentRate[0] * 100;
}else if(salary <= 800){
    var readjustment = salary * readjustmentRate[1];
    var percent = readjustmentRate[1] * 100;
}else if(salary <= 1200){
    var readjustment = salary * readjustmentRate[2];
    var percent = readjustmentRate[2] * 100;
}else if(salary <= 2000){
    var readjustment = salary * readjustmentRate[3];
    var percent = readjustmentRate[3] * 100;
}else{
    var readjustment = salary * readjustmentRate[4];
    var percent = readjustmentRate[4] * 100;
}
salary += readjustment;
console.log('Novo salario: ' + salary.toFixed(2));
console.log('Reajuste ganho: ' + readjustment.toFixed(2));
console.log('Em percentual: ' + percent.toFixed(0) + ' %');