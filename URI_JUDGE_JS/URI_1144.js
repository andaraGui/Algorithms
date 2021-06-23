/*
Write a program that reads an integer N. N * 2 lines must be printed by this program according to the example below. For numbers with more than 6 digits, all digits must be printed (no cientific notation allowed).

Input
The input file contains an integer N (1 < N < 1000).

Output
Print the output according to the given example.
*/
var input = require('fs').readFileSync('URI_1144_stdin', 'utf8');
const lines = parseInt(input.split('\n'));

for (let i = 1; i <= lines; i++) {
  const res = [0, 0, 0];
  res[0] = i;
  res[1] = res[0] * res[0]
  res[2] = res[0] * res[1]
  console.log(res[0] + ' ' + res[1] + ' ' + res[2])
  console.log(res[0] + ' ' + (res[1] + 1) + ' ' + (res[2] + 1))

}