/**
 * Renders a loading screen and setsup computer players board.
 */
export default class SetupComputerPlayer {
  constructor() {
    this.computerGameboard = new Gameboard("Computer");
    this.computer = new Player("Computer");
    this.currentShipIndex = 0;
    this.placeNextShip();
  }

  renderLoadingPage() {
    const main = document.querySelector("main");
    main.innerHTML = "";

    const load = document.createElement("div");
    load.className = "load";
    load.innerHTML = "Setting up Computer Player...";

    main.appendChild(load);
  }

  // Randomly place the computers ships.
  placeNextShip() {
    const ships = this.computer.ships;
    if (this.currentShipIndex >= ships.length) {
      console.log("All computer player ships have been placed. ");
      return;
    }
    let ship = ships[this.currentShipIndex];
    let x = this.generateXAndY();
    let y = this.generateXAndY();
    let direction = this.generateDirection();
    if (this.computerGameboard.isValidPosition(ship, x, y, direction)) {
      this.computerGameboard.placeShip(ship, x, y, direction);
      this.currentShipIndex++;
      this.placeNextShip();
    } else {
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
