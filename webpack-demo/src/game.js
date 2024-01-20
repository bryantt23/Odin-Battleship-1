import { Gameboard } from "./gameboard";
import { Player } from "./player";
import { ComputerPlayer } from "./computer";
import { Ship } from "./ship";

export class Game {
  constructor() {
    this.player1Gameboard = new Gameboard();
    this.player2Gameboard = new Gameboard();
    this.player1 = new Player("Player 1", this.player2Gameboard);
    this.player2 = new ComputerPlayer(this.player1Gameboard);

    this.currentPlayer = this.player1;
    this.gameOver = false;
    this.winner = null;

    this.initializeGame();
  }
  initializeGame() {
    const ship1 = new Ship(1);
    const ship2 = new Ship(2);
    const ship3 = new Ship(3);
    const ship4 = new Ship(4);

    this.player1Gameboard.placeShip(ship1, 0, 0, true);
    this.player1Gameboard.placeShip(ship3, 5, 0, false);
    this.player2Gameboard.placeShip(ship2, 6, 6, true);
    this.player2Gameboard.placeShip(ship4, 2, 0, false);
  }
  checkGameOver() {
    // Check for game over condition
    if (
      this.player1Gameboard.areAllShipsSunk() ||
      this.player2Gameboard.areAllShipsSunk()
    ) {
      this.gameOver = true;
      this.winner = this.currentPlayer;
      console.log("Game over!");
      console.log(this.winner.name + " is the winner!");
      return true;
    }
    return false;
  }
  handleAttack(row, column) {
    if (!this.gameOver) {
      if (this.currentPlayer === this.player1) {
        const isValidAttack = this.player1.attack(row, column);
        if (isValidAttack) {
          if (this.checkGameOver()) {
            return;
          }
          // Switch to the other player
          this.switchPlayer();
        }
      } else if (this.currentPlayer === this.player2) {
        this.player2.computerAttack();
        if (this.checkGameOver()) {
          return;
        }
        // Switch to the other player
        this.switchPlayer();
      }
      // Check for game over condition
    }
  }
  switchPlayer() {
    this.currentPlayer =
      this.currentPlayer === this.player1 ? this.player2 : this.player1;
  }
  playRound(row, column) {
    // Check if it's the computer player's turn
    if (this.currentPlayer === this.player2) {
      this.handleAttack(); // Computer player makes a random attack
    } else {
      this.handleAttack(row, column); // Directly call the player's attack
    }
  }
}
