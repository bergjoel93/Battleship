/**
 * Gameboard
 */
import Ship from "./Ship";

class Gameboard {
  cosntructor(name) {
    this.name = name;
    this.board = Array(10)
      .fill(null)
      .map(() => Array(10).fill(null));
    this.ships = [
      new Ship("Carrier", 5),
      new Ship("Battleship", 4),
      new Ship("Cruiser", 3),
      new Ship("Submarine", 3),
      new Ship("Destroyer", 2),
    ];
  }

  /**
   * Method to place ships on the board.
   */
  placeShip(ship, x, y, direction) {
    const length = ship.length;
    // check if x and y coordinates are valid placement.
    if (x > 9 || y > 9) {
      return;
    }
    // Use helper functions to return current coordinates of ships.

    // place ship on board. It will add a reference to the ship object in the space it takes up in the board array.
    if (direction === "horizontal") {
      for (let i = 0; i < length; i++) {
        this.board[x][y + i] = ship;
      }
    }
  }

  getShipLocations() {}
}
