import "../styles.css";
import { PlayerController } from "./PlayerController";
import { PlayerModel } from "./PlayerModel";
import { PlayerView } from "./PlayerView";
import { View } from "./View";

import { FPS, KEYS, NO_TIMER_VALUE } from "./constants";

const view = new View("game");

const {context, canvas} = view;

const playerModel = new PlayerModel();
const playerView = new PlayerView("game", playerModel);
const playerController = new PlayerController(playerModel, playerView);

window.addEventListener("keydown", (e) => {
  console.log(e.code);
  
  switch (e.code) {
    case KEYS.RIGHT:
      playerController.setVelocityX(1);
      break;
    case KEYS.LEFT:
      playerController.setVelocityX(-1);
      break;
    case KEYS.JUMP:
      playerController.handleJump();
      break;
    default:
      break;
  }
});

window.addEventListener("keyup", (e) => {
  if (e.code === KEYS.RIGHT || e.code === KEYS.LEFT) {
    playerController.setVelocityX(0);
  }
});

function animate() {
  window.requestAnimationFrame(animate);
  playerView.drawPlayer();
  // console.log(playerModel.velocity);
}

setInterval(() => {
  playerController.step();
  view.drawCanvas();
}, FPS);

view.drawCanvas();
animate();