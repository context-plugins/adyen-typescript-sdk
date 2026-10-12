import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Defines the logic for booking the markup paid by the customer for Dynamic Currency Conversion
 * (DCC).
 *
 * > This field is in pilot phase, and not yet available for all platforms.
 */
export type SplitDcc2 = {
  accountHolderPercentage?: number;
};

export const splitDcc2Schema: Schema<SplitDcc2> = s.object<SplitDcc2>({
  accountHolderPercentage: s.optional(s.int()),
});
