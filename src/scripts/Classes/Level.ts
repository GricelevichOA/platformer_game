import { CollisionBlock } from "./CollisionBlock";
import { Sprite } from "./Sprite";
import { Coords } from "../types";

export class Level {
  collisions: CollisionBlock[];
  background: Sprite;
  playerStartPos: Coords;

  constructor(collisionBlocks: CollisionBlock[], startPos: Coords, sprite: string) {
    this.playerStartPos = startPos;
    this.background = new Sprite({
      position: {x: 0, y: 0},
      imageSrc: sprite,
      framesCount: 1,
    });
    this.collisions = collisionBlocks;
  }
}