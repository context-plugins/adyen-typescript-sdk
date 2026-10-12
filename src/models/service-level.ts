import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies the service level (settlement type) of this payment method. Possible values:
 * * **noContract**: Adyen holds the contract with American Express.
 * * **gatewayContract**: American Express receives the settlement and handles disputes, then pays
 *   out to you or your sub-merchant directly.
 * * **paymentDesignatorContract**: Adyen receives the settlement, and handles disputes and payouts.
 */
export const ServiceLevel = {
  NoContract: "noContract",
  GatewayContract: "gatewayContract",
  PaymentDesignatorContract: "paymentDesignatorContract",
} as const;
export type ServiceLevel = (typeof ServiceLevel)[keyof typeof ServiceLevel] | (string & {});

export const serviceLevelSchema: EnumSchema<ServiceLevel> = s.enumOf<ServiceLevel>(ServiceLevel);
