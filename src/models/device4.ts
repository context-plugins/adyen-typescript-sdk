import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Device4 = {
  CashierDisplay: "CashierDisplay",
  CustomerDisplay: "CustomerDisplay",
  CashierInput: "CashierInput",
  CustomerInput: "CustomerInput",
} as const;
export type Device4 = (typeof Device4)[keyof typeof Device4] | (string & {});

export const device4Schema: EnumSchema<Device4> = s.enumOf<Device4>(Device4);
