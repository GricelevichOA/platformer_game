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
} from "../constants";

export class Model {
  currentLevel: Level;
  gameState: string;
  player: Player;
  offset: number;

  state: any;

  constructor() {
    this.gameState = GAME_STATE.MENU;
    this.currentLevel = null;
    this.player = null;

    this.state = document.querySelector("#status");
    
  }

  updatePosition() {        
    // player
    this.player.position.x += this.player.velocity.x * PLAYER_SPEED;
    this.player.updateState();
    
    
    // physics
    this.checForkHorizontalCollisions();
    this.applyGravity();
    this.checkForVerticalCollisions();


    // shift level
    this.shiftLevel();

    this.state.innerText = `
      game status = ${this.gameState}
      player pos x = ${this.player.position.x}
      player pos y = ${this.player.position.y}
      player can jump = ${this.player.canJump}
      player state = ${this.player.state}
    `
  }

  jump() {
    if (this.player.canJump) {
      this.player.canJump = false;
      this.player.velocity.y = JUMP_FORCE;
    }
  }

  private applyGravity() {
    this.player.velocity.y += 1;
    this.player.position.y += this.player.velocity.y;
  }

  private checForkHorizontalCollisions() {
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
          this.player.position.x = collision.position.x + collision.width + 0.01;
          break;
        }

        if (this.player.velocity.x > 0) {
          this.player.position.x = collision.position.x - this.player.width - 0.01;
          break;
        }
      }
    }
  }

  private checkForVerticalCollisions() {
    const collisions = this.currentLevel.collisions;
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
          this.player.position.y = collision.position.y + collision.height + 0.01;
          break;
        }

        if (this.player.velocity.y > 0) {
          this.player.velocity.y = 0;
          this.player.position.y = collision.position.y - this.player.height - 0.01;

          // если игрок касается земли, то может снова прыгать
          if (!this.player.canJump) {
            this.player.canJump = true;
          }
          break;
        }
      }
    }
  }

  private shiftLevel() {
    const collisions = this.currentLevel.collisions;
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
}
