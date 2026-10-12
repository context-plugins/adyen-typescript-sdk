import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VippsResponseInfo = {
  /** Vipps logo. Format: Base64-encoded string. */
  logo?: string;
  /**
   * Vipps subscription cancel url (required in case of [recurring
   * payments](https://docs.adyen.com/online-payments/tokenization))
   */
  subscriptionCancelUrl?: string;
};

export const vippsResponseInfoSchema: Schema<VippsResponseInfo> = s.object<VippsResponseInfo>({
  logo: s.optional(s.string()),
  subscriptionCancelUrl: s.optional(s.string()),
});
