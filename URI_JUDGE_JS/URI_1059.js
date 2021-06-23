/*
Write a program that prints all even numbers between 1 and 100, including them if it is the case.

Input
In this extremely simple problem there is no input.

Output
Print all even numbers between 1 and 100, including them, one by row.
*/
for(var x = 1 ; x <= 100 ; x++){
    if(x % 2 === 0){
        console.log(x);
    }
}