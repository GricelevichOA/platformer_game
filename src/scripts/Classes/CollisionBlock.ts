import { TILE_HEIGHT, TILE_WIDTH } from "../constants";
import { Coords } from "../types";

export class CollisionBlock {
  position: Coords;
  width: number;
  height: number;

  constructor({position}: any) {
    this.position = position;
    this.width = TILE_WIDTH;
    this.height = TILE_HEIGHT;
  }

  draw(cx: CanvasRenderingContext2D) {
    cx.fillStyle = "rgba(255, 0, 0, 0.5)";
    cx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}