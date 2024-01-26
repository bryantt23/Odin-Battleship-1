import { HelloWorld } from "./helloWorld";
import { Game } from "./game";
import { check } from "./DOM";
import "./styles.css";

//const ships = document.querySelectorAll(".ship");
//const displayGrid = document.querySelector('.grid-display');
const userGrid = document.querySelector(".battleship-user");
const computerGrid = document.querySelector(".battleship-computer");
const rotateBtn = document.getElementById("rotate");
const destroyer = document.querySelector(".destroyer-container");
const submarine = document.querySelector(".submarine-container");
const cruiser = document.querySelector(".cruiser-container");
const battleship = document.querySelector(".battleship-container");
const carrier = document.querySelector(".carrier-container");
//const userSquare = [];
let isHorizontal = true;


start();
function start() {
  const object = new HelloWorld();
  object.hi();

  const game = new Game();
  game.initializeGame();
  console.log(game);

  check(game.player1Gameboard);
}

// function handleAttack(row, column) {
//   if (!this.gameOver) {
//     if (this.currentPlayer === this.player1) {
//       const isValidAttack = this.player1.attack(row, column);
//       if (isValidAttack) {
//         if (this.checkGameOver()) {
//           return;
//         }
//         // Switch to the other player
//         this.switchPlayer();
//       }
//     } else if (this.currentPlayer === this.player2) {
//       this.player2.computerAttack();
//       if (this.checkGameOver()) {
//         return;
//       }
//       // Switch to the other player
//       this.switchPlayer();
//     }
//     // Check for game over condition
//   }
// }

document.addEventListener("DOMContentLoaded", () => {
  const rows = 10;
  const columns = 10;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      // Create a grid item element
      const userSquare = document.createElement("div");
      userSquare.className = "square";
      const computerSquare = document.createElement("div");
      computerSquare.className = "square";

      // Assign row and column as custom attributes only to the computer squares
      computerSquare.dataset.row = i;
      computerSquare.dataset.column = j;

      // Add click event listener to computer squares only
      computerSquare.addEventListener("click", () => {
        const row = parseInt(computerSquare.dataset.row);
        const column = parseInt(computerSquare.dataset.column);
        // Call the attack function for the computer's grid
        handleAttack(row, column);
      });

      userGrid.appendChild(userSquare);
      computerGrid.appendChild(computerSquare);
    }
  }
});

//Rotate the ships
function rotate() {
  if (isHorizontal) {
    destroyer.classList.toggle("destroyer-container-vertical");
    submarine.classList.toggle("submarine-container-vertical");
    cruiser.classList.toggle("cruiser-container-vertical");
    battleship.classList.toggle("battleship-container-vertical");
    carrier.classList.toggle("carrier-container-vertical");
    isHorizontal = false;
    return;
  }
  if (!isHorizontal) {
    destroyer.classList.toggle("destroyer-container-vertical");
    submarine.classList.toggle("submarine-container-vertical");
    cruiser.classList.toggle("cruiser-container-vertical");
    battleship.classList.toggle("battleship-container-vertical");
    carrier.classList.toggle("carrier-container-vertical");
    isHorizontal = true;
    return;
  }
}
rotateBtn.addEventListener("click", rotate);


