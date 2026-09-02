import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AddrMatch1 = {
  Y: "Y",
  N: "N",
} as const;
export type AddrMatch1 = (typeof AddrMatch1)[keyof typeof AddrMatch1] | (string & {});

export const addrMatch1Schema: EnumSchema<AddrMatch1> = s.enumOf<AddrMatch1>(AddrMatch1);
