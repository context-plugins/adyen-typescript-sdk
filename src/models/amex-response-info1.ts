import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** **amex** details */
export type AmexResponseInfo1 = {
  /** Merchant ID (MID) number. */
  midNumber?: string;
  /**
   * Indicates whether the Amex Merchant ID is reused from a previously setup Amex payment method.
   */
  reuseMidNumber?: boolean;
  /**
   * The service level (settlement type) of this payment method. Possible values:
   * * **noContract**: Adyen holds the contract with American Express.
   * * **gatewayContract**: American Express receives the settlement and handles disputes, then pays
   *   out to you or your sub-merchant directly.
   * * **paymentDesignatorContract**: Adyen receives the settlement, and handles disputes and
   *   payouts.
   */
  serviceLevel?: string;
};

export const amexResponseInfo1Schema: Schema<AmexResponseInfo1> = s.object<AmexResponseInfo1>({
  midNumber: s.optional(s.string()),
  reuseMidNumber: s.optional(s.boolean()),
  serviceLevel: s.optional(s.string()),
});
