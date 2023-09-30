import { Coords, SpriteInfo } from "../types";

export class Sprite {
  image: HTMLImageElement;
  spritePosition: Coords;
  isLoaded: boolean;
  width: number;
  height: number;

  constructor({ position = {x: 0, y: 0}, imageSrc, framesCount = 1 }: SpriteInfo) {
    this.spritePosition = position;
    this.image = new Image();
    this.image.src = imageSrc;
    this.isLoaded = false;

    this.image.onload = () => {
      this.isLoaded = true;
      this.width = this.image.width;
      this.height = this.image.height;
    }
  }
}