import { Coords } from "./types";
import { PLAYER_HEIGHT, PLAYER_WIDTH } from "./constants";

export class Player {
  position: Coords;
  velocity: Coords;
  height: number;
  width: number;
  canJump: boolean;

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
    this.canJump = false;
  }
}