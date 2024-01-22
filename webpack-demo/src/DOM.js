const userGrid = document.querySelector(".battleship-user");
const computerGrid = document.querySelector(".battleship-computer");

export function check(grid) {
  console.log(grid, typeof grid);
  userGrid.textContent = JSON.stringify(grid, null, 4);
  grid.receiveAttack(0, 0);

  computerGrid.textContent = JSON.stringify(grid, null, 4);
}

document.addEventListener("DOMContentLoaded", () => {
  const battleshipGridUser = document.querySelector("grid-user");
//   battleshipGridUser.innerHTML = "";
//   battleshipGridUser.style.gridTemplateColumns = `repeat(${block}, 1fr)`;
//   battleshipGridUser.style.gridTemplateRows = `repeat(${block1}, 1fr)`;

  const battleshipGridComputer = document.querySelector("grid-computer");
//   battleshipGridComputer.innerHTML = "";
//   battleshipGridComputer.style.gridTemplateColumns = `repeat(${block}, 1fr)`;
//   battleshipGridComputer.style.gridTemplateRows = `repeat(${block1}, 1fr)`;

  function createGrid() {
    let blocks = 100;

    for (let i = 0; i < blocks; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.style.width = "100%";
      square.style.height = "100%";
      square.style.borderColor = "white";
      square.style.border = "solid";

      battleshipGridUser.appendChild(square);
      battleshipGridComputer.appendChild(square);
    }
  }
  createGrid();
});
