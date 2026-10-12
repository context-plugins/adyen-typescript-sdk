import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SwishResponseInfo = {
  /** Swish number. Format: 10 digits without spaces. For example, **1231111111**. */
  swishNumber?: string;
};

export const swishResponseInfoSchema: Schema<SwishResponseInfo> = s.object<SwishResponseInfo>({
  swishNumber: s.optional(s.string()),
});
