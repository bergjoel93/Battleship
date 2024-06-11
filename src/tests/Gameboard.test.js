// Test place ship.
import Gameboard from "../Gameboard.mjs";
import Ship from "../Ship.mjs";

describe("Testing placeShip() method", () => {
  test("Placing a ship", () => {
    const ship = new Ship("Test Ship", 5);
    const gameboard = new Gameboard("player1");
    expect(gameboard.placeShip(ship, 2, 3, "horizontal")).toBe(true);
  });

  test("Placing a ship where another ship exists. ", () => {
    const ship1 = new Ship("Test Ship 1", 5);
    const ship2 = new Ship("Test Ship 2", 4);
    const gameboard = new Gameboard("player1");
    // Place ship 2 at 4
    gameboard.placeShip(ship1, 2, 4, "horizontal");
    // place second ship at
    expect(gameboard.placeShip(ship2, 2, 6, "vertical")).toBe(false);
  });

  test("Placing a ship out of bounds", () => {
    const ship = new Ship("Test Ship", 5);
    const gameboard = new Gameboard("player1");
    expect(gameboard.placeShip(ship, 0, 6, "horizontal")).toBe(false);
  });
});

describe("Testing receiveAttack(x,y)", () => {
  const carrier = new Ship("Carrier", 5);
  const battleship = new Ship("Battleship", 4);
  const cruiser = new Ship("Cruiser", 3);
  const submarine = new Ship("Submarine", 3);
  const destroyer = new Ship("Destroyer", 2);

  const gameboard = new Gameboard("Player 1");
  gameboard.placeShip(carrier, 0, 0, "horizontal");
  gameboard.placeShip(battleship, 1, 0, "horizontal");
  gameboard.placeShip(cruiser, 2, 0, "horizontal");
  gameboard.placeShip(submarine, 3, 0, "horizontal");
  gameboard.placeShip(destroyer, 4, 0, "horizontal");

  test("Ships array: ", () => {
    console.log(gameboard.ships);
  });

  afterEach(() => {
    console.log(gameboard.toString());
  });

  test("hitting the Carrier successfully", () => {
    expect(gameboard.receiveAttack(0, 0)).toBe(true);
  });

  test("Missing a ship", () => {
    expect(gameboard.receiveAttack(5, 5)).toBe(false);
  });

  test("Sinking a ship entirely", () => {
    gameboard.receiveAttack(0, 1);
    gameboard.receiveAttack(0, 2);
    gameboard.receiveAttack(0, 3);
    gameboard.receiveAttack(0, 4);
    expect(carrier.isSunk()).toBe(true);
  });

  test("Sinking all ships", () => {
    gameboard.receiveAttack(1, 0);
    gameboard.receiveAttack(1, 1);
    gameboard.receiveAttack(1, 2);
    gameboard.receiveAttack(1, 3);

    gameboard.receiveAttack(2, 0);
    gameboard.receiveAttack(2, 1);
    gameboard.receiveAttack(2, 2);

    gameboard.receiveAttack(3, 0);
    gameboard.receiveAttack(3, 1);
    gameboard.receiveAttack(3, 2);

    gameboard.receiveAttack(4, 0);
    gameboard.receiveAttack(4, 1);

    expect(gameboard.allShipsSunk()).toBe(true);
  });
});
