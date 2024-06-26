import Player from "./Player.mjs";

export default class FakeGame {
  constructor() {
    this.computer = new Player("computer");
    this.player = new Player("user");
    this.placeShips(this.computer.name);
    this.placeShips(this.player.name);
  }

  placeShips(name) {
    if (name === "computer") {
      for (let i = 0; i < this.computer.ships.length; i++) {
        this.computer.gameboard.placeShip(
          this.computer.ships[i],
          i,
          0,
          "horizontal"
        );
      }
      console.log("Computer Gameboard");
      console.log(this.computer.gameboard.toString());
    } else {
      for (let i = 0; i < this.player.ships.length; i++) {
        this.player.gameboard.placeShip(
          this.player.ships[i],
          i,
          0,
          "horizontal"
        );
      }
      console.log("Player gameboard. ");
      console.log(this.player.gameboard.toString());
    }
  }
}
