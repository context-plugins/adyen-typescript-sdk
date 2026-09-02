import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ServiceLevel2 = {
  NoContract: "noContract",
  GatewayContract: "gatewayContract",
  PaymentDesignatorContract: "paymentDesignatorContract",
} as const;
export type ServiceLevel2 = (typeof ServiceLevel2)[keyof typeof ServiceLevel2] | (string & {});

export const serviceLevel2Schema: EnumSchema<ServiceLevel2> = s.enumOf<ServiceLevel2>(ServiceLevel2);
