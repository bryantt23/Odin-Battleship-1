import { Gameboard } from "./gameboard";
import { Player } from "./player";
import { ComputerPlayer } from "./computer";

export class Game {
  constructor() {
    this.player1Gameboard = new Gameboard();
    this.player2Gameboard = new Gameboard();
    this.player1 = new Player("Player 1", this.player2Gameboard);
    this.player2 = new ComputerPlayer(this.player1Gameboard);

    this.currentPlayer = this.player1;
    this.gameOver = false;
    this.winner = "";

    //this.initializeGame();
    this.setupEventListeners();
  }
  setupEventListeners() {}
  handlePlayerAttack(row, column) {
    if (!this.gameOver) {
      if (this.currentPlayer === this.player1) {
        const isValidAttack = this.player1.attack(row, column);
        if (isValidAttack) {
          // Switch to the other player
         this.switchPlayer();
        }
      } else if (this.currentPlayer === this.player2) {
        this.player2.computerAttack();
        // Switch to the other player
        this.switchPlayer();
      }
      // Check for game over condition
      if (
        this.player1Gameboard.areAllShipsSunk() ||
        this.player2Gameboard.areAllShipsSunk()
      ) {
        this.gameOver = true;
        console.log("Game over!");
        console.log(this.currentPlayer.name + " is the winner!");
      }
    }
  }
  switchPlayer() {
    this.currentPlayer =
      this.currentPlayer === this.player1 ? this.player2 : this.player1;
  }
  initializeGame() {
    //TODO initialize computer ships and DOM stuff
    
  }
  playRound(row, column){
    
        // Check if it's the computer player's turn
        if (this.currentPlayer === this.player2) {
          this.player2.computerAttack(); // Computer player makes a random attack
        } else {
        console.log("hello")
          this.handlePlayerAttack(row, column); // Directly call the player's attack
        }
        // Check for game over conditions
        if (
          this.player1Gameboard.areAllShipsSunk() ||
          this.player2Gameboard.areAllShipsSunk()
        ) {
          this.gameOver = true;
          this.winner = this.currentPlayer;
          console.log("Game over!");
          console.log(this.currentPlayer.name + " is the winner!");
          return this.currentPlayer.name + " is the winner!";
        }
  
        // Switch to the other player for the next turn
        this.switchPlayer();

  }
}
