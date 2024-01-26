export class Gameboard {
  constructor() {
    this.gridSize = 10;
    this.grid = Array(this.gridSize)
      .fill(null)
      .map(() => Array(this.gridSize).fill(null));
  }
  placeShip = (ship, row, column, isVertical) => {
    // Check for valid coordinates and bounds
    if (
      row < 0 ||
      row >= this.gridSize ||
      column < 0 ||
      column >= this.gridSize
    ) {
      return false; // Invalid ship coordinates for placement
    }

    if (isVertical) {
      if (row + ship.length > this.gridSize) {
        return false; // Invalid ship placement out of bounds
      }

      for (let i = row; i < row + ship.length; i++) {
        if (this.grid[i][column] !== null) {
          return false; // Ship overlap
        }
      }

      for (let i = row; i < row + ship.length; i++) {
        this.grid[i][column] = ship;
        console.log(this)
      }
    } else {
      if (column + ship.length > this.gridSize) {
        return false; // Invalid ship placement out of bounds
      }

      for (let i = column; i < column + ship.length; i++) {
        if (this.grid[row][i] !== null) {
          return false; // Ship overlap
        }
      }

      for (let i = column; i < column + ship.length; i++) {
        console.log(this)
        this.grid[row][i] = ship;
      }
    }

    return true; // Ship placed successfully
  };

  rotateShip = (ship) => {
    // Check if the ship can be rotated without going out of bounds
    const canRotate =
      ship.orientation === "horizontal"
        ? ship.length + ship.row <= this.gridSize
        : ship.length + ship.column <= this.gridSize;

    if (canRotate) {
      // Remove the ship from its current position
      for (let i = 0; i < ship.length; i++) {
        if (ship.orientation === "horizontal") {
          this.grid[ship.row][ship.column + i] = null;
        } else {
          this.grid[ship.row + i][ship.column] = null;
        }
      } // Toggle the ship's orientation and re-place it

      ship.toggleOrientation();

      return this.placeShip(
        ship,
        ship.row,
        ship.column,
        ship.orientation === "vertical"
      );
    }

    return false; // Ship cannot be rotated
  };
  receiveAttack = (row, column, board) => {
    console.log("ROW COL", row, column)
    const hit = "X",
      miss = "O";
    // Check for valid coordinates
    if (
      row < 0 ||
      row >= this.gridSize ||
      column < 0 ||
      column >= this.gridSize
    ) {
      return false; // Invalid attack coordinates
    }

    // this is a temporary fix that doesn't work too well
    // you should probably use an attack & receive board to track stuff 
    // see other comments
    let target, boardName;
    if (board) {
      target = board[row][column]
      boardName = "computer"
    }
    else {
      target = this.grid[row][column];
      boardName = "player"
    }


    // Check if the target has already been attacked
    if (target === "X" || target === "O") {
      return false; // Already attacked this spot, prevent further actions
    }

    // Mark the target as attacked
    if (target === null) {
      console.log("THIS GRID", this, row, column)
      this.grid[row][column] = miss; //'O'
      const square = document.querySelector(`.${boardName}-${row}-${column}`);
      if (square) {
        square.classList.add("miss");
      }
    } else {
      this.grid[row][column] = hit; //'X'
      const square = document.querySelector(`.${boardName}-${row}-${column}`);
      if (square) {
        square.classList.add("hit");
      }
      // Check if the ship is sunk
      if (this.isShipSunk(row, column)) {
        // Handle the case when a ship is sunk (e.g., update some state or message)
      }
    }

    // Check if all ships are sunk
    if (this.areAllShipsSunk()) {
      // Handle the end of the game (e.g., display a message or trigger game over) 
    }

    return true; // Valid attack
  };

  isShipSunk = (row, column) => {
    const target = this.grid[row][column];

    //Check if the target is a ship and if it's already sunk
    if (target !== null && target !== "X") {
      // Check if all cells occupied by the ship have been hit
      for (let r = 0; r < this.gridSize; r++) {
        for (let c = 0; c < this.gridSize; c++) {
          if (this.grid[r][c] === target) {
            return false; // Ship is not sunk yet
          }
        }
      }
      return true; // Ship is sunk
    }

    return false; // Not a ship or already sunk
  };

  areAllShipsSunk = () => {
    // Check if all ships on the gameboard are sunk
    for (let r = 0; r < this.gridSize; r++) {
      for (let c = 0; c < this.gridSize; c++) {
        const cur = this.grid[r][c];
        if (cur !== null && cur !== "X" && cur !== "O") {
          return false; // At least one ship is not sunk yet
        }
      }
    }
    return true; // All ships are sunk
  };
}
