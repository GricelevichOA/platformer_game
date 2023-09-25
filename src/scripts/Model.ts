import { Level } from "./Level";
import { Player } from "./Player";
import {
  GAME_STATE,
  PLAYER_SPEED,
  SCREEN_HEIGHT,
  JUMP_FORCE,
  TILE_WIDTH,
  PLAYER_WIDTH,
  RIGHT_BOUND,
  LEFT_BOUND,
} from "./constants";
import { testLevel, testLevelWide } from "./data/levels_data";

export class Model {
  currentLevel: Level | null;
  gameState: string;

  player: Player;

  constructor() {
    this.gameState = GAME_STATE.MENU;
    this.currentLevel = testLevelWide;

    this.player = new Player();

    console.log(this.currentLevel);
  }

  updatePosition() {
    // console.log(this.player.position);
    
    this.player.position.x += this.player.velocity.x * PLAYER_SPEED;
    // check horizontal collision
    const collisions = this.currentLevel.collisions;
    for (let i = 0; i < collisions.length; i++) {
      const collision = collisions[i];
      if (
        this.player.position.x <= collision.position.x + collision.width &&
        this.player.position.x + this.player.width >= collision.position.x &&
        this.player.position.y + this.player.height >= collision.position.y &&
        this.player.position.y <= collision.position.y + collision.height
      ) {
        if (this.player.velocity.x < 0) {
          this.player.position.x =
            collision.position.x + collision.width + 0.01;
          break;
        }

        if (this.player.velocity.x > 0) {
          this.player.position.x =
            collision.position.x - this.player.width - 0.01;
          break;
        }
      }
    }

    this.applyGravity();

    // check vertical collisions
    for (let i = 0; i < collisions.length; i++) {
      const collision = collisions[i];
      if (
        this.player.position.x <= collision.position.x + collision.width &&
        this.player.position.x + this.player.width >= collision.position.x &&
        this.player.position.y + this.player.height >= collision.position.y &&
        this.player.position.y <= collision.position.y + collision.height
      ) {
        if (this.player.velocity.y < 0) {
          this.player.velocity.y = 0;
          this.player.position.y =
            collision.position.y + collision.height + 0.01;
          break;
        }

        if (this.player.velocity.y > 0) {
          this.player.velocity.y = 0;
          this.player.position.y =
            collision.position.y - this.player.height - 0.01;

          if (!this.player.canJump) {
            this.player.canJump = true;
          }
          break;
        }
      }
    }

    console.log(this.player.position.x);
    

    for (let i = 0; i < collisions.length; i++) {
      const collision = collisions[i];

      if (this.player.position.x >= RIGHT_BOUND) {
        this.player.position.x = RIGHT_BOUND;
        collision.position.x -= this.player.velocity.x * PLAYER_SPEED;
      }

      if (this.player.position.x <= LEFT_BOUND) {
        this.player.position.x = LEFT_BOUND;
        collision.position.x -= this.player.velocity.x * PLAYER_SPEED;
      }
    }

  }

  applyGravity() {
    this.player.velocity.y += 1;
    this.player.position.y += this.player.velocity.y;
  }

  jump() {
    if (this.player.canJump) {
      this.player.canJump = false;
      this.player.velocity.y = JUMP_FORCE;
    }
  }
}
