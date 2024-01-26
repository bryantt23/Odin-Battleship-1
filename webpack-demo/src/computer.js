import { Player } from "./player";
import { Ship } from "./ship";

export class ComputerPlayer extends Player {
  constructor(gameboard) {
    super("Computer");
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
  // Method to randomly place the computer's ships on the board
  randomizeShips() {
    const shipLengths = [2, 3, 3, 4, 5];
    for (const length of shipLengths) {
      let ship = new Ship(length)
      let coordinates;
      let isVertical;
      let isValidPlacement = false;

      // Keep trying until a valid ship placement is found
      while (!isValidPlacement) {
        coordinates = this.getRandomCoordinates();
        isVertical = Math.random() < 0.5; // Randomly choose vertical or horizontal placement
        // Attempt to place the ship
        isValidPlacement = this.gameboard.placeShip(
          ship,
          coordinates.row,
          coordinates.column,
          isVertical
        );

        // Debugging: Print ship placement details
        if (isValidPlacement) {
          console.log(
            `Placed ship of length ${length} at (${coordinates.row}, ${coordinates.column}), Vertical: ${isVertical}`
          );
          console.log(this)
        } else {
          console.log(
            `Failed to place ship of length ${length} at (${coordinates.row}, ${coordinates.column}), Vertical: ${isVertical}`
          );
        }
      }
    }
  }
  computerAttack() {
    //will these coordinates work? isn't this to place ships? 
    //maybe you should create 2 random coordinates, one to place, one to attack ships
    const coordinates = this.getRandomCoordinates();
    if (coordinates) {
      const { row, column } = coordinates;
      //why is this aka the computer gameboard receiving the attack? 
      //see my comment about having a receive and send attack boards like in the real board game
      if (this.gameboard.receiveAttack(row, column)) {
        console.log(`Computer attacks (${row}, ${column})`);
        this.usedCoordinates.add(`${row},${column}`);
      }
    } else {
      console.log(`Computer has no valid moves.`);
    }
  }
}
