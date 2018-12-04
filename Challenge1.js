let height;
let mass;

let isTrue;

let johnHeight =55;
let johnMass = 150;

let markHeight = 88;
let markMass = 189;

let johnBMI = johnMass / (johnHeight^2);
let markBMI = markMass / (markHeight^2);
let isMarkBMIHigher = markBMI > johnBMI;

console.log("John's BMI is:" + johnBMI);
console.log("Mark's BMI is:" + markBMI);
console.log("Is Mark's BMI higher than John's BMI?" + isMarkBMIHigher);
