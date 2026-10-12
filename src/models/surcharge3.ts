import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Books the surcharge amount to the specified balance account.
 *
 * Possible values: **addToLiableAccount**, **addToOneBalanceAccount**
 */
export const Surcharge3 = {
  AddToLiableAccount: "addToLiableAccount",
  AddToOneBalanceAccount: "addToOneBalanceAccount",
} as const;
export type Surcharge3 = (typeof Surcharge3)[keyof typeof Surcharge3] | (string & {});

export const surcharge3Schema: EnumSchema<Surcharge3> = s.enumOf<Surcharge3>(Surcharge3);
