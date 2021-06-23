/*
 Write an algorithm to calculate and write the value of S, S being given by:
S = 1 + 3/2 + 5/4 + 7/8 + ... + 39/?

Input
There is no input in this problem.

Output
The output contains a value corresponding to the value of S.
The value should be printed with two digits after the decimal point.
 */
let S = 1;
let param = 2
for(let i = 3 ; i <= 39 ; i +=2 ){
    S += (i/param)
    param +=param;
}
console.log(S.toFixed(2))
