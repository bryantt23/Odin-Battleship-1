export class Player {
  constructor(name, gameboard, isComputer = false) {
    this.name = name;
    this.gameboard = gameboard;
    this.isComputer = isComputer;
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
      return null; // All coordinates have been used
    }
    const randomIndex = Math.floor(Math.random() * availableCoordinates.length);
    return availableCoordinates[randomIndex];
  }

  attack(row, column) {
    if (this.isComputer) {
      const coordinates = this.getRandomCoordinates();
      if (coordinates) {
        row = coordinates.row;
        column = coordinates.column;
      } else {
        console.log(`${this.name} has no valid moves.`);
        return;
      }
    }

    if (this.gameboard.receiveAttack(row, column, "X", "O")) {
      console.log(`${this.name} attacks (${row}, ${column})`);
      this.usedCoordinates.add(`${row},${column}`);
    } else {
      console.log(`${this.name} already attacked (${row}, ${column})`);
    }
  }
}

export class ComputerPlayer extends Player {
  constructor(gameboard) {
    super("Computer", gameboard);
  }
}
