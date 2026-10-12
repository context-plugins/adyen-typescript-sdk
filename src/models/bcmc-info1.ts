import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Details to provide if `type` is **bcmc** (Bancontact). */
export type BcmcInfo1 = {
  /**
   * Indicates if [Bancontact
   * mobile](https://docs.adyen.com/payment-methods/bancontact/bancontact-mobile) is enabled.
   */
  enableBcmcMobile?: boolean;
};

export const bcmcInfo1Schema: Schema<BcmcInfo1> = s.object<BcmcInfo1>({
  enableBcmcMobile: s.optional(s.boolean()),
});
