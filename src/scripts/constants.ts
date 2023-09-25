// ====== GAME VARIABLES ======
export const NO_TIMER_VALUE = "no-timer";
export const FPS = 1000 / 60;
export const SCREEN_WIDTH = 1024;
export const SCREEN_HEIGHT = 576;

export const RIGHT_BOUND = 624;
export const LEFT_BOUND = 200;

// ширина и высота тайла в пикселях
export const TILE_WIDTH = 32;
export const TILE_HEIGHT = 32;

// количество тайлов в уровне в ширину
export const FIELD_WIDTH = 32;
export const WIDE_FIELD_WIDTH = 64;


export const GAME_STATE = {
  MENU: "Menu",
  GAMEPLAY: "Gameplay",
}

// ====== PLAYER VARIABLES ======
export const PLAYER_SPEED = 5;
export const JUMP_FORCE = -12;
// размеры игрока в пикселях
export const PLAYER_WIDTH = 31;
export const PLAYER_HEIGHT = 31;

// клавиши управления
export const KEYS = {
  DOWN: "KeyS",
  LEFT: "KeyA",
  RIGHT: "KeyD",
  JUMP: "KeyW",
  PAUSE: "Escape"
}

// состояния персонажа
export const PLAYER_STATE = {
  IDLE: "Idle",
  MOVE: "Move",
  ATTACK: "Attack",
}