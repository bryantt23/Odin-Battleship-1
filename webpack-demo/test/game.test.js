import {Game} from '../src/game';
import {Ship} from '../src/ship';

test('place player ship at 0,0', () => {
  const game = new Game();
  const ship1 = new Ship(1);
  game.player1Gameboard.placeShip(ship1, 0, 0);
  expect(game.player1Gameboard.grid[0][1]).toBeNull();
  expect(game.player1Gameboard.grid[0][0]).toBeInstanceOf(Ship);
});

test('place player2 ship at 0,0', () => {
  const game = new Game();
  const ship1 = new Ship(1);
  game.player2Gameboard.placeShip(ship1, 0, 0);
  expect(game.player2Gameboard.grid[0][1]).toBeNull();
  expect(game.player2Gameboard.grid[0][0]).toBeInstanceOf(Ship);
});

test('place player and player2(computer) ship at 0,0', () => {
  const game = new Game();
  const ship = new Ship(1);
  const ship1 = new Ship(1);
  game.player1Gameboard.placeShip(ship, 0, 0);
  game.player2Gameboard.placeShip(ship1, 0, 0);
  expect(game.player1Gameboard.grid[0][1]).toBeNull();
  expect(game.player1Gameboard.grid[0][0]).toBeInstanceOf(Ship);
  expect(game.player2Gameboard.grid[0][1]).toBeNull();
  expect(game.player2Gameboard.grid[0][0]).toBeInstanceOf(Ship);
});

test('Player wins by hitting position (0,0)', () => {
    const game = new Game();
    const ship = new Ship(1);
    game.player1Gameboard.placeShip(ship, 0, 0);
    game.player2Gameboard.placeShip(ship, 0, 0);
    game.playRound(0, 0);
    expect(game.player2Gameboard.grid[0][0]).toBe('X');
    expect(game.gameOver).toBe(true);
    expect(game.winner.name).toBe('Player 1');
  });
  
  test('Player does not win by missing position (0,0)', () => {
    const game = new Game();
    const ship = new Ship(1);
    game.player1Gameboard.placeShip(ship, 0, 0);
    game.player2Gameboard.placeShip(ship, 0, 0);
    game.playRound(0, 1);
    expect(game.player2Gameboard.grid[0][0]).toBeInstanceOf(Ship);
    expect(game.player2Gameboard.grid[0][1]).toBe('O');
    expect(game.gameOver).toBe(false);
    expect(game.winner).toBe(null);
  });
  
  test('Player does not win by hitting position (0,0), but not sinking entire ship', () => {
    const game = new Game();
    const ship = new Ship(3);
    game.player1Gameboard.placeShip(ship, 0, 0);
    game.player2Gameboard.placeShip(ship, 0, 0);
    game.playRound(0, 1);
    expect(game.player2Gameboard.grid[0][0]).toBeInstanceOf(Ship);
    expect(game.player2Gameboard.grid[0][1]).toBe('X');
    expect(game.gameOver).toBe(false);
    expect(game.winner).toBe(null);
  });

  test('Player does not win by missing position (0,0), then computer wins', () => {
    const game = new Game();
    const shipPlayer = new Ship(1);
    const shipComputer = new Ship(1);
  
    // Place a ship for each player
    game.player1Gameboard.placeShip(shipPlayer, 0, 0);
    game.player2Gameboard.placeShip(shipComputer, 0, 0);
  
    // Player attacks and misses
    game.handleAttack(0, 1); // Player attacks position (0,1) and misses
  
    // Mock computer's attack to always hit (0,0)
    jest.spyOn(game.player2, 'computerAttack').mockImplementation(() => {
      game.player1Gameboard.receiveAttack(0, 0);
      game.checkGameOver();
    });
  
    // Execute the mocked computer's attack
    game.player2.computerAttack();
  
    // Check the game state
    expect(game.player1Gameboard.grid[0][0]).toBe('X'); // Player's ship at (0,0) is hit
    expect(game.gameOver).toBe(true); // Game should be over
    expect(game.winner.name).toBe('Computer'); // Winner should be the computer
  });

/* 
  --Version 1
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
