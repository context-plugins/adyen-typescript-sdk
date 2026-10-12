import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SwishInfo = {
  /** Swish number. Format: 10 digits without spaces. For example, **1231111111**. */
  swishNumber: string;
};

export const swishInfoSchema: Schema<SwishInfo> = s.object<SwishInfo>({
  swishNumber: s.string(),
});
