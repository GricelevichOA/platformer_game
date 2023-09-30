import { CollisionBlock } from "./Classes/CollisionBlock";
import { FIELD_WIDTH, TILE_HEIGHT, TILE_WIDTH } from "./constants";
import { levels } from "./data/levels_data";

export function parseCollisions(data: number[], width: number) {
  const rows: any[] = [];
  for (let i = 0; i < data.length; i += width) {
    rows.push(data.slice(i, i + width));
  }

  return rows;
}

export function createCollisionBlocks(array: any[]) {
  const output: CollisionBlock[] = [];

  array.forEach((row, y) => {
    row.forEach((symbol: number, x: number) => {
      if (symbol === 1) {
        // add collision to collisions array
        output.push(new CollisionBlock({
          position: {
            x: x * TILE_WIDTH,
            y: y * TILE_HEIGHT,
          }
        }))
      }
    })
  });

  return output;
};

export function addLevelsToMenu() {
  const levelsMenu = document.querySelector(".menu__levels");

  levels.forEach((level, index) => {
    const menuItem = document.createElement("button");
    menuItem.classList.add("menu__item");
    menuItem.dataset.level = index.toString();
    menuItem.innerText = `Level ${index + 1}`;

    levelsMenu.append(menuItem);
  });
}

export function backToMainMenu(elem: HTMLElement) {
  const mainMenu = document.querySelector(".menu__main");
  elem.parentElement.classList.add("hidden");
  mainMenu.classList.remove("hidden");
}