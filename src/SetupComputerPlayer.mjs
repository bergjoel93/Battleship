import Player from "./Player.mjs";
/**
 * Renders a loading screen and setsup computer players board.
 */

export default class SetupComputerPlayer {
  constructor() {
    this.computer = new Player("Computer");
    this.computerGameboard = this.computer.gameboard;
    this.ships = this.computer.ships;
    this.currentShipIndex = 0;
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
      } while (!this.computerGameboard.isValidPosition(ship, x, y, direction));

      // once position is found, place the ship to the computer's gameboard.
      this.computerGameboard.placeShip(ship, x, y, direction);
      // increase current ship index.
      this.currentShipIndex++;
    }
    console.log("All of the computer's ships have been placed. ");
  }

  renderLoadingPage() {
    const main = document.querySelector("main");
    main.innerHTML = "";

    const load = document.createElement("div");
    load.className = "load";
    load.innerHTML = "Setting up Computer Player...";

    main.appendChild(load);

    // Ensure loading screen is visible before continuing
    setTimeout(() => this.startSetup(), 500); // Delay to show loading screen
  }

  startSetup(callback) {
    this.placeNextShip(callback);
  }

  /**
   *
   * @returns
   */
  placeNextShip() {
    const ships = this.computer.ships;
    // Check if all ships have been placed.
    if (this.currentShipIndex >= ships.length) {
      console.log("All computer player ships have been placed. ");
      return;
    }
    // get current ship
    let ship = ships[this.currentShipIndex];
    //get coordinates
    let x = this.generateXAndY();
    let y = this.generateXAndY();
    // generate a random direction
    let direction = this.generateDirection();
    //check if it's a valid position
    if (this.computerGameboard.isValidPosition(ship, x, y, direction)) {
      // place the ship
      this.computerGameboard.placeShip(ship, x, y, direction);
      // increase index
      this.currentShipIndex++;
      // recursively call the function
      this.placeNextShip();
    } else {
      // if it's not a valid position it will regenerate x, y, and direction
      x = this.generateXAndY();
      y = this.generateXAndY();
      direction = this.generateDirection();
    }
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
