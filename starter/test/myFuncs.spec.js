const { add, multiply, getUserByID } = require("../myFuncs");

describe("myFuncs.js tests", () => {
  // Tests for Add
  test("myFuncs:add :: Does module have add", () => {
    expect(add).toBeDefined();
  });

  test("myFuncs:add :: Does Addition of 2 and 3 give 5", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("myFuncs:add :: Does Addition of -1 and -2 give -3", () => {
    expect(add(-1, -2)).toBe(-3);
  });

  // Tests for Multiply
  test("myFuncs:multiply :: Does module have multiply", () => {
    expect(multiply).toBeDefined();
  });

  test("myFuncs:multiply :: Does Multiplying 2 and 3 give 6", () => {
    expect(multiply(2, 3)).toBe(6);
  });

  test("myFuncs#getUserByID when passed userID 2 will return Mehgan", async () => {
    const actual = await getUserByID(2);
    const expected = {
      name: "Mehgan",
      age: 72,
      state: "IA",
    };
    expect(actual).toEqual(expected);
  });
});
