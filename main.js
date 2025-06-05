"use strict";

const createGrid = function (size) {
  for (let x = 0; x < size ** 2; x++) {
    const newDiv = document.createElement("div");
    newDiv.className = "cell";
    newDiv.style.flex = `0 0 ${100 / size}%`;
    gridContainer.appendChild(newDiv);
    changeCellOnHover(newDiv);
  }
};

const deleteGrid = function () {
  const children = Array.from(gridContainer.children);
  for (const child of children) {
    gridContainer.removeChild(child);
  }
};

const changeCellOnHover = function (elem) {
  elem.addEventListener("mouseover", () => {
    randomizeCellColor(elem);
  });
};

const randomizeCellColor = function (elem) {
  const rgb1 = Math.floor(Math.random() * 256);
  const rgb2 = Math.floor(Math.random() * 256);
  const rgb3 = Math.floor(Math.random() * 256);

  elem.style.backgroundColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;

  let opacity = elem.style.opacity === "" ? 0 : Number(elem.style.opacity);
  if (opacity < 1) {
    elem.style.opacity = String(opacity + 0.1);
  }
};

// Set up initial references and default grid
const gridContainer = document.querySelector(".grid-container");
const changeGridBtn = document.querySelector(".grid-btn");

changeGridBtn.addEventListener("click", () => {
  const size = Number(prompt("Grid Size: Example 16 = 16x16", "16"));
  if (typeof size === "number" && size <= 100 && size > 0) {
    deleteGrid();
    createGrid(size);
  } else {
    alert("Error must be a number up to 100 or less");
  }
});

// Initialize default grid on page load
createGrid(16);
