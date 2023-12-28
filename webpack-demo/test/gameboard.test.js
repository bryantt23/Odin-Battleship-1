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
  console.log(board);
  console.log(board.grid [0][0]);
  expect(board.grid [0][1]).toBeNull();
  expect(board.grid [0][0]).toBeInstanceOf(Ship);
});

test('place ship of length two horizontally', () => {
    const board = new Gameboard();
    const ship2 = new Ship(2);

    const result = board.placeShip(ship2, 0, 0, false);

    expect(result).toBe(true);
    expect(board.grid[0][0]).toBeInstanceOf(Ship);
    expect(board.grid[0][1]).toBeInstanceOf(Ship);
    expect(board.grid [0][3]).toBeNull();
  });

  test('place ship of length three vertically', () => {
    const board = new Gameboard();
    const ship3 = new Ship(3);

    const result = board.placeShip(ship3, 0, 0, true);

    expect(result).toBe(true);
    expect(board.grid[0][0]).toBeInstanceOf(Ship);
    expect(board.grid[1][0]).toBeInstanceOf(Ship);
    expect(board.grid[2][0]).toBeInstanceOf(Ship);
    expect(board.grid [3][0]).toBeNull();
  });

  test('place ship horizontally with overlap', () => {
    const board = new Gameboard();
    const ship2 = new Ship(2);
    const ship3 = new Ship(3);

    board.placeShip(ship2, 0, 0);
    expect(board.placeShip(ship3, 0, 0)).toBe(false);
    expect(board.grid[0][0]).toBeInstanceOf(Ship);
    expect(board.grid[0][1]).toBeInstanceOf(Ship);
    expect(board.grid [0][3]).toBeNull();

    //console.log(board)
  });

  test('place ship vertically of length 3', () => {
    const board = new Gameboard();
    const ship3 = new Ship(3);

    board.placeShip(ship3, 3, 3,true);
    expect(board.grid[0][0]).toBeNull();
    expect(board.grid[3][3]).toBeInstanceOf(Ship);
    expect(board.grid[4][3]).toBeInstanceOf(Ship);
    expect(board.grid[5][3]).toBeInstanceOf(Ship);
    expect(board.grid[2][0]).toBeNull();

    //console.log(board)
  });

  test("Can't place ship vertically with length of 3 and overlap", () => {
    const board = new Gameboard();
    const ship2 = new Ship(2);
    const ship3 = new Ship(3);

    expect(board.placeShip(ship3, 9, 9, true)).toBe(false);
    expect(board.placeShip(ship2, 9, 9)).toBe(false);
    
    //console.log(board)
   });

   test("Multiple ships and multiple directions", () => {
    const board = new Gameboard();
    const ship2 = new Ship(2);
    const ship3 = new Ship(3);
    const ship4 = new Ship(4);

    expect(board.placeShip(ship3, 7, 9, true)).toBe(true);
    expect(board.placeShip(ship2, 0, 7)).toBe(true);
    expect(board.placeShip(ship4, 2, 5)).toBe(true);
    expect(board.grid[0][0]).toBeNull();
    expect(board.grid[3][3]).toBeNull();
    expect(board.grid[2][8]).toBeInstanceOf(Ship);
    expect(board.grid[0][8]).toBeInstanceOf(Ship);
    expect(board.grid[2][0]).toBeNull();
    
    console.log(board)
   });