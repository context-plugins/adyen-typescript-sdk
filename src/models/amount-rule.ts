import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The limitation rule of the billing amount.
 *
 * Possible values:
 *  * **max**: The transaction amount can not exceed the `amount`.
 *
 *  * **exact**: The transaction amount should be the same as the `amount`.
 */
export const AmountRule = {
  Max: "max",
  Exact: "exact",
} as const;
export type AmountRule = (typeof AmountRule)[keyof typeof AmountRule] | (string & {});

export const amountRuleSchema: EnumSchema<AmountRule> = s.enumOf<AmountRule>(AmountRule);
