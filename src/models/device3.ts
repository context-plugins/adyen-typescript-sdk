import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Logical device located on a Sale Terminal or a POI Terminal, in term of class of information to
 * output (display, print or store), or input (keyboard) for the Cashier or the Customer. Copy.
 * Possible values:
 * * **CashierDisplay**
 * * **CashierInput**
 * * **CustomerDisplay**
 * * **CustomerInput**
 */
export const Device3 = {
  CashierDisplay: "CashierDisplay",
  CustomerDisplay: "CustomerDisplay",
  CashierInput: "CashierInput",
  CustomerInput: "CustomerInput",
} as const;
export type Device3 = (typeof Device3)[keyof typeof Device3] | (string & {});

export const device3Schema: EnumSchema<Device3> = s.enumOf<Device3>(Device3);
