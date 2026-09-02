import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Device11 = {
  CashierDisplay: "CashierDisplay",
  CustomerDisplay: "CustomerDisplay",
  CashierInput: "CashierInput",
  CustomerInput: "CustomerInput",
} as const;
export type Device11 = (typeof Device11)[keyof typeof Device11] | (string & {});

export const device11Schema: EnumSchema<Device11> = s.enumOf<Device11>(Device11);
