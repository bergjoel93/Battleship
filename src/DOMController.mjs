import Ship from "./Ship.mjs";
import Gameboard from "./Gameboard.mjs";
import Player from "./Player.mjs";

/**
 * This controls the DOM manipulation.
 */

export default class DOMController {
  constructor() {
    this.player = new Player(false); // user player
    this.CPU = new Player(true);
  }
  /**
   * Renders first phase. Includes Place Your Ships message, toggle button and gameboard for setup.
   */
  renderFirst() {
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
        column.classList.add("column");
        column.setAttribute("x", i);
        column.setAttribute("y", j);
        column.setAttribute("id", `[${i},${j}]`);
        row.appendChild(column);
      }
      boardContainer.appendChild(row);
    }
    return boardContainer;
  }

  placeShips() {
    let firstDone = false;
    const shipSizes = [5, 4, 3, 3, 2];
    let direction = "horizontal";

    // handle button
    const button = document.querySelector("#direction");
    button.addEventListener("click", () => {
      direction = direction === "horizontal" ? "vertical" : "horizontal";
    });

    let cells = document.querySelectorAll(".column");
    cells.forEach((cell) => {
      cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "#0891b2";
        let x = Number(cell.getAttribute("x"));
        let y = Number(cell.getAttribute("y"));
        let start = [x, y];
        this.highlightCells(start, "horizontal", 5);
      });
      cell.addEventListener("mouseout", () => {
        cell.style.backgroundColor = "transparent";
      });
    });
  }

  highlightCells(start, direction, shipSize) {
    //calculate the sizes.
    let startX = start[0];
    let startY = start[1];
    let cells = [start];
    if (direction === "horizontal") {
      for (let i = 1; i < shipSize; i++) {
        // check if it goes out of bounds
        let nextCell = [(startX += 1), startY];
        cells.push(nextCell);
      }
      console.log(cells);
      //iterate through cells and highlight selected.
      cells.forEach((cell) => {
        let highlight = document.getElementById(`#[${cell[0]},${cell[1]}]`);
        highlight.style.backgroundColor = "#0891b2";
      });
    }
  }

  //end
}
