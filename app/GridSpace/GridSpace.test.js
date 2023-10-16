import GridSpace from "./GridSpace.js";
import Cell from "../Cell/Cell.js";

describe("Given a GridSpace class", () => {
  describe("When calling the constructor with its length poperty and isAlive method", () => {
    test("Then it initializes the grid space with the correct dimensions and Cell objects", () => {
      const length = 3;
      const isAlive = true;
      const gridSpace = new GridSpace(length, isAlive);

      expect(gridSpace.cells.length).toBe(length);

      for (let i = 0; i < gridSpace.cells.length; i++) {
        expect(gridSpace.cells[i].length).toBe(length);

        for (let j = 0; j < gridSpace.cells[i].length; j++) {
          expect(gridSpace.cells[i][j]).toBeInstanceOf(Cell);

          expect(gridSpace.cells[i][j].isAlive).toBe(isAlive);
        }
      }
    });
  });
});

describe("Given a GridSpace class", () => {
  describe("When calling the constructor with various length values and isAlive values", () => {
    test("Then it still initializes the grid space with the correct dimensions and Cell objects", () => {
      const length1 = 5;
      const length2 = 7;
      const isAlive1 = true;
      const isAlive2 = false;
      const gridSpace1 = new GridSpace(length1, isAlive1);
      const gridSpace2 = new GridSpace(length2, isAlive2);

      expect(gridSpace1.cells.length).toBe(length1);

      for (let i = 0; i < gridSpace1.cells.length; i++) {
        expect(gridSpace1.cells[i].length).toBe(length1);

        for (let j = 0; j < gridSpace1.cells[i].length; j++) {
          expect(gridSpace1.cells[i][j]).toBeInstanceOf(Cell);
          expect(gridSpace1.cells[i][j].isAlive).toBe(isAlive1);
        }
      }

      expect(gridSpace2.cells.length).toBe(length2);

      for (let i = 0; i < gridSpace2.cells.length; i++) {
        expect(gridSpace2.cells[i].length).toBe(length2);

        for (let j = 0; j < gridSpace2.cells[i].length; j++) {
          expect(gridSpace2.cells[i][j]).toBeInstanceOf(Cell);

          expect(gridSpace2.cells[i][j].isAlive).toBe(isAlive2);
        }
      }
    });
  });
});
