let height;
let mass;

let isTrue;

let johnHeight = prompt("What is John's height?" + height);
let johnMass = prompt("What is John's weight?" + mass);

let markHeight = prompt("What is Mark's height?" + height);
let markMass = prompt("What is Mark's weight?" + mass);

let johnBMI = johnMass / (johnHeight^2);
let markBMI = markMass / (markHeight^2);
let isMarkBMIHigher = markBMI > johnBMI;

console.log("John's BMI is:" + johnBMI);
console.log("Mark's BMI is:" + markBMI);
console.log("Is Mark's BMI higher than John's BMI?" + isMarkBMIHigher);
