"use strict";

const createGrid = function (size) {
  for (let x = 0; x < size ** 2; x++) {
    const newDiv = document.createElement("div");
    //const newContent = document.createTextNode(x);
    newDiv.className = "cell";
    newDiv.style.flex = `0 0 ${100 / size}%`;
    //newDiv.appendChild(newContent);
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
    elem.classList.add("cell-hovered");
  });
};

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

//render initial grid
createGrid(16);
