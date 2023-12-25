const Ship = require("../src/ship")
//import { Ship } from "../src/ship"

test("initializes to correct length", () => {
  const ship = new Ship(3);
  expect(ship.length).toBe(3);
  expect(ship.length).not.toBe(7);
});

test("initializes 0 hits", () => {
  const ship = new Ship(3);
  expect(ship.hits).toBe(0);
});

test("shows amount of hits", () => {
  const ship = new Ship(3);
  ship.hit();
  expect(ship.hits).toBe(1);
});

test("determine if a ship has sank", () => {
  const ship = new Ship(3);
  ship.hit();
  expect(ship.isSunk()).toBe(false);
});

test("determine if a ship has sank", () => {
  const ship = new Ship(3);
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});

test("capitalize should capitalize the first character of a string", () => {
  expect("").toBe("");
});
