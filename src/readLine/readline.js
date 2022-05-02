const entryFile = "input.txt";
const fs = require("fs");

let reader = fileReader(entryFile);

function* fileReader(filePath) {
  let lines = fs.readFileSync(filePath, { encoding: "utf8" }).split("\n");
  for (line of lines) {
    yield line;
  }
}

const readline = () => {
  return reader.next().value;
};

module.exports = readline;
