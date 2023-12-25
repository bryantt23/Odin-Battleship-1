//recieveAttack function, missedAttacks. Gameboard is 2d array
// look up how to rotate ship
//check board for ship placement, if fits return true and place ship, if not return false
import  Ship  from "../src/ship";
import Gameboard from "../src/gameboard";

test("grid is working", () => {
  const board = new Gameboard();
  //console.log(board);
});

test("place ship of length one", () => {
  const board = new Gameboard();
  const ship1 = new Ship(1);
  board.placeShip(ship1, 0, 0)

  console.log(board.grid [0][0]);
  expect(board.grid [0][1]).toBeNull();
  expect(board.grid [0][0]).toBeInstanceOf(Ship);
});
