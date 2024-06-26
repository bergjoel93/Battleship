/**
 * We need to setup a mock instance to play this game.
 */
import FakeGame from "./mockInstance.mjs";
export default class PlayGame {
  constructor() {
    this.fakeGame = new FakeGame();
    this.user = this.fakeGame.player;
    this.computer = this.fakeGame.computer;
    this.mainBoard = this.drawBoard(this.user);
    this.userBoard = this.drawBoard(this.computer);
    this.usersMoves = []; // keeps track of user's moves.
    this.computerMoves = [];
    this.successfulHit = null;
    this.renderGame();
    this.handleGamePlay();
  }

  // Now we need to handle game play.
  //If a cell is clicked we get the x and y values. Then we compare them to see if we hit a ship or if we miss. If we hit a ship, then we add a new marker to the element. Maybe an icon image.
  // After, the computer player randomly will select a spot on the grid. This spot is rememberd if it is a hit because then the computer will click one of the four adjacent spots. If it hit's two spots in a row then it will only select a spot in the y or x direction. If it makes a miss then this memmory is deleted.
  handleGamePlay() {
    const cells = document.querySelectorAll(".clickable");
    cells.forEach((cell) => {
      // if we click a cell what happens? It hits or misses a target.
      cell.addEventListener("click", () => {
        const x = Number(cell.dataset.x);
        const y = Number(cell.dataset.y);
        //console.log(`Cell clicked:(${x}, ${y})`);
        //console.log(this.usersMoves);
        //console.log(this.isValidMove(x, y, this.usersMoves));
        if (this.isValidMove(x, y, this.usersMoves)) {
          //console.log("valid move");
          // check for hit.
          if (this.computer.gameboard.receiveAttack(x, y)) {
            // update the grid
            // inject material symbol.
            cell.innerHTML = `<span id = "hit-marker" class="material-symbols-outlined">close</span>`;
            cell.classList.add("ship");
          } else {
            cell.innerHTML = `<span id = "miss-marker" class="material-symbols-outlined">radio_button_checked</span>`;
          }
          // add moves to userMoves.
          this.usersMoves.push({ x, y });
          // now computer takes it's turn.
          this.computerAttacks();
        }
      });
    });
  }
  // Responsible for handling attacks made by the computer after the user has attacked computer's grid.
  computerAttacks() {
    let x, y;

    // check if there was a previously successfuly hit.
    if (this.successfulHit !== null) {
      const nextCoordinates = this.generateAdjacentMove(this.successfulHit);
      x = nextCoordinates.x;
      y = nextCoordinates.y;

      if (this.user.gameboard.receiveAttack(x, y)) {
        // Update the grid
        cell.innerHTML = `<span id="hit-marker" class="material-symbols-outlined">close</span>`;
        cell.classList.add("hit");
        // how do we check if it's a horizontal or vertical?
        // check the last coordinate in the computerMoves, if x is different it's horizontal. if y is different, vert.
        if (
          this.successfulHit.x !==
          this.computerMoves[this.computerMoves.length - 1].x
        ) {
          this.successfulHit = { hit: true, x, y, direction: "horizontal" };
        } else if (
          this.successfulHit.y !==
          this.computerMoves[this.computerMoves.length - 1].y
        ) {
          this.successfulHit = { hit: true, x, y, direction: "vertical" };
        }
      } else {
        // If it's a miss from a previously successful hit, we want to indicate that somehow. Because then we know to simply hit the other side. The computer will continue this until the ship is sunk.
        console.log("Computer misses.");
        cell.innerHTML = `<span id="miss-marker" class="material-symbols-outlined">radio_button_checked</span>`;
        cell.classList.add("miss");
        //this.successfulHit = { hit: false, x, y, direction: null };
        this.successfulHit = null;
      }
    } else {
      // Generate x and y until a valid move is found
      do {
        x = this.generateXAndY();
        y = this.generateXAndY();
      } while (!this.isValidMove(x, y, this.computerMoves));
      console.log(`computer attemps hit at (${x},${y})`);
      // Check for hit or miss and update the board
      let cell = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
      if (this.user.gameboard.receiveAttack(x, y)) {
        console.log("Computer hits user's ship.");
        // Update the grid
        cell.innerHTML = `<span id="hit-marker" class="material-symbols-outlined">close</span>`;
        cell.classList.add("hit");
        // remember last hit location to determine next hit.
        this.successfulHit = { hit: true, x, y, direction: null };
      } else {
        console.log("Computer misses.");
        cell.innerHTML = `<span id="miss-marker" class="material-symbols-outlined">radio_button_checked</span>`;
        cell.classList.add("miss");
        // nullify successfulHit
        this.successfulHit = null;
      }
    }

    // Add move to computer moves
    this.computerMoves.push({ x, y });
  }

