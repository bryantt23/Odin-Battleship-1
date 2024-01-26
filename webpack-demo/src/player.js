export class Player {
  constructor(name, gameboard) {
    this.name = name;
    this.gameboard = gameboard;
  }

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
