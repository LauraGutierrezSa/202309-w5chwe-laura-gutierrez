import Cell from "../Cell/Cell.js";
class GridWorld {
  cells = [];

  constructor(...elements) {
    const [length, isAlive] = elements;
    for (let i = 0; i < length; i++) {
      this.cells[i] = new Array(length).fill(new Cell(isAlive));
    }
  }
}

export default GridWorld;
