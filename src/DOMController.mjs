import Ship from "./Ship.mjs";
import Gameboard from "./Gameboard.mjs";
import Player from "./Player.mjs";

/**
 * This controls the DOM manipulation.
 */

export default class DOMController {
  constructor() {
    this.player = new Player(false); // user player
    this.computer = new Player(true);
    this.playerGameboard = new Gameboard("Player");
    this.computerGameboard = new Gameboard("Computer");
  }
  /**
   * Renders first phase. Includes Place Your Ships message, toggle button and gameboard for setup.
   */
  renderShipPlacement() {
    const main = document.querySelector("main");
    main.innerHTML = ``; //  clear it out.

    // direction toggle button
    const toggleButton = document.createElement("button");
    toggleButton.setAttribute("id", "direction");
    toggleButton.innerHTML = "Horizontal";

    // gameboard
    const gameboard = this.drawBoard();

    //message
    const message = document.createElement("div");
    message.classList.add("message");
    message.innerHTML = "PLACE YOUR SHIPS";

    main.appendChild(toggleButton);
    main.appendChild(gameboard);
    main.appendChild(message);

    this.placeShips();
  }

  placeShips = () => {
    // TODO need to cycle through all ships for placement.
    const ships = this.player.ships;
    let direction = "horizontal";

    // handle button
    const button = document.querySelector("#direction");
    button.addEventListener("click", () => {
      direction = direction === "horizontal" ? "vertical" : "horizontal";
    });

    let cells = document.querySelectorAll("#cell");
    cells.forEach((cell) => {
      cell.addEventListener("mouseover", () => {
        let x = Number(cell.dataset.x);
        let y = Number(cell.dataset.y);
        this.highlightCells(x, y, direction, ships[0]);
      });
      cell.addEventListener("mouseout", () => {
        let x = Number(cell.dataset.x);
        let y = Number(cell.dataset.y);
        this.unhighlightCells();
      });

      cell.addEventListener("click", () => {
        // If the cell is clicked do the following: check to make sure it's a valid spot. If it is, add ship to board. Then color cells on UI.
        let x = Number(cell.dataset.x);
        let y = Number(cell.dataset.y);
        if (this.playerGameboard.isValidPosition(ships[0], x, y, direction)) {
          this.playerGameboard.placeShip(ships[0], x, y, direction);
          this.updateBoardShipPlacement(x, y, direction, ships[0]);
          console.log("ship placed");
          console.log("ship:", ships[0]);
          console.log(this.playerGameboard.toString());
        }
      });
    });
  };

  drawBoard() {
    let boardContainer = document.createElement("div");
    boardContainer.classList.add("board-container");

    // first loop creates the rows.
    for (let i = 0; i < 10; i++) {
      let row = document.createElement("div");
      row.classList.add("row");

      // columns
      for (let j = 0; j < 10; j++) {
        let column = document.createElement("div");
        column.classList.add("empty");
        column.setAttribute("data-x", i);
        column.setAttribute("data-y", j);
        column.setAttribute("id", `cell`);
        row.appendChild(column);
      }
      boardContainer.appendChild(row);
    }
    return boardContainer;
  }

  updateBoardShipPlacement(x, y, direction, ship) {
    // select cells where ship is at.
    for (let i = 0; i < ship.size; i++) {
      let cell;
      if (direction === "horizontal") {
        cell = document.querySelector(`[data-x="${x}"][data-y="${y + i}"]`);
      } else {
        cell = document.querySelector(`[data-x="${x + i}"][data-y="${y}"]`);
      }
      cell.className = "ship";
    }
  }

  highlightCells(x, y, direction, ship) {
    for (let i = 0; i < ship.size; i++) {
      let cell;
      if (direction === "horizontal") {
        cell = document.querySelector(`[data-x="${x}"][data-y="${y + i}"]`);
      } else {
        cell = document.querySelector(`[data-x="${x + i}"][data-y="${y}"]`);
      }
      if (cell) {
        if (cell.className !== "ship") {
          if (!this.playerGameboard.isValidPosition(ship, x, y, direction)) {
            cell.className = "empty"; //clears classlist
            cell.classList.add("invalid");
            ///cell.style.backgroundColor = "#f87171"; // red
          } else {
            cell.className = "empty"; //clears classlist
            cell.classList.add("valid");
            //cell.style.backgroundColor = "#0891b2"; //highlight
          }
        }
      }
    }
  }
  unhighlightCells() {
    let cells = document.querySelectorAll(".empty");
    cells.forEach((cell) => {
      cell.className = "empty";
    });
  }

  //end
}
