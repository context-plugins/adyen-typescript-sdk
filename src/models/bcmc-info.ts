import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BcmcInfo = {
  /**
   * Indicates if [Bancontact
   * mobile](https://docs.adyen.com/payment-methods/bancontact/bancontact-mobile) is enabled.
   */
  enableBcmcMobile?: boolean;
};

export const bcmcInfoSchema: Schema<BcmcInfo> = s.object<BcmcInfo>({
  enableBcmcMobile: s.optional(s.boolean()),
});
