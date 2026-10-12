import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AreaSize = {
  /**
   * Abscissa of a point coordinates. The hexadecimal value in text of the abscissa of the
   * coordinates of a point. Leading zero can be removed (e.g. 3BC, 0, and 1287).
   */
  x: string;
  /**
   * Ordinate of a point coordinates. The hexadecimal value in text of the ordinate of the
   * coordinates of a point. Leading zero can be removed (e.g. 3BC, 0, and 1287).
   */
  y: string;
};

export const areaSizeSchema: Schema<AreaSize> = s.object<AreaSize>({
  x: s.string(),
  y: s.string(),
  _keysMap: {
    x: "X",
    y: "Y",
  },
});
