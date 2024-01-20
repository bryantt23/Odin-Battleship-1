export function check(grid) {
    console.log(grid, typeof grid)
  const userGrid = document.querySelector(".battleship-grid-user");
  userGrid.textContent = JSON.stringify(grid, null, 4);
  grid.receiveAttack(0, 0)

  const computerGrid = document.querySelector(".battleship-grid-computer");
  computerGrid.textContent = JSON.stringify(grid, null, 4);
}
