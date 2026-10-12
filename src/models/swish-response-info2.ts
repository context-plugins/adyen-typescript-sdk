import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** **swish** or its variant details */
export type SwishResponseInfo2 = {
  /** Swish number. Format: 10 digits without spaces. For example, **1231111111**. */
  swishNumber?: string;
};

export const swishResponseInfo2Schema: Schema<SwishResponseInfo2> = s.object<SwishResponseInfo2>({
  swishNumber: s.optional(s.string()),
});
