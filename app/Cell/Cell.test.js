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

  describe("Given a Cell class", () => {
    let cell;
    describe("When setting the status of the cell", () => {
      test("Then it should update the status of the cell", () => {
        cell = new Cell(false);

        cell.setStatus(true);

        expect(cell.getStatus()).toBe(true);
      });
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

  describe("Given a Cell class", () => {
    let cell;

    describe("When increasing the count of alive neighbors", () => {
      test("Then it should increment the count of alive neighbors by one", () => {
        cell = new Cell(false);

        cell.increaseAliveNeighbours();

        expect(cell.getAliveNeighbours()).toBe(1);
      });
    });
  });

  describe("Given a Cell class", () => {
    let cell;
    describe("When resetting the count of alive neighbors", () => {
      test("Then it should reset the count of alive neighbors to zero", () => {
        cell = new Cell(false);

        cell.increaseAliveNeighbours();
        cell.resetAliveNeighbours();

        expect(cell.getAliveNeighbours()).toBe(0);
      });
    });
  });
});
