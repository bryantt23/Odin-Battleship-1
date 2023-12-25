class Gameboard {
  constructor() {
    this.gridSize = 10;
    this.grid = Array(this.gridSize)
      .fill(null)
      .map(() => Array(this.gridSize).fill(null));
  }
  //handle orientation, check that it's on the board, no overlapping
  //return true if you placed the ship successfully and false if you didn't
  //
  placeShip = (ship, row, column) => {
    this.grid[row][column] = ship;
  };
  receiveAttack = () => {

  };
}

export default Gameboard
