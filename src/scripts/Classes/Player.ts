import { Coords } from "../types";
import { PLAYER_HEIGHT, PLAYER_STATE, PLAYER_WIDTH } from "../constants";

export class Player{
  position: Coords;
  velocity: Coords;
  height: number;
  width: number;
  canJump: boolean;
  state: String;

  constructor() {
    this.position;
    this.velocity = { x: 0, y: 0 };
    this.canJump = false;
    this.state = PLAYER_STATE.FALL;
    this.width = PLAYER_WIDTH;
    this.height = PLAYER_HEIGHT;        
  }

  setInitialPosition(pos: Coords) {
    this.position = pos;
  }

  updateState() {
    if (this.velocity.x === 0 && this.velocity.y === 0) {
      this.state = PLAYER_STATE.IDLE;
    }

    if (this.velocity.x !== 0) {
      this.state = PLAYER_STATE.MOVE;
    }

    if (this.velocity.y < 0) {
      this.state = PLAYER_STATE.JUMP;
    }

    if (this.velocity.y > 0) {
      this.state = PLAYER_STATE.FALL;
    }
  }

  drawPlayer(context: CanvasRenderingContext2D) {    
    context.fillStyle = "rgba(0,255,0,0.5)";
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}