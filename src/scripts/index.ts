import "../styles.css";

import { View } from "./Classes/View";
import { Model } from "./Classes/Model";
import { Controller } from "./Classes/Controller";

import { FPS, GAME_STATE, KEYS, NO_TIMER_VALUE } from "./constants";
import { addLevelsToMenu, backToMainMenu } from "./utils";

// VARIABLES
const view = new View("game");
const model = new Model();
const controller = new Controller(model, view);

const startButton = document.querySelector("#start-game");
const selectLevelButton = document.querySelector("#select-level");
const showControlButtons = document.querySelector("#show-controls")

const mainMenu = document.querySelector(".menu__main");
const pauseMenu = document.querySelector(".menu__pause");
const levelsMenu = document.querySelector(".menu__levels");
const controlsMenu = document.querySelector(".menu__controls");

let intervalId: string | ReturnType<typeof setTimeout> = NO_TIMER_VALUE;

// EVENT LISTENERS
// управление
window.addEventListener("keydown", (e) => {
  switch (e.code) {
    case KEYS.RIGHT:
      controller.setPlayerVelocityX(1);
      break;
    case KEYS.LEFT:
      controller.setPlayerVelocityX(-1);
      break;
    case KEYS.JUMP:
      controller.handlePlayerJump();
      break;
    case KEYS.PAUSE:
      if (model.gameState !== GAME_STATE.MENU) {
        if (intervalId === NO_TIMER_VALUE) {
          pauseMenu.classList.add("hidden");
          intervalId = setInterval(() => {
            controller.step();
          }, FPS); 
        } else {
          console.log("game paused");   
          pauseMenu.classList.remove("hidden");   
          clearInterval(intervalId);
          intervalId = NO_TIMER_VALUE;
        }
      }  
      break
    default:
      break;
  }
});

window.addEventListener("keyup", (e) => {
  if (e.code === KEYS.RIGHT || e.code === KEYS.LEFT) {
    controller.setPlayerVelocityX(0);
  }
});

// меню
// начать игру
startButton.addEventListener("click", () => {
  if (intervalId === NO_TIMER_VALUE) {
    controller.start();
    intervalId = setInterval(() => {
      controller.step();
      mainMenu.classList.add("hidden");
    }, FPS); 
  }
});

// открыть меню выбора уровня
selectLevelButton.addEventListener("click", () => {
  mainMenu.classList.add("hidden");
  levelsMenu.classList.remove("hidden");
});

// выбор уровня из меню
document.addEventListener("DOMContentLoaded", () => {
  addLevelsToMenu();
  levelsMenu.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;

    if (target.hasAttribute("data-level")) {
      levelsMenu.classList.add("hidden");
      controller.loadLevel(parseInt(target.dataset.level));      
      intervalId = setInterval(() => {
        controller.step();
        mainMenu.classList.add("hidden");
      }, FPS);
    }
  });

  document.body.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;

    if (target.classList.contains("menu__back")) {
      backToMainMenu(target);
    }
  });

});

showControlButtons.addEventListener("click", () => {
  controlsMenu.classList.remove("hidden");
  mainMenu.classList.add("hidden");
});

document.addEventListener("reset", (e) => {
  e.preventDefault();
})