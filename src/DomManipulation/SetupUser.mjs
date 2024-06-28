import Player from "../classes/Player.mjs";
import SetupComputer from "./SetupComputer.mjs";
import PlayGame from "./PlayGame.mjs";

/**
 * Responsible for setting up the user players gameboard.
 * The order of operations:
 * 1. Start by rendering the button, board, and message on the screen
 * 2. Add event handlers to everything.
 */

export default class SetupUser {
  constructor() {
    this.initializeGame();
    this.setupComputer = new SetupComputer();
    this.user = new Player("User");
    this.gameboard = this.user.gameboard;
    this.ships = this.user.ships;
    this.currentShipIndex = 0;
    this.currentShip = this.ships[this.currentShipIndex];
    this.direction = "horizontal";
  }

  initializeGame() {
    this.renderPage();
    this.setupAllHandlers();
  }

  /**
   * Places a ship on the user's gameboard and updates the board UI.
   * This method also activates the next phase of the app once all ships have been assigned.
   * @param {number} x
   * @param {number} y
   */
  placeNextShip(x, y) {
    // Check if we reached the end of the ships array (all ships placed)
    if (this.currentShipIndex >= this.ships.length - 1) {
      this.gameboard.placeShip(this.currentShip, x, y, this.direction);
      console.log("All user ships have been placed. ");
      // activate next phase playGame
      //   console.log("User board");
      //   console.log(this.user.gameboard.toString());
      //   console.log("Computer Board");
      //   console.log(this.setupComputer.gameboard.toString());

      const startGame = new PlayGame(this.user, this.setupComputer.computer);
    }
    this.gameboard.placeShip(this.currentShip, x, y, this.direction);
    // update board
    //console.log(this.user.gameboard.toString());
    this.updateBoard();
    // increase curent index and reassign current ship
    this.currentShipIndex++;
    this.currentShip = this.ships[this.currentShipIndex];
  }

  setupAllHandlers() {
    // select direction toggle button
    const button = document.querySelector("#direction");
    button.addEventListener("click", () => {
      this.direction =
        this.direction === "horizontal" ? "vertical" : "horizontal";
      button.innerHTML =
        this.direction.charAt(0).toUpperCase() + this.direction.slice(1);
    });

    // select all the cells
    let cells = document.querySelectorAll("#cell");
    // add the event handlers for each cell. Hover and click
    cells.forEach((cell) => {
      cell.addEventListener("mouseover", this.handleMouseOver.bind(this));
      cell.addEventListener("mouseout", this.handleMouseOut.bind(this));
      cell.addEventListener("click", this.handleClick.bind(this));
    });
  }

  /**
   * Draws the board, a 10x10 grid.
   * @returns a DOM object to add to DOM
   */
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

  /**
   * Renders the page UI.
   */
  renderPage() {
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
  }

  /**
   * Highlights the cells when you hover over the square according to the ship being placed. Will highlight red if it's an invalid spot.
   * @param {number} x
   * @param {number} y
   * @param {String} direction
   * @param {Object} ship
   */
  handleMouseOver(event) {
    //check to make sure there is a ship
    if (this.currentShipIndex >= this.ships.length) {
      return;
    }

    let x = Number(event.target.dataset.x);
    let y = Number(event.target.dataset.y);
    for (let i = 0; i < this.currentShip.size; i++) {
      let cell;
      if (this.direction === "horizontal") {
        cell = document.querySelector(`[data-x="${x}"][data-y="${y + i}"]`);
      } else {
        cell = document.querySelector(`[data-x="${x + i}"][data-y="${y}"]`);
      }
      if (cell) {
        if (cell.className !== "ship") {
          if (
            !this.gameboard.isValidPosition(
              this.currentShip,
              x,
              y,
              this.direction
            )
          ) {
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

  /**
   * unhighlights cells that are empty when the mouse event moves away from cell.
   */
  handleMouseOut(event) {
    let cells = document.querySelectorAll(".empty");
    cells.forEach((cell) => {
      cell.className = "empty";
    });
  }

  /**
   * Handles when a user clicks on a cell in the grid. Places a ship if it's a valid position.
   * @param {event} event
   * @returns
   */
  handleClick(event) {
    //check to make sure there is a ship
    if (this.currentShipIndex >= this.ships.length) {
      return;
    }
    let x = Number(event.target.dataset.x);
    let y = Number(event.target.dataset.y);

    if (
      this.gameboard.isValidPosition(this.currentShip, x, y, this.direction)
    ) {
      this.placeNextShip(x, y);
    }
  }

  /**
   * Syncs the backend board with the user's board.
   */
  updateBoard() {
    for (let i = 0; i < this.gameboard.board.length; i++) {
      for (let j = 0; j < this.gameboard.board[i].length; j++) {
        if (this.gameboard.board[i][j] !== null) {
          let cell = document.querySelector(`[data-x="${i}"][data-y="${j}"]`);
          cell.className = "ship";
        }
      }
    }
  }
}
