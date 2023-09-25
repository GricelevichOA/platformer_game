import { CollisionBlock } from "./CollisionBlock";
import { FIELD_WIDTH, TILE_HEIGHT, TILE_WIDTH } from "./constants";

export function parseCollisions(data: number[]) {
  const rows: any[] = [];
  for (let i = 0; i < data.length; i += FIELD_WIDTH) {
    rows.push(data.slice(i, i + FIELD_WIDTH));
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