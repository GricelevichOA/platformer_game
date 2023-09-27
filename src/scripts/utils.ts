import { CollisionBlock } from "./Classes/CollisionBlock";
import { FIELD_WIDTH, TILE_HEIGHT, TILE_WIDTH } from "./constants";

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
      if (symbol === 36) {
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
}