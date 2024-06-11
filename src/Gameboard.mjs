/**
 * Gameboard
 */
import Ship from "./Ship.mjs";

class Gameboard {
  constructor(name) {
    this.name = name;
    this.board = Array(10)
      .fill(null)
      .map(() => Array(10).fill(null));
    this.ships = [];
    this.gameOver = false;
  }

  /**
   * Method to place ships on the board.
   * @param {Ship} ship - The ship to place.
   * @param {number} x - The starting x-coordinate.
   * @param {number} y - The starting y-coordinate.
   * @param {string} direction - The direction ('horizontal' or 'vertical').
   * @returns {boolean} - Returns true if the ship was placed successfully, false otherwise.
   */
  placeShip(ship, x, y, direction) {
    const length = ship.length;
    if (direction === "horizontal") {
      if (y + length > 10) return false; // Ship goes out of bounds
      for (let i = 0; i < length; i++) {
        if (this.board[x][y + i] !== null) return false; // Overlaps another ship
      }
      for (let i = 0; i < length; i++) {
        this.board[x][y + i] = ship; // Place the ship reference
      }
    } else if (direction === "vertical") {
      if (x + length > 10) return false; // Ship goes out of bounds
      for (let i = 0; i < length; i++) {
        if (this.board[x + i][y] !== null) return false; // Overlaps another ship
      }
      for (let i = 0; i < length; i++) {
        this.board[x + i][y] = ship; // Place the ship reference
      }
    }
    this.ships.push(ship); // Add ships to ships array.
    return true; // Ship placed successfully
  }
  /**
   * Takes a pair of coordinates, determines whether or not the attack hit a ship and sends their 'hit' function to the correct ship, or records the coordinates of the miss shot. If an attack is a hit on a ship then true is returned. Otherwise false.
   * @param {*} x - coordinate
   * @param {*} y - coordinate
   * @returns {boolean} true or false
   */
  receiveAttack(x, y) {
    if (this.find(x, y) !== null) {
      // Check if it's a hit or miss.
      let hitShip = this.find(x, y);
      console.log(
        "Hit " + hitShip.name + " at coordinates (" + x + ", " + y + ")"
      );
      hitShip.hit();
      this.board[x][y] = "H"; // Add H for hit to board.

      if (this.allShipsSunk()) {
        console.log(`All of ${this.name}'s ships have been sunk. Game Over.`);
        return true;
      }

      if (hitShip.isSunk()) {
        // Check if ship is sunk.
        console.log("The " + hitShip.name + " has been sunk");
      }
      return true;
    } else {
      console.log("Miss");
      this.board[x][y] = "M"; // fills the board with M for miss.
      return false;
    }
  }

  /**
   * Accepts coordinates and returns what is at that space in the board.
   * @param {number} x
   * @param {number} y
   * @returns {Ship || null} - Returns ship object or null
   */
  find(x, y) {
    if (x >= 0 && x < 10 && y >= 0 && y < 10) {
      return this.board[x][y];
    } else {
      throw Error(" The coordinates were out of bounds of the boad.");
    }
  }

  /**
   * Returns true or false based off if all ships have been sunk or not.
   * @returns {boolean} - True or False
   */
  allShipsSunk() {
    let count = 0;
    for (let i = 0; i < this.ships.length; i++) {
      if (this.ships[i].isSunk()) {
        count++;
      }
    }
    if (count === this.ships.length) {
      return true;
    }
  }

  /**
   * Returns a printable string that represents the gameboard.
   * @returns {String}
   */
  toString() {
    let string = "";
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        if (this.board[i][j] !== null && typeof this.board[i][j] === "object") {
          string += `[${this.board[i][j].length}]`;
        } else if (this.board[i][j] === "H" || this.board[i][j] === "M") {
          string += `[${this.board[i][j]}]`;
        } else {
          string += "[ ]";
        }
      }
      string += "\n";
    }
    return string;
  }
}

export default Gameboard;
