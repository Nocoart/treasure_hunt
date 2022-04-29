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
    expect(checkIfCanMove([3, 6], [[2, 1]], [4, 5])).toBe(false);
  });
  test("should be out of map and return false", () => {
    expect(checkIfCanMove([4, 3], [[2, 1]], [4, 5])).toBe(false);
  });
});

describe("check if give correct new position acording to obstacles", () => {
  test("should update position to north", () => {
    expect(move([3, 2], "N", [[2, 1]], [4, 5])).toEqual([3, 1]);
  });
  test("should update position to south", () => {
    expect(move([3, 2], "S", [[2, 1]], [4, 5])).toEqual([3, 3]);
  });
  test("should update position to west", () => {
    expect(move([3, 2], "O", [[2, 1]], [4, 5])).toEqual([2, 2]);
  });
  test("should update position to east", () => {
    expect(move([2, 2], "E", [[2, 1]], [4, 5])).toEqual([3, 2]);
  });
  test("should hit a mountain and return previous position", () => {
    expect(move([2, 2], "N", [[2, 1]], [4, 5])).toEqual([2, 2]);
  });
  test("should go out the map and return previous position", () => {
    expect(move([2, 0], "N", [[2, 1]], [4, 5])).toEqual([2, 0]);
  });
});
