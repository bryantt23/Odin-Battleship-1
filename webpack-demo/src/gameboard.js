class Gameboard {
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

  receiveAttack = (row, column, hit, miss) => {
    //check for valid coordinates
    if (row < 0 || row >= this.gridSize || column < 0 || column >= this.grisSize) {
      return false; //invalid attack coordinates
    }
    const target = this.grid[row][column];

  // Check if the target has already been attacked
  if (target === 'X' || target === 'O') {
    return false; // Already attacked this spot
  }
  // Mark the target as attacked
  if (target === null) {
    this.grid[row][column] = miss; //'O'
  } else {
    this.grid[row][column] = hit;//'X'
    // Check if the ship is sunk
    if (this.isShipSunk(target)) {
      console.log("Ship is sunk")
      //Show something that indicates the ship is sunk
    }
  }
    // Check if all ships are sunk
    if (this.areAllShipsSunk()) {
      console.log("Game Over")
      //Show something that indicates the game is over
    }
  
    return true; // Valid attack
  };
}

export default Gameboard;

//make hit/miss spot unclickable