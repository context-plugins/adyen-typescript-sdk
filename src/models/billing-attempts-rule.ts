import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
