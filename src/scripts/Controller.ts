import { Model } from "./Model";
import { View } from "./View";

export class Controller {
  model: Model;
  view: View;

  constructor (model: Model, view: View) {
    this.model = model;
    this.view = view;
  }

  start() {
    console.log("controller started");    
  }

  step() {
    this.model.updatePosition();
    this.view.updatePosition(this.model);
  }

  
  setPlayerVelocityX(direction: number) {
    // console.log("velocity set to ", direction);
    this.model.player.velocity.x = direction;
  }

  handlePlayerJump() {
    this.model.jump();
  }
}