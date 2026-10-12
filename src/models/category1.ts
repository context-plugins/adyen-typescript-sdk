import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of transfer that results from the sweep.
 *
 * Possible values:
 *
 *  - **bank**: Sweep to a [transfer
 *    instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id).
 *
 * - **internal**: Transfer to another [balance
 *   account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id)
 *   within your platform.
 *
 * Required when setting `priorities`.
 */
export const Category1 = {
  Bank: "bank",
  Internal: "internal",
  PlatformPayment: "platformPayment",
} as const;
export type Category1 = (typeof Category1)[keyof typeof Category1] | (string & {});

export const category1Schema: EnumSchema<Category1> = s.enumOf<Category1>(Category1);
