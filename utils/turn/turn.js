const turn = (angle, AOrientation) => {
  const possibleOrientation = ["N", "O", "S", "E"];
  const index = possibleOrientation.indexOf(AOrientation);
  let newOrientation = "";
  switch (angle) {
    case "D":
      if (index < 2) newOrientation = possibleOrientation[index + 1];
      else newOrientation = index[0];
      break;
    case "G":
      if (index > 0) newOrientation = possibleOrientation[index - 1];
      else newOrientation = index[3];
      break;
  }
  return newOrientation;
};

module.exports = turn;
