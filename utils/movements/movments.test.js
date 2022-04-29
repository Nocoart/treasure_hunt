const { checkIfCanMove, move } = require("./movments");

describe("check if can move when hit a mountain, go out the map or makes legit deplacement", () => {
  test("should be valid move and return true", () => {
    expect(checkIfCanMove([3, 2], [[2, 1]], [4, 5])).toBe(true);
  });
  test("should hit a mountain and return false", () => {
    expect(checkIfCanMove([1, 1], [[1, 1]], [4, 5])).toBe(false);
  });
  test("should hit one of the mountains and return false", () => {
    expect(
      checkIfCanMove(
        [1, 1],
        [
          [3, 4],
          [1, 1],
        ],
        [4, 5]
      )
    ).toBe(false);
  });
  test("should be out of map and return false", () => {
    expect(checkIfCanMove([4, 6], [[2, 1]], [4, 5])).toBe(false);
  });
});
