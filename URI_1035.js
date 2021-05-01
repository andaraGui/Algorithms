/*
Read 4 integer values A, B, C and D. Then if B is greater than C and D is greater than A and if the sum of C and D is greater than the sum of A and B and if C and D were positives values and if A is even, write the message “Valores aceitos” (Accepted values). Otherwise, write the message “Valores nao aceitos” (Values not accepted).

Input
Four integer numbers A, B, C and D.

Output
Show the corresponding message after the validation of the values​​.
*/
var input = require('fs').readFileSync('URI_1035_stdin', 'utf8');
var [a , b , c , d] = input.split(' ').map(Number);
if(b > c & d > a ){
    var temp = c + d;
    var temp2 = a + b;
    if(temp > temp2){
        if(c > 0 & d > 0 & a % 2 == 0){
            console.log('Valores aceitos')
        }else{
            console.log('Valores nao aceitos');
        }
    }else{
    
        console.log('Valores nao aceitos');
    }
}else{
    console.log('Valores nao aceitos');
}