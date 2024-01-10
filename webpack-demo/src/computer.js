export class ComputerPlayer {
    constructor(gameboard) {
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
    computerAttack() {
      const coordinates = this.getRandomCoordinates();
      if (coordinates) {
        const { row, column } = coordinates;
        if (this.gameboard.receiveAttack(row, column, "X", "O")) {
          console.log(`Computer attacks (${row}, ${column})`);
          this.usedCoordinates.add(`${row},${column}`);
        }
      } else {
        console.log(`Computer has no valid moves.`);
      }
    }
  }