import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AreaSize1 = {
  x: string;
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
