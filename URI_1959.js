/*
In Euclidean geometry, a regular polygon is a polygon that is equiangular (all angles are equal in measure) and equilateral (all sides have the same length). A simple polygon is one that does not intersect itself anywhere. Below we can see various mosaics made of regular polygons.



You must write a program that, given the number and the length of sides of a regular polygon, show its perimeter.

Input
The input are two positive integers: N and L, which are, respectively, the number of sides and the length of each side of a regular polygon (3 ≤ N ≤ 1000000 and 1 ≤ L ≤ 4000).

Output
The output is the perimeter P of the regular polygon in a single line.
*/
const input = require('fs').readFileSync('URI_1959_stdin', 'utf8');
const [a , b] = input.split(' ').map(Number);
console.log(a * b)