import { CollisionBlock } from "./CollisionBlock";
import { Coords } from "./types";

export class Level {
  collisions: CollisionBlock[];
  background: string;
  playerStartPos: Coords;
  constructor(collisionBlocks: CollisionBlock[]) {
    this.playerStartPos = { x: 10, y: 10 };
    this.background = "../../images/test_level.png";
    this.collisions = collisionBlocks;
  }
}