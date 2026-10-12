import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Details to provide if `type` is **swish**.
 *  - This field is required only if you have a contract with Swish. Swish handles settlement
 *    directly with you (not through Adyen).
 *  - If not specified then it's assumed that you are using Adyen's contract with Swish.You don't
 *    have a direct relationship with Swish.
 */
export type SwishInfo2 = {
  /** Swish number. Format: 10 digits without spaces. For example, **1231111111**. */
  swishNumber: string;
};

export const swishInfo2Schema: Schema<SwishInfo2> = s.object<SwishInfo2>({
  swishNumber: s.string(),
});
