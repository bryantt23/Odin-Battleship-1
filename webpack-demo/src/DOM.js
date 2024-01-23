import { Game } from "./game";

const userGrid = document.querySelector(".battleship-user");
const computerGrid = document.querySelector(".battleship-computer");

export function check(grid) {
  console.log(grid, typeof grid);
  userGrid.textContent = JSON.stringify(grid, null, 4);
  grid.receiveAttack(0, 0);

  computerGrid.textContent = JSON.stringify(grid, null, 4);
}

document.addEventListener("DOMContentLoaded", () => {
  const rows = 10;
  const columns = 10;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      // Create a grid item element
      const userSquare = document.createElement("div");
      userSquare.className = "square";
      const computerSquare = document.createElement("div");
      computerSquare.className = "square";

      userGrid.appendChild(userSquare);
      computerGrid.appendChild(computerSquare);
    }
  }
});
