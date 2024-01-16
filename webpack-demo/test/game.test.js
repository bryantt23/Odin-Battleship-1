import { Game } from "../src/game";
import { Ship } from "../src/ship";

test("place player ship at 0,0", () => {
  const game = new Game();
  const ship1 = new Ship(1);
  game.player1Gameboard.placeShip(ship1, 0, 0);
  expect(game.player1Gameboard.grid[0][1]).toBeNull();
  expect(game.player1Gameboard.grid[0][0]).toBeInstanceOf(Ship);
});

test("place player2 ship at 0,0", () => {
  const game = new Game();
  const ship1 = new Ship(1);
  game.player2Gameboard.placeShip(ship1, 0, 0);
  expect(game.player2Gameboard.grid[0][1]).toBeNull();
  expect(game.player2Gameboard.grid[0][0]).toBeInstanceOf(Ship);
});

test("place player and player2(computer) ship at 0,0", () => {
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

test("Player wins by hitting position (0,0)", () => {
  const game = new Game();
  const ship = new Ship(1);
  game.player1Gameboard.placeShip(ship, 0, 0);
  game.player2Gameboard.placeShip(ship, 0, 0);
  game.playRound(0, 0);
  expect(game.player2Gameboard.grid[0][0]).toBe("X");
  expect(game.gameOver).toBe(true);
  expect(game.winner.name).toBe("Player 1");
});

test("Player does not win by missing position (0,0)", () => {
  const game = new Game();
  const ship = new Ship(1);
  game.player1Gameboard.placeShip(ship, 0, 0);
  game.player2Gameboard.placeShip(ship, 0, 0);
  game.playRound(0, 1);
  expect(game.player2Gameboard.grid[0][0]).toBeInstanceOf(Ship);
  expect(game.player2Gameboard.grid[0][1]).toBe("O");
  expect(game.gameOver).toBe(false);
  expect(game.winner).toBe(null);
});

test("Player does not win by hitting position (0,0), but not sinking entire ship", () => {
  const game = new Game();
  const ship = new Ship(3);
  game.player1Gameboard.placeShip(ship, 0, 0);
  game.player2Gameboard.placeShip(ship, 0, 0);
  game.playRound(0, 1);
  expect(game.player2Gameboard.grid[0][0]).toBeInstanceOf(Ship);
  expect(game.player2Gameboard.grid[0][1]).toBe("X");
  expect(game.gameOver).toBe(false);
  expect(game.winner).toBe(null);
});

test("Player does not win by missing position (0,0), then computer wins", () => {
  const game = new Game();
  const shipPlayer = new Ship(1);
  const shipComputer = new Ship(1);

  // Place a ship for each player
  game.player1Gameboard.placeShip(shipPlayer, 0, 0);
  game.player2Gameboard.placeShip(shipComputer, 0, 0);

  // Player attacks and misses
  game.handleAttack(0, 1); // Player attacks position (0,1) and misses

  // Mock computer's attack to always hit (0,0)
  jest.spyOn(game.player2, "computerAttack").mockImplementation(() => {
    game.player1Gameboard.receiveAttack(0, 0);
    game.checkGameOver();
  });

  // Execute the mocked computer's attack
  game.player2.computerAttack();

  // Check the game state
  expect(game.player1Gameboard.grid[0][0]).toBe("X"); // Player's ship at (0,0) is hit
  expect(game.gameOver).toBe(true); // Game should be over
  expect(game.winner.name).toBe("Computer"); // Winner should be the computer
});

test("Player attacks (5,5) and misses and Computer attacks (0,0) and misses, game is not over", () => {
  const game = new Game();
  const shipPlayer = new Ship(1);
  const shipComputer = new Ship(1);

  game.player1Gameboard.placeShip(shipPlayer, 5, 5);
  game.player2Gameboard.placeShip(shipComputer, 0, 0);

  game.handleAttack(5, 5);

  // Mock computer's attack to always hit (0,0)
  jest.spyOn(game.player2, "computerAttack").mockImplementation(() => {
    game.player1Gameboard.receiveAttack(0, 0);
    game.checkGameOver();
  });

  // Execute the mocked computer's attack
  game.player2.computerAttack();

  expect(game.player1Gameboard.grid[0][0]).toBe("O");
  expect(game.player2Gameboard.grid[5][5]).toBe("O");
  expect(game.gameOver).toBe(false);
  expect(game.winner).toBe(null);
});

test("Player attacks (5,5) and misses and Computer attacks (5,5) and misses, game is not over", () => {
  const game = new Game();
  const shipPlayer = new Ship(1);
  const shipComputer = new Ship(1);

  game.player1Gameboard.placeShip(shipPlayer, 0, 2);
  game.player2Gameboard.placeShip(shipComputer, 0, 0);

  game.handleAttack(5, 5);

  game.player1Gameboard.receiveAttack(5, 5);
  game.checkGameOver();

  // Execute the mocked computer's attack
  game.player2.computerAttack();

  expect(game.player1Gameboard.grid[5][5]).toBe("O");
  expect(game.player2Gameboard.grid[5][5]).toBe("O");
  expect(game.gameOver).toBe(false);
  expect(game.winner).toBe(null);
});

test("place 2 player ships and 2 Computer ships, one horiontal and one vertical, one on the edge and one in the middle", () => {
  const game = new Game();
  const playerShip1 = new Ship(2);
  const playerShip2 = new Ship(3);
  const computerShip1 = new Ship(2);
  const computerShip2 = new Ship(3);

  //horizontal ships in middle
  game.player1Gameboard.placeShip(playerShip2, 0, 4, false);
  game.player2Gameboard.placeShip(computerShip2, 0, 4, false);
  //vertical ships on edge
  game.player1Gameboard.placeShip(playerShip1, 0, 0, true);
  game.player2Gameboard.placeShip(computerShip1, 0, 0, true);

  expect(game.player1Gameboard.grid[0][4]).toBeInstanceOf(Ship);
  expect(game.player1Gameboard.grid[0][0]).toBeInstanceOf(Ship);
  expect(game.player2Gameboard.grid[0][4]).toBeInstanceOf(Ship);
  expect(game.player2Gameboard.grid[0][0]).toBeInstanceOf(Ship);
});

test("Player wins by hitting all Computer's ships with different orientations", () => {
  const game = new Game();
  const playerShip1 = new Ship(3);
  const playerShip2 = new Ship(4);
  const computerShip1 = new Ship(2);
  const computerShip2 = new Ship(3);

  game.player1Gameboard.placeShip(playerShip1, 0, 0, true);
  game.player1Gameboard.placeShip(playerShip2, 2, 2, false);
  game.player2Gameboard.placeShip(computerShip1, 4, 4, true);
  game.player2Gameboard.placeShip(computerShip2, 6, 6, false);

  // Player's first attack and Computer's response
  game.handleAttack(4, 4); // Player attacks
  overrideComputerAttack(game, 0, 0); // Set up computer's mock attack for (0, 0)
  game.handleAttack(); // Computer's turn

  // Player's second attack and Computer's response
  game.handleAttack(5, 4); // Player attacks
  overrideComputerAttack(game, 3, 2); // Set up computer's mock attack for (3, 2)
  game.handleAttack(); // Computer's turn

  // Continue the pattern with the specified coordinates...
  game.handleAttack(6, 6); // Player attacks
  overrideComputerAttack(game, 4, 5); // Set up computer's mock attack for (4, 5)
  game.handleAttack(); // Computer's turn

  game.handleAttack(6, 7); // Player attacks
  overrideComputerAttack(game, 5, 5); // Set up computer's mock attack for (5, 5)
  game.handleAttack(); // Computer's turn

  game.handleAttack(6, 8); // Player attacks

  // Assertions
  expect(game.player1Gameboard.areAllShipsSunk()).toBe(false);
  expect(game.player2Gameboard.areAllShipsSunk()).toBe(true);
  expect(game.gameOver).toBe(true);
  expect(game.winner.name).toBe("Player 1");
});

function overrideComputerAttack(game, row, column) {
  jest.spyOn(game.player2, "computerAttack").mockImplementation(() => {
    game.player1Gameboard.receiveAttack(row, column);
    game.checkGameOver();
  });
}

test("Computer wins by hitting all Player's ships with different orientations", () => {
  const game = new Game();
  const playerShip1 = new Ship(1);
  const playerShip2 = new Ship(1);
  const computerShip1 = new Ship(1);
  const computerShip2 = new Ship(1);
  game.player1Gameboard.placeShip(playerShip1, 0, 0, true);
  game.player1Gameboard.placeShip(playerShip2, 2, 2, false);
  game.player2Gameboard.placeShip(computerShip1, 4, 4, true);
  game.player2Gameboard.placeShip(computerShip2, 6, 6, false);

  // Player's turn
  game.handleAttack(7, 4);

  // Computer's turn with mock attack
  overrideComputerAttack(game, 0, 0);
  game.handleAttack(); // This will use the mocked computer attack

  // Player's turn
  game.handleAttack(2, 2);

  // Computer's turn with mock attack
  overrideComputerAttack(game, 2, 2);
  game.handleAttack(); // This will use the mocked computer attack

  // Log statements for debugging
  console.log(
    "Player 2 (Computer) Gameboard Grid:",
    game.player2Gameboard.grid
  );
  console.log("Player 1 Gameboard Grid:", game.player1Gameboard.grid);

  // Assertions
  expect(game.player1Gameboard.areAllShipsSunk()).toBe(true);
  expect(game.player2Gameboard.areAllShipsSunk()).toBe(false);
  expect(game.gameOver).toBe(true);
  expect(game.winner.name).toBe("Computer");
});

test("Player wins by hitting all Computer's ships with different orientations and longer lengths", () => {
  const game = new Game();
  const playerShip1 = new Ship(3);
  const playerShip2 = new Ship(4);
  const playerShip3 = new Ship(5);
  const computerShip1 = new Ship(3);
  const computerShip2 = new Ship(4);
  const computerShip3 = new Ship(5);

  game.player1Gameboard.placeShip(playerShip1, 0, 0, true);
  game.player1Gameboard.placeShip(playerShip2, 2, 2, false);
  game.player1Gameboard.placeShip(playerShip3, 5, 0, true);
  game.player2Gameboard.placeShip(computerShip1, 0, 0, true);
  game.player2Gameboard.placeShip(computerShip2, 2, 2, false);
  game.player2Gameboard.placeShip(computerShip3, 5, 0, true);

  // Player's first attack and Computer's response
  game.handleAttack(5, 0); // Player attacks
  overrideComputerAttack(game, 0, 0); // Set up computer's mock attack for (0, 0)
  game.handleAttack(); // Computer's turn

  // Player's second attack and Computer's response
  game.handleAttack(6, 0); // Player attacks
  overrideComputerAttack(game, 1, 0); // Set up computer's mock attack for (3, 2)
  game.handleAttack(); // Computer's turn

  game.handleAttack(7, 0); // Player attacks
  overrideComputerAttack(game, 2, 0); // Set up computer's mock attack for (4, 5)
  game.handleAttack(); // Computer's turn

  game.handleAttack(8, 0); // Player attacks
  overrideComputerAttack(game, 2, 2); // Set up computer's mock attack for (5, 5)
  game.handleAttack(); // Computer's turn

  game.handleAttack(9, 0); // Player attacks
  overrideComputerAttack(game, 2, 3); // Set up computer's mock attack for (0, 0)
  game.handleAttack(); // Computer's turn

  game.handleAttack(2, 3); // Player attacks
  overrideComputerAttack(game, 2, 4); // Set up computer's mock attack for (3, 2)
  game.handleAttack(); // Computer's turn

  // Continue the pattern with the specified coordinates...
  game.handleAttack(2, 2); // Player attacks
  overrideComputerAttack(game, 2, 5); // Set up computer's mock attack for (4, 5)
  game.handleAttack(); // Computer's turn

  game.handleAttack(2, 4); // Player attacks
  overrideComputerAttack(game, 7, 6); // Set up computer's mock attack for (5, 5)
  game.handleAttack(); // Computer's turn

  game.handleAttack(2, 5); // Player attacks
  overrideComputerAttack(game, 6, 6); // Set up computer's mock attack for (0, 0)
  game.handleAttack(); // Computer's turn

  game.handleAttack(0, 0); // Player attacks
  overrideComputerAttack(game, 8, 4); // Set up computer's mock attack for (3, 2)
  game.handleAttack(); // Computer's turn

  game.handleAttack(1, 0); // Player attacks
  overrideComputerAttack(game, 5, 0); // Set up computer's mock attack for (4, 5)
  game.handleAttack(); // Computer's turn

  game.handleAttack(2, 0); // Player attacks

  // Log statements for debugging
  console.log(
    "Player 2 (Computer) Gameboard Grid:",
    game.player2Gameboard.grid
  );
  console.log("Player 1 Gameboard Grid:", game.player1Gameboard.grid);

  // Assertions
  expect(game.player1Gameboard.areAllShipsSunk()).toBe(false);
  expect(game.player2Gameboard.areAllShipsSunk()).toBe(true);
  expect(game.gameOver).toBe(true);
  expect(game.winner.name).toBe("Player 1");
});

test("Computer wins by hitting all Player's ships with different orientations and longer lengths", () => {
  const game = new Game();
  const playerShip1 = new Ship(3);
  const playerShip2 = new Ship(4);
  const playerShip3 = new Ship(5);
  const computerShip1 = new Ship(3);
  const computerShip2 = new Ship(4);
  const computerShip3 = new Ship(5);

  game.player1Gameboard.placeShip(playerShip1, 0, 0, true);
  game.player1Gameboard.placeShip(playerShip2, 2, 2, false);
  game.player1Gameboard.placeShip(playerShip3, 5, 0, true);
  game.player2Gameboard.placeShip(computerShip1, 0, 0, true);
  game.player2Gameboard.placeShip(computerShip2, 2, 2, false);
  game.player2Gameboard.placeShip(computerShip3, 5, 0, true);

  // Player's first attack and Computer's response
  game.handleAttack(5, 0); // Player attacks
  overrideComputerAttack(game, 0, 0); // Set up computer's mock attack for (0, 0)
  game.handleAttack(); // Computer's turn

  // Player's second attack and Computer's response
  game.handleAttack(6, 0); // Player attacks
  overrideComputerAttack(game, 1, 0); // Set up computer's mock attack for (3, 2)
  game.handleAttack(); // Computer's turn

  game.handleAttack(7, 0); // Player attacks
  overrideComputerAttack(game, 2, 0); // Set up computer's mock attack for (4, 5)
  game.handleAttack(); // Computer's turn

  game.handleAttack(8, 0); // Player attacks
  overrideComputerAttack(game, 2, 2); // Set up computer's mock attack for (5, 5)
  game.handleAttack(); // Computer's turn

  game.handleAttack(9, 0); // Player attacks
  overrideComputerAttack(game, 2, 3); // Set up computer's mock attack for (0, 0)
  game.handleAttack(); // Computer's turn

  game.handleAttack(2, 3); // Player attacks
  overrideComputerAttack(game, 2, 4); // Set up computer's mock attack for (3, 2)
  game.handleAttack(); // Computer's turn

  // Continue the pattern with the specified coordinates...
  game.handleAttack(2, 2); // Player attacks
  overrideComputerAttack(game, 2, 5); // Set up computer's mock attack for (4, 5)
  game.handleAttack(); // Computer's turn

  game.handleAttack(2, 4); // Player attacks
  overrideComputerAttack(game, 6, 0); // Set up computer's mock attack for (5, 5)
  game.handleAttack(); // Computer's turn

  game.handleAttack(2, 5); // Player attacks
  overrideComputerAttack(game, 5, 0); // Set up computer's mock attack for (0, 0)
  game.handleAttack(); // Computer's turn

  game.handleAttack(0, 0); // Player attacks
  overrideComputerAttack(game, 7, 0); // Set up computer's mock attack for (3, 2)
  game.handleAttack(); // Computer's turn

  game.handleAttack(7, 7); // Player attacks
  overrideComputerAttack(game, 8, 0); // Set up computer's mock attack for (4, 5)
  game.handleAttack(); // Computer's turn

  game.handleAttack(1, 1); // Player attacks
  overrideComputerAttack(game, 9, 0); // Set up computer's mock attack for (4, 5)
  game.handleAttack(); // Computer's turn

  // Log statements for debugging
  console.log(
    "Player 2 (Computer) Gameboard Grid:",
    game.player2Gameboard.grid
  );
  console.log("Player 1 Gameboard Grid:", game.player1Gameboard.grid);

  // Assertions
  expect(game.player1Gameboard.areAllShipsSunk()).toBe(true);
  expect(game.player2Gameboard.areAllShipsSunk()).toBe(false);
  expect(game.gameOver).toBe(true);
  expect(game.winner.name).toBe("Computer");
});

test("random Computer ship placement horizontally and verically", () => {
  const game = new Game();
  const computerShip1 = new Ship(3);
  const computerShip2 = new Ship(4);
  const computerShip3 = new Ship(5);

  // Place computer ships randomly using your getRandomCoordinates function
  game.player2Gameboard.placeShip(
    computerShip1,getRandomCoordinates(),
    true
  );
  game.player2Gameboard.placeShip(
    computerShip2,getRandomCoordinates(),
    false
  );
  game.player2Gameboard.placeShip(
    computerShip3,getRandomCoordinates(),
    true
  );

  console.log(
    "Player 2 (Computer) Gameboard Grid:",
    game.player2Gameboard.grid
  );

   // Ensure the ships are placed successfully
  expect(
    game.player2Gameboard.grid.flat().filter((cell) => cell !== null).length
  ).toBe(computerShip1.length + computerShip2.length + computerShip3.length);

  function getRandomCoordinates() {
    const availableCoordinates = [];
    for (let row = 0; row < this.gameboard.gridSize; row++) {
      for (let column = 0; column < this.gameboard.gridSize; column++) {
        const coordinate = `${row},${column}`;
        if (!this.usedCoordinates.has(coordinate)) {
          availableCoordinates.push({ row, column });
        }
      }
    }
    if (availableCoordinates.length === 0) {
      return null; //All coordinates have been used
    }
    const randomIndex = Math.floor(Math.random() * availableCoordinates.length);
    return availableCoordinates[randomIndex];
  }
});

/* 
  ---version 3 multiple tests for random placement horizontal and vertical

  ---version 3.5 get game.js running from browser, console.log(game) should show object with board, turn, etc

  ---version 4 show grid on UI

  ---version 4.5 show grids to cheat, player and computer gameboard with ships (or console.log)

  ---version 4.7 hard coded player ships player can click to attack

  ---version 5 player drag drop on board
  */
