import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Point = {
  x: string;
  y: string;
};

export const pointSchema: Schema<Point> = s.object<Point>({
  x: s.string(),
  y: s.string(),
  _keysMap: {
    x: "X",
    y: "Y",
  },
});
