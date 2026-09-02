import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Device2 = {
  CashierDisplay: "CashierDisplay",
  CustomerDisplay: "CustomerDisplay",
  CashierInput: "CashierInput",
  CustomerInput: "CustomerInput",
} as const;
export type Device2 = (typeof Device2)[keyof typeof Device2] | (string & {});

export const device2Schema: EnumSchema<Device2> = s.enumOf<Device2>(Device2);
