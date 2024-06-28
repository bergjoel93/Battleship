import Player from "../classes/Player.mjs";
/**
 * Responsible for setting up the computer player and gameboard.
 */

export default class SetupComputer {
  constructor() {
    this.computer = new Player("computer");
    this.gameboard = this.computer.gameboard;
    this.ships = this.computer.ships;
    this.currentShipIndex = 0;

    this.placeNextShip();
  }

  placeNextShip() {
    // loop through all of the ships
    while (this.currentShipIndex < this.ships.length) {
      // get the ship
      let ship = this.ships[this.currentShipIndex];
      let x, y, direction;

      // Generate x, y, and direction until it's a valid position is found.
      do {
        x = this.generateXAndY();
        y = this.generateXAndY();
        direction = this.generateDirection();
      } while (!this.gameboard.isValidPosition(ship, x, y, direction));

      // once position is found, place the ship to the computer's gameboard.
      this.gameboard.placeShip(ship, x, y, direction);
      // increase current ship index.
      this.currentShipIndex++;
    }
    console.log("All of the computer's ships have been placed. ");
  }

  /**
   * Randomly generates a direction.
   * @returns {string} - "horizontal" || "vertical"
   */
  generateDirection() {
    return Math.random() < 0.5 ? "horizontal" : "vertical";
  }

  /**
   * Used for generating a random x and y coordinate.
   * @returns {number} between 0 and 9.
   */
  generateXAndY() {
    return Math.floor(Math.random() * 10);
  }
}
