import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Books the tips (gratuity) to the specified balance account.
 *
 * Possible values: **addToLiableAccount**, **addToOneBalanceAccount**.
 */
export const Tip = {
  AddToLiableAccount: "addToLiableAccount",
  AddToOneBalanceAccount: "addToOneBalanceAccount",
} as const;
export type Tip = (typeof Tip)[keyof typeof Tip] | (string & {});

export const tipSchema: EnumSchema<Tip> = s.enumOf<Tip>(Tip);
