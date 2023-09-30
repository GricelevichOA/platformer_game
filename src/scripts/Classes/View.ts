import { Model } from "./Model";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants";


export class View {
  public canvas: HTMLCanvasElement;
  public context: CanvasRenderingContext2D;

  constructor(canvasId: string) {
    this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    this.context = this.canvas.getContext("2d");

    this.canvas.width = SCREEN_WIDTH;
    this.canvas.height = SCREEN_HEIGHT;
  }

  update(model: Model) {
    // level
    // отрисовка фона
    // this.context.drawImage(model.currentLevel.background.image, model.currentLevel.background.spritePosition.x, model.currentLevel.background.spritePosition.y);
    this.context.fillStyle = "rgba(0, 0, 0, 0.6)";
    this.context.fillRect(model.currentLevel.background.spritePosition.x, model.currentLevel.background.spritePosition.y, this.canvas.width, this.canvas.height);
    // отрисовка коллизий
    model.currentLevel.collisions.forEach(block => {
      block.draw(this.context);
    })
    
    // player
    // model.player.drawPlayer(this.context);
    this.context.fillStyle = 'green';
    this.context.fillRect(model.player.position.x, model.player.position.y, model.player.width, model.player.height);

  }
}