  /**
   *
   * @param {Object} successfulHit {"hit":true or false, x, y, direction}
   * @returns {Object} next x and y coordinates.
   */
  generateAdjacentMove(successfulHit) {
    let x, y;
    // check if there is a direction.
    if (successfulHit.direction === "horizontal") {
      // randomly pick left or right side.
      let side = Math.round(Math.random()); // generates 1 or 0.
      x = side === 1 ? successfulHit.x + 1 : successfulHit.x - 1;
      y = successfulHit.y;
    } else if (successfulHit.direction === "vertical") {
      // randomly pick left or right side.
      let side = Math.round(Math.random()); // generates 1 or 0.
      y = side === 1 ? successfulHit.y + 1 : successfulHit.y - 1;
      x = successfulHit.x;
    } else {
      // generates a random number between 1 through 4 because there are four different choices.
      let choice = Math.floor(Math.random() * 4) + 1;

      switch (choice) {
        case 1:
          x = successfulHit.x - 1;
          y = successfulHit.y;
          break;
        case 2:
          x = successfulHit.x;
          y = successfulHit.y - 1;
          break;
        case 3:
          x = successfulHit.x + 1;
          y = successfulHit.y;
          break;
        case 4:
          x = successfulHit.x;
          y = successfulHit.y + 1;
          break;
      }
    }

    if (this.isValidMove(x, y, this.computerMoves)) {
      return { x, y };
    } else {
      this.generateAdjacentMove(successfulHit);
    }
  }

  // Function to check if the move has been attempted before and if the coordinates are within bounds
  isValidMove(x, y, movesArray) {
    if (x < 0 || x > 9 || y < 0 || y > 9) {
      return false;
    }
    return !movesArray.some((move) => move.x === x && move.y === y);
  }

  renderGame() {
    const main = document.querySelector("main");
    main.innerHTML = ""; // clear out main.

    const gameContainer = document.createElement("div");
    gameContainer.setAttribute("id", "gameContainer");

    this.mainBoard.className = "mainBoard";

    this.userBoard.className = "userBoard";
    gameContainer.appendChild(this.mainBoard);
    gameContainer.appendChild(this.userBoard);
    main.appendChild(gameContainer);
  }

  drawBoard(player) {
    let boardContainer = document.createElement("div");
    boardContainer.classList.add("board-container");

    let backEndBoard = player.gameboard.board;
    //console.log(backEndBoard);
    let name = player.name;

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
        column.setAttribute("id", `cell-medium`);
        if (name === "computer") {
          column.className = "clickable";
        }
        if (name === "user") {
          //check if theres a ship in each cell.
          if (backEndBoard[i][j]) {
            column.className = "ship";
          }
        }

        row.appendChild(column);
      }
      boardContainer.appendChild(row);
    }
    return boardContainer;
  }

  /**
   * Used for generating a random x and y coordinate.
   * @returns {number} between 0 and 9.
   */
  generateXAndY() {
    return Math.floor(Math.random() * 10);
  }
}
