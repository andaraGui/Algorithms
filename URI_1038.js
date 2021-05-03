/* 
Using the following table, write a program that reads a code and the amount of an item. After, print the value to pay. This is a very simple program with the only intention of practice of selection commands.



Input
The input file contains two integer numbers X and Y. X is the product code and Y is the quantity of this item according to the above table.

Output
The output must be a message "Total: R$ " followed by the total value to be paid, with 2 digits after the decimal point.
*/
var input = require('fs').readFileSync('URI_1038_stdin', 'utf8');
let order = input.split(' ').map(Number);
let price = [0 , 4.0 , 4.5 , 5.0 , 2.0 , 1.5 ];
console.log('Total: R$ ' + (price[order[0]] * order[1]).toFixed(2))