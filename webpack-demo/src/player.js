class Player {
  constructor(name, gameboard) {
    this.name = name;
    this.gameboard = gameboard;
  }
  attack(row, column) {
    //Check if the move is legal(not attacked yet)
    if (this.gameboard.receiveAttack(row, column, "X", "O")) {
      console.log(`${this.name} attacks (${row}, ${column})`);
      return true; //valid attack
    } else {
      console.log(`${this.name} already attacked (${row}, ${column})`);
      return false; //Invalid attack
    }
  }
}

export default Player;
