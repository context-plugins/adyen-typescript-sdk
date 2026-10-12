import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Details to provide if `type` is **vipps**. */
export type VippsInfo2 = {
  /** Vipps logo. Format: Base64-encoded string. */
  logo: string;
  /**
   * Vipps subscription cancel url (required in case of [recurring
   * payments](https://docs.adyen.com/online-payments/tokenization))
   */
  subscriptionCancelUrl?: string;
};

export const vippsInfo2Schema: Schema<VippsInfo2> = s.object<VippsInfo2>({
  logo: s.string(),
  subscriptionCancelUrl: s.optional(s.string()),
});
