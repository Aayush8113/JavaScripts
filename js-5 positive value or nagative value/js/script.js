
// Q.2 Write a Program to find if a given number is neutral or not using a ladder if else.

let value = Number(prompt("enter a value"));
let result;

if (value > 0) {
    result = ("this value is positive");
}
else if (value == 0) {
    result = ("this value is neutral")
}
else {
    result = ("this value nagative");
}
alert(result);