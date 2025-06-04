"use strict";

const createGrid = function (gridX, gridY) {
  for (let y = 0; y < gridY; y++) {
    for (let x = 0; x < gridX; x++) {
      const newDiv = document.createElement("div");
      const newContent = document.createTextNode(x);
      newDiv.className = "cell";
      newDiv.appendChild(newContent);
      gridContainer.appendChild(newDiv);
    }
  }
};

const gridContainer = document.querySelector(".grid-container");

createGrid(16, 16);
