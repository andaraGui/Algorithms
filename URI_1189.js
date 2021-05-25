/*
Read an uppercase character that indicates an operation that will be performed in an array M[12][12]. Then, calculate and print the sum or average considering only that numbers that are included in the green area of this array, like shown in the following figure.




Input
The first line of the input contains a single uppercase character O ('S' or 'M'), indicating the operation Sum or Average (Média in portuguese) to be performed with the elements of the array. Follow 144 floating-point numbers of the array.

Output
Print the calculated result (sum or average), with one digit after the decimal point.
*/
//This code will only work on URI Judge website,   to work on nodeJS you will need to change the if condition to get output

const input = require('fs').readFileSync('URI_1189_stdin', 'utf8');
const inputLines = input.split('\n');

const operator = inputLines.shift();


let lines = []
let sum = 0;

for (let i = 0; i < 12; i++) {
    lines.push(Array(12));
    for (let x = 0; x < 12; x++) {
        lines[i][x] = Number(inputLines.shift());
    }
}

let count = 0;
let [paramBegin, paramFinish] = [1,10];

for(let x = 0 ; x <= 4 ; x++){
    for(let i = paramBegin ; i <= paramFinish ; i++ ){
       sum+=lines[i][x];
       count++
    }
    paramBegin++;
    paramFinish--;
}



if (operator == 'S') {//Change to 'S\r' to test on nodeJS.
    console.log(sum.toFixed(1))
} else if (operator == 'M') {//Change to 'M\r' to test on nodeJS.
    const media = sum / count;
    console.log(media.toFixed(1))
}
