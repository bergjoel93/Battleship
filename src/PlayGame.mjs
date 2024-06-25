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
    this.renderGame();
  }

  // Now we need to handle game play.

  handleGamePlay() {
    const cells = document.querySelectorAll(".clickable");

    // set up clicking event listeners. If the cell clicked contains a ship then add a Hit marker. If it doesn't add a Miss marker.
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
    console.log(backEndBoard);
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
}
