/*
Your job in this problem is to read a number that is a line of an array, an uppercase character, indicating the operation to be performed and all elements of a bidimentional array M[12][12]. Then, you have to calculate and print the sum or average of all elements within the green area according to the case. The following figure illustrates the case when is entered the number 2 to the array line, showing all elements that must be considered in the operation.




Input
The first line of the input contains a simple integer L (0 ≤ L ≤ 11) indicating the line to be considered in the operation. The second line of the input contains a single uppercase character T ('S' or 'M'), indicating the operation Sum or Average (Média in portuguese) to be performed with the elements of the array. Follow the 144 floating-point numbers of the array, considering that the elements are inserted line by line, from line 0 to line 11, always from left to right.

Output
Print the calculated result (sum or average), with one digit after the decimal point.
*/

//This code will only work on URI Judge website,   to work on nodeJS you will need to change the if condition for the output
/*
Your job in this problem is to read a number that is a line of an array, an uppercase character, indicating the operation to be performed and all elements of a bidimentional array M[12][12]. Then, you have to calculate and print the sum or average of all elements within the green area according to the case. The following figure illustrates the case when is entered the number 2 to the array line, showing all elements that must be considered in the operation.




Input
The first line of the input contains a simple integer L (0 ≤ L ≤ 11) indicating the line to be considered in the operation. The second line of the input contains a single uppercase character T ('S' or 'M'), indicating the operation Sum or Average (Média in portuguese) to be performed with the elements of the array. Follow the 144 floating-point numbers of the array, considering that the elements are inserted line by line, from line 0 to line 11, always from left to right.

Output
Print the calculated result (sum or average), with one digit after the decimal point.
*/

//This code will only work on URI Judge website,   to work on nodeJS you will need to change the if condition to get output
const input = require('fs').readFileSync('URI_1182_stdin', 'utf8');
const inputLines = input.split('\n');

const columnToOperate = parseInt(inputLines.shift())
const operator = inputLines.shift();

let lines = []
let sum = 0;

for(let i = 0 ; i < 12; i ++){
    lines.push(Array(12));
    for(let x = 0 ; x < 12 ; x++){
        lines[i][x] = Number(inputLines.shift());
    }
}

for(let i = 0 ; i < 12 ; i++){
    sum+= lines[i][columnToOperate];
}

if(operator == 'S'){//Change to 'S\r' to test on nodeJS.
    console.log(sum.toFixed(1))
}else if(operator == 'M'){//Change to 'M\r' to test on nodeJS.
    const media = sum / 12;
    console.log(media.toFixed(1))
}


