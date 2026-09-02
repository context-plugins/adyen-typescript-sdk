import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ServiceLevel1 = {
  NoContract: "noContract",
  GatewayContract: "gatewayContract",
} as const;
export type ServiceLevel1 = (typeof ServiceLevel1)[keyof typeof ServiceLevel1] | (string & {});

export const serviceLevel1Schema: EnumSchema<ServiceLevel1> = s.enumOf<ServiceLevel1>(ServiceLevel1);
