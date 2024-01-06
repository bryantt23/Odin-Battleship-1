class Game {
  constructor() {
    this.player1Gameboard = new Gameboard();
    this.player2Gameboard = new Gameboard();
    this.player1 = new Player("Player 1", this.player2Gameboard);
    this.player2 = new ComputerPlayer(this.player1Gameboard);

    this.currentPlayer = this.player1;
    this.gameOver = false;

    this.initializeGame();
    this.setupEventListeners();
    this.gameLoop();
  }
  initializeGame() {}
  setupEventListeners() {}
  handlePlayerAttack(event) {}
  switchPlayer() {}
  gameLoop() {}
}
