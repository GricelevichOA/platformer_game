import "../styles.css";

import { View } from "./Classes/View";
import { Model } from "./Classes/Model";
import { Controller } from "./Classes/Controller";

import { FPS, KEYS, NO_TIMER_VALUE } from "./constants";

const view = new View("game");
const model = new Model();
const controller = new Controller(model, view);

window.addEventListener("keydown", (e) => {
  switch (e.code) {
    case KEYS.RIGHT:
      controller.setPlayerVelocityX(1);
      break;
    case KEYS.LEFT:
      controller.setPlayerVelocityX(-1);
      break;
    case KEYS.JUMP:
      controller.handlePlayerJump();
      break;
    default:
      break;
  }
});


window.addEventListener("keyup", (e) => {
  if (e.code === KEYS.RIGHT || e.code === KEYS.LEFT) {
    controller.setPlayerVelocityX(0);
  }
});

controller.start();

setInterval(() => {
  controller.step();
}, FPS);
