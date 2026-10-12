import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** **vipps** details */
export type VippsResponseInfo2 = {
  /** Vipps logo. Format: Base64-encoded string. */
  logo?: string;
  /**
   * Vipps subscription cancel url (required in case of [recurring
   * payments](https://docs.adyen.com/online-payments/tokenization))
   */
  subscriptionCancelUrl?: string;
};

export const vippsResponseInfo2Schema: Schema<VippsResponseInfo2> = s.object<VippsResponseInfo2>({
  logo: s.optional(s.string()),
  subscriptionCancelUrl: s.optional(s.string()),
});
