import Ship from "./Ship.mjs";
import Gameboard from "./Gameboard.mjs";
import Player from "./Player.mjs";
import SetupComputerPlayer from "./SetupComputerPlayer.mjs";

/**
 * This controls the DOM manipulation.
 */

export default class DOMController {
  constructor() {
    this.player = new Player("Player"); // user player
    this.playerGameboard = new Gameboard("Player");
    this.currentShipIndex = 0;
    this.setupComputerPlayer = new SetupComputerPlayer();
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

    this.placeNextShip();
  }

  placeNextShip = () => {
    const ships = this.player.ships;
    // Once we reach the end up of the ships array (we placed all of the ships)
    if (this.currentShipIndex >= ships.length) {
      console.log("All ships have been placed.");
      // Show loading screen and then set up computer player
      this.setupComputerPlayer.renderLoadingPage();
      setTimeout(() => {
        this.setupComputerPlayer.startSetup(() => {
          console.log("Computer player setup complete.");
          // Transition to the next game phase here, e.g., renderGamePhase();
        });
      }, 2000); // Delay for 1 second to show the loading screen
      return;
    }

    const ship = ships[this.currentShipIndex];
    let direction = "horizontal";

    // handle button
    const button = document.querySelector("#direction");
    button.addEventListener("click", () => {
      direction = direction === "horizontal" ? "vertical" : "horizontal";
      button.innerHTML = direction.charAt(0).toUpperCase() + direction.slice(1);
    });

    const handleMouseOver = (event) => {
      let x = Number(event.target.dataset.x);
      let y = Number(event.target.dataset.y);
      this.highlightCells(x, y, direction, ship);
    };

    const handleMouseOut = (event) => {
      this.unhighlightCells();
    };

    const handleClick = (event) => {
      let x = Number(event.target.dataset.x);
      let y = Number(event.target.dataset.y);
      if (this.playerGameboard.isValidPosition(ship, x, y, direction)) {
        this.playerGameboard.placeShip(ship, x, y, direction);
        this.updateBoardShipPlacement(x, y, direction, ship);
        //console.log("ship:", ship, `placed at [${x},${y}], ${direction}`);
        //console.log(this.playerGameboard.toString());
        this.currentShipIndex++;
        this.placeNextShip();
        // Remove event listeners
        cells.forEach((cell) => {
          cell.removeEventListener("mouseover", handleMouseOver);
          cell.removeEventListener("mouseout", handleMouseOut);
          cell.removeEventListener("click", handleClick);
        });
      }
    };

    let cells = document.querySelectorAll("#cell");
    cells.forEach((cell) => {
      cell.addEventListener("mouseover", handleMouseOver);
      cell.addEventListener("mouseout", handleMouseOut);
      cell.addEventListener("click", handleClick);
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
