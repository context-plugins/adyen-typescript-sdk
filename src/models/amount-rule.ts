import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AmountRule = {
  Max: "max",
  Exact: "exact",
} as const;
export type AmountRule = (typeof AmountRule)[keyof typeof AmountRule] | (string & {});

export const amountRuleSchema: EnumSchema<AmountRule> = s.enumOf<AmountRule>(AmountRule);
