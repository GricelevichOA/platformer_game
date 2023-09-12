// game vars
export const NO_TIMER_VALUE = "no-timer";
export const FPS = 1000 / 60;
export const SCREEN_WIDTH = 1024;
export const SCREEN_HEIGHT = 576;

// player vars
export const PLAYER_SPEED = 5;
export const JUMP_FORCE = -20;
export const PLAYER_WIDTH = 64;
export const PLAYER_HEIGHT = 64;

// movement keys
export const KEYS = {
  UP: "KeyW",
  DOWN: "KeyS",
  LEFT: "KeyA",
  RIGHT: "KeyD",
  JUMP: "Space",
}

export const PLAYER_STATE = {
  IDLE: "Idle",
  MOVE: "Move",
  ATTACK: "Attack",
}