class Cell {
  isAlive;
  aliveNeighbours = 0;
  neighbourCoordinates;

  constructor(isAlive) {
    this.isAlive = isAlive;
  }

  setStatus(status) {
    this.isAlive = status;
  }

  getStatus() {
    return this.isAlive;
  }

  getAliveNeighbours() {
    return this.aliveNeighbours;
  }

  increaseAliveNeighbours() {
    this.aliveNeighbours++;
  }

  resetAliveNeighbours() {
    this.aliveNeighbours = 0;
  }
}

export default Cell;
