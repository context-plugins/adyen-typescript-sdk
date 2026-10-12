import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { serviceLevelSchema, type ServiceLevel } from "./service-level.js";

/**
 * Details to provide if `type` is **amex**. For merchants operating in Australia, New Zealand &
 * Canada, JCB and American Express are automatically requested together.
 */
export type AmexInfo1 = {
  /**
   * Merchant ID (MID) number. Format: 10 numeric characters. You must provide this field when you
   * request `gatewayContract` or `paymentDesignatorContract` service levels.
   */
  midNumber?: string;
  /**
   * Indicates whether the Amex Merchant ID is reused from a previously setup Amex payment method.
   * This is only applicable for `gatewayContract` and `paymentDesignatorContract` service levels.
   * The default value is **false**.
   *
   * @default false
   */
  reuseMidNumber?: boolean;
  /**
   * Specifies the service level (settlement type) of this payment method. Possible values:
   * * **noContract**: Adyen holds the contract with American Express.
   * * **gatewayContract**: American Express receives the settlement and handles disputes, then pays
   *   out to you or your sub-merchant directly.
   * * **paymentDesignatorContract**: Adyen receives the settlement, and handles disputes and
   *   payouts.
   */
  serviceLevel: ServiceLevel;
};

export const amexInfo1Schema: Schema<AmexInfo1> = s.object<AmexInfo1>({
  midNumber: s.optional(s.string()),
  reuseMidNumber: s.defaulted(s.boolean(), false),
  serviceLevel: serviceLevelSchema,
});
