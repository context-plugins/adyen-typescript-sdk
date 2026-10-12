import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VippsInfo = {
  /** Vipps logo. Format: Base64-encoded string. */
  logo: string;
  /**
   * Vipps subscription cancel url (required in case of [recurring
   * payments](https://docs.adyen.com/online-payments/tokenization))
   */
  subscriptionCancelUrl?: string;
};

export const vippsInfoSchema: Schema<VippsInfo> = s.object<VippsInfo>({
  logo: s.string(),
  subscriptionCancelUrl: s.optional(s.string()),
});
