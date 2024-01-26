import { Gameboard } from "./gameboard";
import { Player } from "./player";
import { ComputerPlayer } from "./computer";
import { Ship } from "./ship";

export class Game {
  // why do you playergameboard? each player already has a gameboard
  //shouldn't a player have a receive attack & send attack board. 
  //receive attack where they place their ships & the attacks they receive
  //send attack are spots they have attacked that are hit or miss or empty
  // you should keep your tests running and see if you can delete the game board
  constructor() {
    this.player1Gameboard = new Gameboard();
    this.player2Gameboard = new Gameboard();
    this.player1 = new Player("Player 1", this.player2Gameboard);
    this.player2 = new ComputerPlayer(this.player1Gameboard);
    this.player2.randomizeShips();
    this.currentPlayer = this.player1;
    this.gameOver = false;
    this.winner = null;

    this.initializeGame();
  }
  initializeGame() {
    //const startBtn = document.getElementById("start");
    //startBtn.addEventListener("click", () => {
    this.player2.randomizeShips();
    //const game = new Game();
    //game.initializeGame();
    //});
  }
  checkGameOver() {
    // Check for game over condition
    if (
      this.player1Gameboard.areAllShipsSunk() ||
      this.player2Gameboard.areAllShipsSunk()
    ) {
      this.gameOver = true;
      this.winner = this.currentPlayer;
      const turnDisplay = document.getElementById("whose-go");
      turnDisplay.innerHTML =
        "Game over!" + this.winner.name + " is the winner!";
      return true;
    }
    return false;
  }
  handleAttack(row, column) {
    console.log("CURRENT PLAYER", this.currentPlayer);
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
      const turnDisplay = document.getElementById("whose-go");
      turnDisplay.innerHTML = "Computers Go";
      this.handleAttack(); // Computer player makes a random attack
    } else {
      const turnDisplay = document.getElementById("whose-go");
      turnDisplay.innerHTML = "Your Go";
      this.handleAttack(row, column); // Directly call the player's attack
    }
  }
}
