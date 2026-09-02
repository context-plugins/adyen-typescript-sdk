import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AreaSize = {
  x: string;
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
