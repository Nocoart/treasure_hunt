const readline = require("../src/readLine/readline");
const fs = require("fs");
const { goForward } = require("./utils/goForward/goForward");
const checkIfTreasure = require("./utils/checkIfTreasure/checkIfTreasure");
const turn = require("./utils/turn/turn");

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

// parse arrays to int
T.forEach((treasure) => {
  treasure.forEach((str, index) => (treasure[index] = parseInt(str)));
});
M.forEach((mountain) => {
  mountain.forEach((str, index) => (mountain[index] = parseInt(str)));
});
let APosition = [parseInt(A[2]), parseInt(A[3])];
let AOrientation = A[4];
let AInstruction = A[5];
const AName = A[1];

let foundTreasures = 0;
let hasMoved = false;

//simulation loop
for (let i = 0; i < AInstruction.length; i++) {
  if (AInstruction[i] === "A") {
    const position = goForward(APosition, AOrientation, M, C);
    hasMoved = position.hasMoved;
    APosition = position.APosition;
    // console.log(position);
    const treasureIndex = checkIfTreasure(APosition, hasMoved, T);
    if (treasureIndex !== false) {
      foundTreasures++;
      T[treasureIndex][2]--;
      // console.log(foundTreasures);
    }
  } else {
    const newOrientation = turn(AInstruction[i], AOrientation);
    AOrientation = newOrientation;
    // console.log(AOrientation);
  }
}

//

//CREATE OUTPUT FILE
const MList = M.map((mountain) => `M - ${mountain[0]} - ${mountain[1]}`);
const TList = [];
for (let i = 0; i < T.length; i++) {
  if (T[i][2]) TList.push(`T - ${T[i][0]} - ${T[i][1]} - ${T[i][2]}`);
}

const outputStr = `C - ${C.join(" - ")}\n${MList.join("\n")}\n${TList.join("\n")}\nA - ${AName} - ${APosition.join(
  " - "
)} - ${AOrientation} - ${foundTreasures}`;

fs.writeFile("output.txt", outputStr, (err) => {
  if (err) throw err;
  console.log("fichier crée");
});
