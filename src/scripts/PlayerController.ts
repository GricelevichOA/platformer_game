import { PlayerModel } from "./PlayerModel";
import { PlayerView } from "./PlayerView";

export class PlayerController {
  model: PlayerModel;
  view: PlayerView;

  constructor(model: PlayerModel, view: PlayerView) {
    this.model = model;
    this.view = view;
  }

  setVelocityX(direction: number) {
    this.model.velocity.x = direction;
  }

  handleJump() {
      this.model.jump();
  }

  step() {
    this.model.updatePosition();
    this.view.drawPlayer();
  }
}