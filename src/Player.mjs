import Gameboard from "./Gameboard.mjs";
import Ship from "./Ship.mjs";

export default class Player {
  constructor(isCPU) {
    this.isCPU = isCPU;
    this.name = this.isCPU ? "Computer" : "Player";
    this.gameboard = new Gameboard(this.name);
    this.ships = [
      new Ship("Carrier", 5),
      new Ship("Battleship", 4),
      new Ship("Cruiser", 3),
      new Ship("Submarine", 3),
      new Ship("Destroyer", 2),
    ];
  }
}
