const readline = require("./readline");
const fs = require("fs");

// gather inputs
const inputs = [];
for (let i = 0; i < Infinity; i++) {
  const input = readline();
  if (input) inputs.push(input.replace(/\s/g, ""));
  else break;
}
const splitInput = inputs.map((el) => el.split("-"));

// init variables
const C = splitInput[0].splice(1);

const M = splitInput.filter((el) => {
  if (el[0].charCodeAt() === "M".charCodeAt()) return el.splice(0, 1);
});
const T = splitInput.filter((el) => {
  if (el[0].charCodeAt() === "T".charCodeAt()) return el.splice(0, 1);
});
const A = splitInput[splitInput.length - 1];

// get numbers
T.forEach((treasure) => {
  treasure.forEach((str, index) => (treasure[index] = parseInt(str)));
});
M.forEach((mountain) => {
  mountain.forEach((str, index) => (mountain[index] = parseInt(str)));
});
let APosition = [parseInt(A[2]), parseInt(A[3])];
let AOrientation = A[4];
let AInstruction = A[5];

console.log("APosition", APosition);
console.log("AOrientation", AOrientation);
console.log("AInstruction", AInstruction);
console.log(M);

//

//

//

//

//CREATE OUTPUT FILE

fs.writeFile("output.txt", "put BLABLA here", (err) => {
  if (err) throw err;
  console.log("fichier crée");
});
