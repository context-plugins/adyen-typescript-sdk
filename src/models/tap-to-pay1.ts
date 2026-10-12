import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Settings for Tap to Pay. */
export type TapToPay1 = {
  /** The text shown on the screen during the Tap to Pay transaction. */
  merchantDisplayName?: string;
};

export const tapToPay1Schema: Schema<TapToPay1> = s.object<TapToPay1>({
  merchantDisplayName: s.optional(s.string()),
});
