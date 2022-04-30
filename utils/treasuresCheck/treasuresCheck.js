const checkIfTreasure = (Aposition, hasMoved, T) => {
  if (!hasMoved) return false;
  for (let i = 0; i < T.length; i++) {
    if (T[i][0] === Aposition[0] && T[i][1] === Aposition[1]) return i;
  }
  return false;
};

module.exports = checkIfTreasure;
