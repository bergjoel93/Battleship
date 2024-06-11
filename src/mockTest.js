import Gameboard from "./Gameboard.mjs";
import Ship from "./Ship.mjs";

const gameboard = new Gameboard("Player");
const carrier = new Ship("Carrier", 5);
const battleship = new Ship("Battleship", 4);
const cruiser = new Ship("Cruiser", 3);
const submarine = new Ship("Submarine", 3);
const destroyer = new Ship("Destroyer", 2);

gameboard.placeShip(carrier, 0, 0, "horizontal");
gameboard.placeShip(battleship, 1, 1, "horizontal");
gameboard.placeShip(cruiser, 2, 2, "horizontal");
gameboard.placeShip(submarine, 3, 3, "horizontal");
gameboard.placeShip(destroyer, 0, 0, "vertical"); // doesn't get added because it's overlapping other ships.

console.log(gameboard.toString());
