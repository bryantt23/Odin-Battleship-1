import {Game} from "../src/game";
import {Ship} from "../src/ship";


test("checking constructor", () => {
  const game = new Game();
});

test("place player ship at 0,0", () => {
  const game = new Game();
  const ship1 = new Ship(1);
  game.player1Gameboard.placeShip(ship1, 0, 0);
  //console.log(game.player1Gameboard.grid[0][1]);
  expect(game.player1Gameboard.grid[0][1]).toBeNull();
  expect(game.player1Gameboard.grid[0][0]).toBeInstanceOf(Ship);
});

test("place player2 ship at 0,0", () => {
  const game = new Game();
  const ship1 = new Ship(1);
  game.player2Gameboard.placeShip(ship1, 0, 0);
  //console.log(game.player2Gameboard.grid[0][1]);
  expect(game.player2Gameboard.grid[0][1]).toBeNull();
  expect(game.player2Gameboard.grid[0][0]).toBeInstanceOf(Ship);
});

test("place player and player2(computer) ship at 0,0", () => {
  const game = new Game();
  const ship = new Ship(1);
  const ship1 = new Ship(1);
  game.player1Gameboard.placeShip(ship, 0, 0);
  game.player2Gameboard.placeShip(ship1, 0, 0);
  //console.log(game.player2Gameboard.grid[0][1]);
  //console.log(game.player1Gameboard.grid[0][1]);
  expect(game.player1Gameboard.grid[0][1]).toBeNull();
  expect(game.player1Gameboard.grid[0][0]).toBeInstanceOf(Ship);
  expect(game.player2Gameboard.grid[0][1]).toBeNull();
  expect(game.player2Gameboard.grid[0][0]).toBeInstanceOf(Ship);
});

test("Player wins by hitting position (0,0)", () => {
const game = new Game();
const ship = new Ship(1);
game.player2Gameboard.placeShip(ship, 0, 0);
game.playRound(0, 0);
//console.log(game.player2Gameboard);
expect(game.player2Gameboard.grid[0][0]).toBe('X');
expect(game.gameOver).toBe(true);
//expect(game.winner).toBe("player1");
});

/* 
  --Version 1
  -test player attacks 0,0 and shows hit and shows game over and player is winner
  -test player attack 5,5 and shows miss and check for 'O' and turn change and game is not over and show computer turn
  -test player missed and computer attacks 0,0 and shows hit and shows game over and computer is winner
  -test player attacks 5,5 and computer attacks 5,5 and shows miss and check for 'O' and change turn to player and game is not over

  ---version 2 use 2 ships with lengths of 2 and 3, one vertical, one horizontal, one touching the edge and one in the middle

  ---version 3 test random placement horizontal and vertical

  ---version 3.5 get game.js running from browser, console.log(game) should show object with board, turn, etc

  ---version 4 show grid on UI

  ---version 4.5 show grids to cheat, player and computer gameboard with ships (or console.log)

  ---version 4.7 hard coded player ships player can click to attack

  ---version 5 player drag drop on board
  */
