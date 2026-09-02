import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Device3 = {
  CashierDisplay: "CashierDisplay",
  CustomerDisplay: "CustomerDisplay",
  CashierInput: "CashierInput",
  CustomerInput: "CustomerInput",
} as const;
export type Device3 = (typeof Device3)[keyof typeof Device3] | (string & {});

export const device3Schema: EnumSchema<Device3> = s.enumOf<Device3>(Device3);
