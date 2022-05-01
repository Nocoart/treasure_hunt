const turn = (angle, AOrientation) => {
  const possibleOrientation = ["N", "E", "S", "O"];
  const index = possibleOrientation.indexOf(AOrientation);
  let newOrientation = "";
  switch (angle) {
    case "D":
      if (index < 3) newOrientation = possibleOrientation[index + 1];
      else newOrientation = possibleOrientation[0];
      break;
    case "G":
      if (index > 0) newOrientation = possibleOrientation[index - 1];
      else newOrientation = possibleOrientation[3];
      break;
  }
  return newOrientation;
};

module.exports = turn;
