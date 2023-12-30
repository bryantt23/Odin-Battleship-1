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
    if (
      row < 0 ||
      row >= this.gridSize ||
      column < 0 ||
      column >= this.grisSize
    ) {
      return false; //invalid attack coordinates
    }
    const target = this.grid[row][column];

    // Check if the target has already been attacked
    if (target === "X" || target === "O") {
      return false; // Already attacked this spot
    }
    // Mark the target as attacked
    if (target === null) {
      this.grid[row][column] = miss; //'O'
    } else {
      this.grid[row][column] = hit; //'X'

      isShipSunk = (row, column) => {
        const target = this.grid[row][column];

        // Check if the target is a ship and if it's already sunk
        if (target !== null && target !== "X") {
          // Check if all cells occupied by the ship have been hit
          for (let row = 0; row < this.gridSize; row++) {
            for (let column = 0; column < this.gridSize; column++) {
              if (this.grid[row][column] === target) {
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
        for (let row = 0; row < this.gridSize; row++) {
          for (let column = 0; column < this.gridSize; column++) {
            if (!this.isShipSunk(row, column)) {
              return false; // At least one ship is not sunk yet
            }
          }
        }
        return true; // All ships are sunk
      };
    }
  };
}

export default Gameboard;
