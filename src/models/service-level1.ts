import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies the service level (settlement type) of this payment method. Required for merchants
 * operating in Japan. Possible values:
 *  * **noContract**: Adyen holds the contract with JCB.
 *  * **gatewayContract**: JCB receives the settlement and handles disputes, then pays out to you or
 *    your sub-merchant directly.
 */
export const ServiceLevel1 = {
  NoContract: "noContract",
  GatewayContract: "gatewayContract",
} as const;
export type ServiceLevel1 = (typeof ServiceLevel1)[keyof typeof ServiceLevel1] | (string & {});

export const serviceLevel1Schema: EnumSchema<ServiceLevel1> = s.enumOf<ServiceLevel1>(ServiceLevel1);
