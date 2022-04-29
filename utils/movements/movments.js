const checkIfCanMove = (ANextPos, M, C) => {
  if (ANextPos[0] < 0 || ANextPos[1] < 0 || ANextPos[0] >= C[0] || ANextPos[1] >= C[1]) return false;
  for (let i = 0; i < M.length; i++) {
    if (M[i][0] === ANextPos[0] && M[i][1] === ANextPos[1]) return false;
  }
  return true;
};

const move = (APosition, AOrientation, M, C) => {
  let ANextPos = APosition;
  switch (AOrientation) {
    case "N":
      ANextPos[1] -= 1;
      break;
    case "S":
      ANextPos[1] += 1;
      break;
    case "E":
      ANextPos[0] += 1;
      break;
    case "O":
      ANextPos[0] -= 1;
      break;
  }

  return ANextPos;
  checkIfCanMove(ANextPos, M, C) ? ANextPos : APosition;
};

module.exports = {
  checkIfCanMove,
  move,
};
