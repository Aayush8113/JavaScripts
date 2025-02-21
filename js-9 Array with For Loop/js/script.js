let arr = [11, 12, 13, 14, 15];

let arr2D = [
    ["karan", "Rohit", "Dhavanl"],
    ["Rishi", "Kartik", "Bhautik"],
    ["Bhavesh", "Aayush", "Mayur"],
]

const arr2d_0 = arr2D[0];
console.log(arr2D[0]);
arr2d_0[2] = "Munno";
console.log(arr2D[0][1]);
console.log(arr2D[0]);

console.log("=====");
console.log(arr2D[1]);
console.log(arr2D[1][2]);
console.log("=====");
console.log(arr2D[2]);
console.log(arr2D[2][1]);
console.log("=====");




for (let i = 0; i < arr2D.length; i++) {
    console.log(arr2D[i]);
    console.log(`=====array at : ${i}=====`);


    for (let j = 0; j < arr2D.length; j++)
        console.log(j, arr2D[i][j]);
    console.log();
    console.log();
}