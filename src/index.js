import "./styles/style.css";
import DOMController from "./DOMController.mjs";
import FakeGame from "./mockInstance.mjs";
import PlayGame from "./PlayGame.mjs";
/**
 * This is the main controller for the game.
 */

// The game starts with placin of the ships. The user will see a grid and a toggle button to change between vertical and horizontal. As the user moves the cursor over the

const GAME_PHASES = {
  SETUP: "setup",
  LOADING: "loading",
  GAMEPLAY: "gameplay",
  ENDGAME: "endgame",
};

const ui = new DOMController();
// Render the first page.

const playGame = new PlayGame(ui);

//ui.renderShipPlacement();
//const fakeGame = new FakeGame();
