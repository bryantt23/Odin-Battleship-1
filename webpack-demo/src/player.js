export class Player {
  constructor(name, gameboard) {
    this.name = name;
    this.gameboard = gameboard;
    this.usedCoordinates = new Set();
  }
  getRandomCoordinates() {
    const availableCoordinates = [];
    for (let row = 0; row < this.gameboard.gridSize; row++) {
      for (let column = 0; column < this.gameboard.gridSize; column++) {
        const coordinate = `${row},${column}`;
        if (!this.usedCoordinates.has(coordinate)) {
          availableCoordinates.push({ row, column });
        }
      }
    }
    if (availableCoordinates.length === 0) {
      return null; //All coordinates have been used
    }
    const randomIndex = Math.floor(Math.random() * availableCoordinates.length);
    return availableCoordinates[randomIndex];
  }
  // randomizePlayerShips() {
  //   const shipLengths = [2, 3, 3, 4, 5];

  //   for (const length of shipLengths) {
  //     let coordinates;
  //     let isVertical;
  //     let isValidPlacement = false; // Keep trying until a valid ship placement is found

  //     while (!isValidPlacement) {
  //       coordinates = this.getRandomCoordinates();
  //       isVertical = Math.random() < 0.5; // Randomly choose vertical or horizontal placement // Try to place the ship and log placement details

  //       isValidPlacement = this.player1Gameboard.placeShip(
  //         new Ship(length),
  //         coordinates.row,
  //         coordinates.column,
  //         isVertical
  //       );

  //       if (isValidPlacement) {
  //         console.log(
  //           `Player 1 placed a ship of length ${length} at (${
  //             coordinates.row
  //           }, ${coordinates.column}), orientation: ${
  //             isVertical ? "vertical" : "horizontal"
  //           }`
  //         );
  //       } else {
  //         console.log(
  //           `Player 1 failed to place a ship of length ${length} at (${
  //             coordinates.row
  //           }, ${coordinates.column}), orientation: ${
  //             isVertical ? "vertical" : "horizontal"
  //           }`
  //         );
  //       }
  //     }
  //   }
  // }

  attack(row, column) {
    // Check if the move is legal (not already attacked)
    if (this.gameboard.receiveAttack(row, column)) {
      console.log(`${this.name} attacks (${row}, ${column})`);
      return true; // Valid attack
    } else {
      console.log(`${this.name} already attacked (${row}, ${column})`);
      return false; // Invalid attack
    }
  }
}
