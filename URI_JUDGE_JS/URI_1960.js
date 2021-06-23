/*
The ECI (Editio Chronica Incredibilis or Amazing Chronicles Editors) is very traditional when numbering the pages of its books. It always uses the Roman numerals for that. And its books never have more than 999 pages. When necessary, the books are split into volumes.

You must write a program that, given an arabic number, show its equivalent in roman numerals.

Remember that I stands for 1, V for 5, X for 10, L for 50, C for 100, D for 500 and M stands for 1000.

Input
The input is a positive integer number N (0 < N < 1000).

Output
The output is the number N written as Roman numerals in a single line. Always use uppercase letters.


*/
const input = require('fs').readFileSync('URI_1960_stdin', 'utf8');
let inputLines = parseInt(input.split('\n'));

const numberParam = [1000, 500, 100, 50, 10, 5, 1]
const letterParam = ['M', 'D', 'C', 'L', 'X', 'V', 'I']
let output = '';
let x = 0;
do {
    let firstNumber = inputLines.toString() //transform the inicial value in string to get only the first number

    if (inputLines >= numberParam[x] & firstNumber[0] === '4') { //teste if the first number is 4, so will be necessary to do a diferent math
        if (inputLines >= numberParam[x] * 4) {//will procced only if the number is bigger than 'x * 4' (if the number is 40, so the program will run until find the Param 10)
            
            inputLines -= numberParam[x] * 4;   //will remove 4x the X (case x = 10, he will remove 40)
            output += letterParam[x];           //will set the letter (in case 40, he will insert X)
            output += letterParam[x - 1];       //then after insert X, he will insert the L(50), so the letters will be (XL = 40)
        
        }

    } else if (inputLines >= numberParam[x] & firstNumber[0] === '9') {//teste if the first number is 9, so will be necessary to do a diferent math
        if (inputLines >= numberParam[x] * 9) {//will test if the number is bigger than 'x * 9' (example, if it is 9, you want to ignore the 'V(5)')
        
            inputLines -= numberParam[x] * 9;//will remove 9 * x (in case 9, after jump the 'V(5)' , (example: will get to I(1) and remove '9*x(I) = 9' )
            output += letterParam[x];       //then will insert the X Letter (example of 9 , if I(1) was multiplied by 9, so will insert One 'I')
            output += letterParam[x - 2];   //then will jump 2 indexes in the letterParam array(because roman numbers are always 'one multiple of 5, then one multiple of 10, and in the numbers who beguin with 9, we gonna just work with the multiples of 10)
       
        }else{
            x++;            //will jump a index in the numberParam array if it isn't multiple of 10;
        }

    }else if (inputLines >= numberParam[x]) {//if the first number isnt 9 or 4, so just insert the index X letter and remove index X of the total value;
        inputLines -= numberParam[x];
        output += letterParam[x];

    } else {//if isnt >= than numberParam, so jump to the next one
        x++;
    }

} while (inputLines > 0)//only ends when the incial value become 0;

console.log(output)


