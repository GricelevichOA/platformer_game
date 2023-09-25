import { Model } from "./Model";
import { Sprite } from "./Sprite";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "./constants";


export class View {
  public canvas: HTMLCanvasElement;
  public context: CanvasRenderingContext2D;
  public currentLevel: Sprite;

  constructor(canvasId: string) {
    this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    this.context = this.canvas.getContext("2d");

    this.canvas.width = SCREEN_WIDTH;
    this.canvas.height = SCREEN_HEIGHT;

    this.currentLevel = new Sprite({
      position: {
        x: 0,
        y: 0
      },
      imageSrc: "../../images/test_level.png",
    });
  }

  updatePosition(model: Model) {
    // level
    // отрисовка фона
    this.context.drawImage(model.currentLevel.background.image, this.currentLevel.position.x, this.currentLevel.position.y);
    // отрисовка коллизий
    model.currentLevel.collisions.forEach(block => {
      block.draw(this.context);
    })
    
    // player
    this.context.fillStyle = "grey";
    this.context.fillRect(model.player.position.x, model.player.position.y, model.player.width, model.player.height);
  }
}