const checkIfTreasure = require("./treasuresCheck");

describe("check if can move when hit a mountain, go out the map or makes legit deplacement", () => {
  test("should not have moved and return false", () => {
    expect(checkIfTreasure([2, 1], false, [[2, 1, 2]])).toBe(false);
  });
});
