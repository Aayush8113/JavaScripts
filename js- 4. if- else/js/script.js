/*
Q.1 Write a Program to find the minimum number from the given 2 numbers using if else.
For example
 */

let a = Number(prompt("enter a value of a"));
let b = Number(prompt("enter a value of b"));
let output;

if (a < b) {
    output = (`a${a} is less than b${b}`);
}
else {
    output = (`b${b} is less than a${a}`);
}
alert(output);
