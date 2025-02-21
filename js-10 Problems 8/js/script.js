// ======== LOOPS ======
// Q.1 Write a Program to print 1 to 10 using a for loop.

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }



// Q.2 Write a Program to print 10 to 1 using a for  loop.

// for (let j = 10; j >= 1; j--) {
//     console.log(j);
// }



// Q.3 Write a Program to print 1 to N using a for loop.

// let n = Number(prompt("enter any number:"))
// for (let k= 1; k <= n; k++) {
//     console.log(k);
// }



// Q.4 Write a Program to print odd numbers from N to 1 using a for loop.

// let m=Number(prompt("enter any number:"))
// for (let a=m; a>=1; a--) {
//     if (a%2!=0) {
//         console.log(a);
//     }
// }



// Q.5 Write a Program to print even numbers from 1 to N using for loop.
// let p = Number(prompt("enter any number :"))

// for (let b = 1; b < p; b++) {
//     if (b % 2 == 0) {
//         console.log(b)
//     }
// }


// Q.6 Write a Program to print the Fibonacci series up to N numbers using a for loop.
// let c = Number(prompt("enter any number:"));
// let prev = 0;
// let current = 1;
// let newVal;
// for (let d = 1; d <= c; d++){
//     console.log(prev);
//     newVal = prev + current;
//     prev = current;
//     current = newVal;
// }


// Q.6 Write a Program to print leap years between two given numbers using a for loop.
// let year1 = Number(prompt("enter the first year"));
// let year2 = Number(prompt("enter the second year"));
// for (let number = year1; number <= year2; number++ ) {
//     if ((number%4==0 && number%100!=0)|| number%400==0){
//         console.log(number);
//     }
// }



// Q.7 Write a Program to print the multiplication table of the number N using for loop.
// let num = Number(prompt("enter you like any number"))
// let ans;
// for (let num1 = 1; num1 <= 10;num1++){
//     ans = num * num1;
//     console.log(`${num}*${num1}=${ans}`);
//     console.log(ans)
// }



// Q.8 Print this using nested for loops
let nasted = Number(prompt("enter any number"));
for (let first = 1; first <= nasted; first++) {
    for (let second = 1; second <= nasted; second++) {
        document.writeln("*")
    }
} 