import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies the service level (settlement type) of this payment method. Required for merchants
 * operating in Japan. Possible values:
 * * **noContract**: Adyen holds the contract with JCB for merchants operating in Japan or American
 *   Express for merchants operating in Canada, Australia and New Zealand.
 * * **gatewayContract**: JCB or American Express receives the settlement and handles disputes, then
 *   pays out to you or your sub-merchant directly.
 * * **paymentDesignatorContract**: Available only for merchants operating in Canada, Australia and
 *   New Zealand. Adyen receives the settlement, and handles disputes and payouts.
 */
export const ServiceLevel2 = {
  NoContract: "noContract",
  GatewayContract: "gatewayContract",
  PaymentDesignatorContract: "paymentDesignatorContract",
} as const;
export type ServiceLevel2 = (typeof ServiceLevel2)[keyof typeof ServiceLevel2] | (string & {});

export const serviceLevel2Schema: EnumSchema<ServiceLevel2> = s.enumOf<ServiceLevel2>(ServiceLevel2);
