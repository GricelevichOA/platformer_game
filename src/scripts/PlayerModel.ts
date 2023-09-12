import { JUMP_FORCE, PLAYER_HEIGHT, PLAYER_SPEED, PLAYER_WIDTH, SCREEN_HEIGHT } from "./constants";
import { Coords } from "./types";

export class PlayerModel {
  position: Coords;
  velocity: Coords;
  height: number;
  width: number;

  constructor() {
    this.position = {
      x: 100,
      y: 100,
    };

    this.velocity = {
      x: 0,
      y: 0,
    };

    this.height = PLAYER_HEIGHT;
    this.width = PLAYER_WIDTH;
  }

  updatePosition() {
    this.position.x += this.velocity.x * PLAYER_SPEED;
    this.applyGravity();    
  }

  applyGravity() {
    this.position.y += this.velocity.y;

    if (this.position.y + this.height + this.velocity.y <= SCREEN_HEIGHT) {
      this.velocity.y += 1;
    } else {
      this.velocity.y = 0;
    }

  }

  jump() {
    if (this.velocity.y === 0) {
      this.velocity.y = JUMP_FORCE;
    }
  }
}
