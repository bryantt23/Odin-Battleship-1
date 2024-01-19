import { Gameboard } from "./gameboard";
import { Game } from "./game";

document.addEventListener("DOMContentLoaded", () => {
    const userGrid = document.querySelector(".battleship-grid-user");
    const computerGrid = document.querySelector(".battleship-grid-computer");
    
    const userGameboard = new Gameboard(10);
    const computerGameboard = new Gameboard(10);

    function renderGrid(userGameboard, computerGameboard) {
        userGameboard.innerHTML = ''; // Clear the target element
        computerGameboard.innerHTML = ''; // Clear the target element

        // Loop through the grid and create elements for each cell
        for (let row = 0; row < this.gridSize; row++) {
          for (let col = 0; col < this.gridSize; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            //Append the cell element to the target element
            battleship-grid-user.appendChild(cell);
      }
    }
  }
    renderGrid(userGameboard, userGrid);
    renderGrid(computerGameboard, computerGrid);
    console.log("hi");
  });

document.addEventListener("DOMContentLoaded", () => {
  const displayGrid = document.querySelector(".grid-display");
  const ships = document.querySelectorAll(".ship");
  const destroyer = document.querySelector(".destroyer-container");
  const submarine = document.querySelector(".submarine-container");
  const cruiser = document.querySelector(".cruiser-container");
  const battleship = document.querySelector(".battleship-container");
  const carrier = document.querySelector(".carrier-container");
  const startButton = document.querySelector("#start");
  const rotateButton = document.querySelector("#rotate");
  const turnDisplay = document.querySelector("#whose-go");
  const infoDisplay = document.querySelector("#info");
  const userSquares = [];
  const computerSquares = [];
});

