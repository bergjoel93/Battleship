import Log from "./Log.mjs";
export default class PlayGame {
  constructor(player1, player2) {
    //this.fakeGame = new FakeGame();
    //this.user = this.fakeGame.player;
    //this.computer = this.fakeGame.computer;
    this.user = player1;
    this.computer = player2;
    this.userBoard = this.drawBoard(this.user);
    this.computerBoard = this.drawBoard(this.computer);
    this.usersMoves = []; // keeps track of user's moves.
    this.computerMoves = [];
    this.successfulHit = null;
    this.renderGame();
    this.handleGamePlay();
    this.log = new Log();
    this.log.render();
  }

  /**
   * Handles the game play. When the user clicks on the computer's board.
   */
  handleGamePlay() {
    const cells = document.querySelectorAll(".clickable");
    cells.forEach((cell) => {
      cell.addEventListener("click", () => {
        const x = Number(cell.dataset.x);
        const y = Number(cell.dataset.y);
        if (this.isValidMove(x, y, this.usersMoves)) {
          if (this.computer.gameboard.receiveAttack(x, y)) {
            cell.innerHTML = `<span id="hit-marker" class="material-symbols-outlined">close</span>`;
            cell.classList.add("ship");
          } else {
            cell.innerHTML = `<span id="miss-marker" class="material-symbols-outlined">radio_button_checked</span>`;
          }
          this.usersMoves.push({ x, y });
          // Check if game is over after user's moves.
          if (this.checkGameOver()) {
            return;
          }
          // Computer takes it's turn now.
          this.computerAttacks();
        }
      });
    });
  }
  /**
   * Checks if the game has ended due to all ships of either player being sunk.
   * @returns {boolean} - true or false
   */
  checkGameOver() {
    if (this.user.gameboard.allShipsSunk()) {
      this.displayEndGameMessage("Defeated");
      console.log(this.user.gameboard.toString());
      return true;
    } else if (this.computer.gameboard.allShipsSunk()) {
      this.displayEndGameMessage("You Win!");
      console.log(this.computer.gameboard.toString());
      return true;
    }
    return false;
  }

  displayEndGameMessage(message) {
    const main = document.querySelector("main");
    const endGameMessage = document.createElement("div");
    endGameMessage.innerHTML = message;
    main.appendChild(endGameMessage);
  }

  /**
   * Handles the computer attacking the user. Called after user attacks computer.
   */
  computerAttacks() {
    let x, y;
    // check for a successful hit.
    if (this.successfulHit !== null) {
      // if there is a successful hit previously coordinates are generated adjacent to previous move.
      const nextCoordinates = this.generateAdjacentMove(this.successfulHit);
      x = nextCoordinates.x;
      y = nextCoordinates.y;
    } else {
      //if no previously successful move, then we generate random VALID coordinates
      do {
        x = this.generateXAndY();
        y = this.generateXAndY();
      } while (!this.isValidMove(x, y, this.computerMoves));
    }

    // once coodinates are valid and generated, then we select cell on board.
    // it's selecting the first board since that's the one we want anyways.
    const cell = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
    if (this.user.gameboard.receiveAttack(x, y)) {
      // check if the attack is a hit.
      cell.innerHTML = `<span id="hit-marker" class="material-symbols-outlined">close</span>`;
      cell.classList.add("hit");
      this.updateSuccessfulHit(x, y); // update successful hit.
    } else {
      // else just add a miss marker.
      cell.innerHTML = `<span id="miss-marker" class="material-symbols-outlined">radio_button_checked</span>`;
      cell.classList.add("miss");
      this.successfulHit = null;
    }

    this.computerMoves.push({ x, y }); // add the coordinates to moves list.

    // Check if game is over after computer's move.
    if (this.checkGameOver()) {
      return;
    }
  }

  updateSuccessfulHit(x, y) {
    const lastMove = this.computerMoves[this.computerMoves.length - 1]; // find last move
    if (this.successfulHit) {
      // check if last move was a successful hit.
      // if the last move's x matches the current hit's x, we know the direction is horizontal. Vice versa for vertical.
      if (this.successfulHit.x !== lastMove.x) {
        this.successfulHit = { hit: true, x, y, direction: "horizontal" };
      } else if (this.successfulHit.y !== lastMove.y) {
        this.successfulHit = { hit: true, x, y, direction: "vertical" };
      }
    } else {
      this.successfulHit = { hit: true, x, y, direction: null };
    }
  }

  /**
   * Generate adjacent move coordinates based on a previous successful hit.
   * @param {Object} successfulHit - { hit: true, x, y, direction }
   * @returns {Object} - { x, y } - Next move coordinates
   */
  generateAdjacentMove(successfulHit) {
    let x, y;
    const maxAttempts = 10; // Max attempts to avoid infinite recursion
    let attempts = 0;

    while (attempts < maxAttempts) {
      // check which direction we want to generate coordiantes for.
      if (successfulHit.direction === "horizontal") {
        const side = Math.round(Math.random()); // generate random side. 0 or 1.
        x = side === 1 ? successfulHit.x + 1 : successfulHit.x - 1;
        y = successfulHit.y;
      } else if (successfulHit.direction === "vertical") {
        const side = Math.round(Math.random());
        y = side === 1 ? successfulHit.y + 1 : successfulHit.y - 1;
        x = successfulHit.x;
      } else {
        // if there's no direction then we generate 1 of 4 adjacent coordinates.
        const choice = Math.floor(Math.random() * 4) + 1;
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
      }
      attempts++;
    }

    // Fallback: If all adjacent moves are invalid, pick a random move
    do {
      x = this.generateXAndY();
      y = this.generateXAndY();
    } while (!this.isValidMove(x, y, this.computerMoves));

    return { x, y };
  }

  isValidMove(x, y, movesArray) {
    if (x < 0 || x > 9 || y < 0 || y > 9) {
      return false;
    }
    return !movesArray.some((move) => move.x === x && move.y === y);
  }

  renderGame() {
    const main = document.querySelector("main");
    main.innerHTML = "";

    const gameContainer = document.createElement("div");
    gameContainer.setAttribute("id", "gameContainer");

    this.userBoard.className = "mainBoard";
    this.computerBoard.className = "userBoard";

    gameContainer.appendChild(this.userBoard);
    gameContainer.appendChild(this.computerBoard);
    main.appendChild(gameContainer);
  }

  drawBoard(player) {
    const boardContainer = document.createElement("div");
    boardContainer.classList.add("board-container");

    const backEndBoard = player.gameboard.board;
    const name = player.name;

    for (let i = 0; i < 10; i++) {
      const row = document.createElement("div");
      row.classList.add("row");

      for (let j = 0; j < 10; j++) {
        const column = document.createElement("div");
        column.classList.add("empty");
        column.setAttribute("data-x", i);
        column.setAttribute("data-y", j);
        column.setAttribute("id", `cell-medium`);
        if (name === "computer") {
          column.className = "clickable";
        }
        if (name === "user" && backEndBoard[i][j]) {
          column.className = "ship";
        }

        row.appendChild(column);
      }
      boardContainer.appendChild(row);
    }
    return boardContainer;
  }

  generateXAndY() {
    return Math.floor(Math.random() * 10);
  }
}
