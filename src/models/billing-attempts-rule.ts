import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The rule to specify the period, within which the recurring debit can happen, relative to the
 * mandate recurring date.
 *
 * Possible values:
 *
 *  * **on**: On a specific date.
 *
 *  * **before**: Before and on a specific date.
 *
 *  * **after**: On and after a specific date.
 */
export const BillingAttemptsRule = {
  On: "on",
  Before: "before",
  After: "after",
} as const;
export type BillingAttemptsRule =
  | (typeof BillingAttemptsRule)[keyof typeof BillingAttemptsRule]
  | (string & {});

export const billingAttemptsRuleSchema: EnumSchema<BillingAttemptsRule> =
  s.enumOf<BillingAttemptsRule>(BillingAttemptsRule);
