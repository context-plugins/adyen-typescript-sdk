import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Point = {
  /** The hexadecimal value of the coordinates of a point on the abscissa. */
  x: string;
  /** The hexadecimal value of the coordinates of a point on the ordinate. */
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
