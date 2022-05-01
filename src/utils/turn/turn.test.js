const turn = require("./turn");

describe("check if can turn", () => {
  test("should return N when facing E and turn left (G)", () => {
    expect(turn("G", "E")).toBe("N");
  });
  test("should return N when facing O and turn right (D)", () => {
    expect(turn("D", "O")).toBe("N");
  });
});
