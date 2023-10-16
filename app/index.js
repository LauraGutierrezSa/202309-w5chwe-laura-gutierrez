import GridWorld from "./GridSpace";
import Cell from "./Cell";

const gridSize = 10;
const gridWorld = new GridWorld(gridSize, false);

const gridContainer = document.getElementById("grid-container");

for (let position = 0; position < gridSize; position++) {
  for (let i = 0; i < gridSize; i++) {
    const cellElement = document.createElement("div");
    cellElement.classList.add("cell");
    if (gridWorld.cells[position][i].getStatus()) {
      cellElement.classList.add("alive");
    }

    gridContainer.appendChild(cellElement);
  }
}
