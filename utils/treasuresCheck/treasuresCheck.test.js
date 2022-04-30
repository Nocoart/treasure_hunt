const checkIfTreasure = require("./treasuresCheck");

describe("check if can move when hit a mountain, go out the map or makes legit deplacement", () => {
  test("should not have moved and return false", () => {
    expect(checkIfTreasure([2, 1], false, [[2, 1, 2]])).toBe(false);
  });
  test("should not be on a trasure and return false", () => {
    expect(checkIfTreasure([2, 1], true, [[2, 2, 2]])).toBe(false);
  });
  test("should be on a trasure and return index 0", () => {
    expect(checkIfTreasure([2, 1], true, [[2, 1, 2]])).toBe(0);
  });
  test("should be on a trasure and return index 1", () => {
    expect(
      checkIfTreasure([2, 1], true, [
        [4, 1, 2],
        [2, 1, 2],
      ])
    ).toBe(1);
  });
});
