import { GAME_STATE } from "../constants";
import { Model } from "./Model";
import { View } from "./View";

import { levels } from "../data/levels_data";
import { Player } from "./Player";

export class Controller {
  model: Model;
  view: View;

  constructor(model: Model, view: View) {
    this.model = model;
    this.view = view;
  }

  init() {
  }

  start() {
    this.loadLevel(0);
  }

  step() {
    this.model.updatePosition();
    this.view.update(this.model);
  }

  pause() {
    if (this.model.gameState === GAME_STATE.GAMEPLAY) {
      this.model.gameState = GAME_STATE.PAUSE;
    } else if (this.model.gameState === GAME_STATE.PAUSE) {
      this.model.gameState = GAME_STATE.GAMEPLAY;
    }
  }

  loadLevel(level: number = 0) {
    this.model.gameState = GAME_STATE.GAMEPLAY;
    this.model.currentLevel = levels[level];
    this.model.player = new Player();
    this.model.player.setInitialPosition(
      this.model.currentLevel.playerStartPos
    );
  }

  setPlayerVelocityX(direction: number) {
    if (this.model.player) {
      this.model.player.velocity.x = direction;
    }
  }

  handlePlayerJump() {
    if (this.model.player) {
      this.model.jump();
    }
  }
}
