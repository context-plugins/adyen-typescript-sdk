import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ScreenDimensions = {
  height?: number;
  width?: number;
};

export const screenDimensionsSchema: Schema<ScreenDimensions> = s.object<ScreenDimensions>({
  height: s.optional(s.number()),
  width: s.optional(s.number()),
});
