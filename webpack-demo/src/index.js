import { HelloWorld } from "./helloWorld";
import { Game } from "./game";
import { check } from "./DOM";
import "./styles.css";

const rotateBtn = document.getElementById("rotate");
const startBtn = document.getElementById("start");
const destroyer = document.querySelector('.destroyer-container')
const submarine = document.querySelector('.submarine-container')
const cruiser = document.querySelector('.cruiser-container')
const battleship = document.querySelector('.battleship-container')
const carrier = document.querySelector('.carrier-container')
const width = 10;
let isHorizontal = true;
const gridSize = 10;

start();
function start() {
  const object = new HelloWorld();
  object.hi();

  const game = new Game();
  game.initializeGame();
  console.log(game);

  check(game.player1Gameboard);
}

 //Ships
 const shipArray = [
    {
      name: 'destroyer',
      directions: [
        [0, 1],
        [0, width]
      ]
    },
    {
      name: 'submarine',
      directions: [
        [0, 1, 2],
        [0, width, width*2]
      ]
    },
    {
      name: 'cruiser',
      directions: [
        [0, 1, 2],
        [0, width, width*2]
      ]
    },
    {
      name: 'battleship',
      directions: [
        [0, 1, 2, 3],
        [0, width, width*2, width*3]
      ]
    },
    {
      name: 'carrier',
      directions: [
        [0, 1, 2, 3, 4],
        [0, width, width*2, width*3, width*4]
      ]
    },
  ]

// rotateBtn.addEventListener("click", () => {
//   function turnShip(ship) {
//     // Check if the ship can be rotated without going out of bounds
//     const canRotate =
//       ship.orientation === "horizontal"
//         ? ship.length + ship.row <= this.gridSize
//         : ship.length + ship.column <= this.gridSize;

//     if (canRotate) {
//       // Remove the ship from its current position
//       for (let i = 0; i < ship.length; i++) {
//         if (ship.orientation === "horizontal") {
//           this.grid[ship.row][ship.column + i] = null;
//         } else {
//           this.grid[ship.row + i][ship.column] = null;
//         }
//       } // Toggle the ship's orientation and re-place it

//       ship.toggleOrientation();

//       return this.placeShip(
//         ship,
//         ship.row,
//         ship.column,
//         ship.orientation === "vertical"
//       );
//     }

//     return false; // Ship cannot be rotated
//   }
//   turnShip(shipArray);
// });

 //Rotate the ships
 
 function rotate() {
    if (isHorizontal) {
      destroyer.classList.toggle('destroyer-container-vertical')
      submarine.classList.toggle('submarine-container-vertical')
      cruiser.classList.toggle('cruiser-container-vertical')
      battleship.classList.toggle('battleship-container-vertical')
      carrier.classList.toggle('carrier-container-vertical')
      isHorizontal = false
      // console.log(isHorizontal)
      return
    }
    if (!isHorizontal) {
      destroyer.classList.toggle('destroyer-container-vertical')
      submarine.classList.toggle('submarine-container-vertical')
      cruiser.classList.toggle('cruiser-container-vertical')
      battleship.classList.toggle('battleship-container-vertical')
      carrier.classList.toggle('carrier-container-vertical')
      isHorizontal = true
      // console.log(isHorizontal)
      return
    }
  }
  rotateBtn.addEventListener('click', rotate)

startBtn.addEventListener("click", () => {
  //place computer ships randomly and go through game
  const game = new Game();
});
