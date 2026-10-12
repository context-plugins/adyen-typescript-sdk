import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Logical device located on a Sale Terminal or a POI Terminal, in terms of class of information to
 * output (display, print, or store), or input (keyboard) for the Cashier or the Customer. Possible
 * values:
 * * **CashierDisplay**
 * * **CashierInput**
 * * **CustomerDisplay**
 * * **CustomerInput**
 */
export const Device11 = {
  CashierDisplay: "CashierDisplay",
  CustomerDisplay: "CustomerDisplay",
  CashierInput: "CashierInput",
  CustomerInput: "CustomerInput",
} as const;
export type Device11 = (typeof Device11)[keyof typeof Device11] | (string & {});

export const device11Schema: EnumSchema<Device11> = s.enumOf<Device11>(Device11);
