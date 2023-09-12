import { SCREEN_HEIGHT, SCREEN_WIDTH } from "./constants";


export class View {
  public canvas: HTMLCanvasElement;
  public context: CanvasRenderingContext2D;

  constructor(canvasId: string) {
    this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    this.context = this.canvas.getContext("2d");
  }

  drawCanvas() {
    this.canvas.width = SCREEN_WIDTH;
    this.canvas.height = SCREEN_HEIGHT;

    this.context.fillStyle = "white";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
}