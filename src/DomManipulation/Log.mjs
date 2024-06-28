/**
 * This is a retro looking log monitor that details the moves and events that happen when playing battleship. This module is responsible for rendering and updating the events log when it's initialized in PlayGame.mjs
 */

export default class Log {
  constructor() {}

  addMessage(newMessage) {
    const message = document.createElement("span");
    message.id = "message";
    message.innerHTML = `@Battlship % ${newMessage}`;
    const log = document.querySelector("#log");
    log.appendChild(message);
    this.scrollToBottom(); // Ensure the log scrolls to the bottom
  }

  render() {
    const main = document.querySelector("main");

    const container = document.createElement("div");
    container.id = "log-container";

    const log = document.createElement("div");
    log.id = "log";
    container.appendChild(log);
    main.appendChild(container);
  }

  scrollToBottom() {
    const logContainer = document.querySelector("#log");
    logContainer.scrollTop = logContainer.scrollHeight;
  }
}
