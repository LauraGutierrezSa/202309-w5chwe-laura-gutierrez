import Cell from "./Cell";

describe("Given an class Cell", () => {
  describe("When given the boolean property with default result isAlive = true", () => {
    test("Then cell isAlive property returns true", () => {
      const expectedIsAlive = true;
      const cell = new Cell(true);

      expect(cell.isAlive).toBe(expectedIsAlive);
    });
  });
});

describe("Given the Cell class", () => {
  test("When the cell initializes with the correct isAlive value", () => {
    const cell = new Cell(true);
    expect(cell.isAlive).toBe(true);
  });

  test("Then the cell isAlive property can be changed", () => {
    const cell = new Cell(true);
    cell.isAlive = false;
    expect(cell.isAlive).toBe(false);
  });
});

describe("When changing the isAlive property of the cell to false", () => {
  test("Then cell.isAlive returns false", () => {
    const expectedIsAlive = false;
    const cell = new Cell(true);

    cell.isAlive = false;

    expect(cell.isAlive).toBe(expectedIsAlive);
  });
});
