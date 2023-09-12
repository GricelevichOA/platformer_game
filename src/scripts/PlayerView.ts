import { PlayerModel } from "./PlayerModel";

export class PlayerView {
  public canvas: HTMLCanvasElement;
  public context: CanvasRenderingContext2D;
  private model: PlayerModel;

  constructor(canvasId: string, playerModel: PlayerModel) {
    this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    this.context = this.canvas.getContext("2d");
    this.model = playerModel;
  }

  drawPlayer() {
    this.context.fillStyle = "red";
    this.context.fillRect(this.model.position.x, this.model.position.y, this.model.height, this.model.width);
  }
}