import GridWorld from "./GridSpace.js";
import Cell from "../Cell/Cell.js";

describe("Given a GridWorld class", () => {
  describe("When calling the constructor with its length poperty and isAlive method", () => {
    test("Then it initializes the grid world with the correct dimensions and Cell objects", () => {
      const length = 3;
      const isAlive = true;
      const gridWorld = new GridWorld(length, isAlive);

      expect(gridWorld.cells.length).toBe(length);

      for (let i = 0; i < gridWorld.cells.length; i++) {
        expect(gridWorld.cells[i].length).toBe(length);

        for (let j = 0; j < gridWorld.cells[i].length; j++) {
          expect(gridWorld.cells[i][j]).toBeInstanceOf(Cell);

          expect(gridWorld.cells[i][j].isAlive).toBe(isAlive);
        }
      }
    });
  });
});

describe("Given a GridWorld class", () => {
  describe("When calling the constructor with various length values and isAlive values", () => {
    test("Then it still initializes the grid world with the correct dimensions and Cell objects", () => {
      const length1 = 5;
      const length2 = 7;
      const isAlive1 = true;
      const isAlive2 = false;
      const gridWorld1 = new GridWorld(length1, isAlive1);
      const gridWorld2 = new GridWorld(length2, isAlive2);

      expect(gridWorld1.cells.length).toBe(length1);

      for (let i = 0; i < gridWorld1.cells.length; i++) {
        expect(gridWorld1.cells[i].length).toBe(length1);

        for (let j = 0; j < gridWorld1.cells[i].length; j++) {
          expect(gridWorld1.cells[i][j]).toBeInstanceOf(Cell);
          expect(gridWorld1.cells[i][j].isAlive).toBe(isAlive1);
        }
      }

      expect(gridWorld2.cells.length).toBe(length2);

      for (let i = 0; i < gridWorld2.cells.length; i++) {
        expect(gridWorld2.cells[i].length).toBe(length2);

        for (let j = 0; j < gridWorld2.cells[i].length; j++) {
          expect(gridWorld2.cells[i][j]).toBeInstanceOf(Cell);

          expect(gridWorld2.cells[i][j].isAlive).toBe(isAlive2);
        }
      }
    });
  });
});
