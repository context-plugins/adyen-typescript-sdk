import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ServiceLevel = {
  NoContract: "noContract",
  GatewayContract: "gatewayContract",
  PaymentDesignatorContract: "paymentDesignatorContract",
} as const;
export type ServiceLevel = (typeof ServiceLevel)[keyof typeof ServiceLevel] | (string & {});

export const serviceLevelSchema: EnumSchema<ServiceLevel> = s.enumOf<ServiceLevel>(ServiceLevel);
