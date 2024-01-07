import Game from "../src/game";
import Ship from "../src/ship";

test("checking constructor", () => {
    const game = new Game();
  });

  test("place player ship at 0,0", () => {
    const game = new Game();
    const ship1 = new Ship(1);
    game.player1Gameboard.placeShip(ship1, 0, 0);
    console.log(game.player1Gameboard.grid[0][1])
  expect(game.player1Gameboard.grid[0][1]).toBeNull();
  expect(game.player1Gameboard.grid[0][0]).toBeInstanceOf(Ship);
  });

