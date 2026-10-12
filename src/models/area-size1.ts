import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Size of an area. Contain the size of the pad area where the signature is written, given with the
 * maximum abscissa and ordinate values (X and Y). The maximum value is FFFF.
 */
export type AreaSize1 = {
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

export const areaSize1Schema: Schema<AreaSize1> = s.object<AreaSize1>({
  x: s.string(),
  y: s.string(),
  _keysMap: {
    x: "X",
    y: "Y",
  },
});
