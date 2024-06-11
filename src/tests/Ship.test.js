import Ship from "../Ship.mjs";

test("Ship can be hit", () => {
  const ship = new Ship("testShip", 3);
  ship.hit();
  expect(ship.hitCount).toBe(1);
});

test("Ship can sink", () => {
  const ship = new Ship("testShip", 3);
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});

test("Ship is not sunk before taking hits", () => {
  const ship = new Ship("testShip", 3);
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(false);
});
