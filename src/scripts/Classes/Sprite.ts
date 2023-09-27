import { SpriteInfo } from "../types";

export class Sprite {
  image: HTMLImageElement;
  position: any;
  isLoaded: boolean;

  constructor({ position, imageSrc }: SpriteInfo) {
    this.position = position;
    this.image = new Image();
    this.image.src = imageSrc;
    this.isLoaded = false;

    this.image.onload = () => {
      this.isLoaded = true;
    }
  }
}