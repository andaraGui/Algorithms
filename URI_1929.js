/*
Ana and her friends are making a geometry work to school, they need to create various triangles on a chart, with a few sticks of different lengths. Soon they realized that you can not form triangles with three rods of any lengths: if one of the rods is too large relative to the other two, you can't form a triangle.

In this issue, you have to help Ana and her friends to determine if, given the lengths of four rods, it is or not possible to select three rods, among the four, and form a triangle.

Input
The entry consists of one line containing four integers A, B, C and D (1 ≤ A, B, C, D ≤ 100).

Output
Your program should only produce a line containing only one character, which must be 'S' if it is possible to form the triangle or 'N' if you can not form a triangle.
*/
const input = require('fs').readFileSync('URI_1929_stdin', 'utf8');
const inputLines = input.split(' ').map(Number);

let [a, b, c, d] = inputLines.sort((a, b) => b - a);

if (a + b > c & b + c > a & c + a > b) {
    console.log('S');
} else {
    if (d + b > c & b + c > d & c + d > b) {
        console.log('S');
    } else {
        console.log('N')
    }
}
