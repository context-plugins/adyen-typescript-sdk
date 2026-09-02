import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountRuleSchema, type AmountRule } from "./amount-rule.js";
import { billingAttemptsRuleSchema, type BillingAttemptsRule } from "./billing-attempts-rule.js";
import { frequencySchema, type Frequency } from "./frequency.js";

export type Mandate = {
  amount: string;
  amountRule?: AmountRule;
  billingAttemptsRule?: BillingAttemptsRule;
  billingDay?: string;
  count?: string;
  endsAt: string;
  frequency: Frequency;
  remarks?: string;
  startsAt?: string;
};

export const mandateSchema: Schema<Mandate> = s.object<Mandate>({
  amount: s.string(),
  amountRule: s.optional(s.lazy(() => amountRuleSchema)),
  billingAttemptsRule: s.optional(s.lazy(() => billingAttemptsRuleSchema)),
  billingDay: s.optional(s.string()),
  count: s.optional(s.string()),
  endsAt: s.string(),
  frequency: frequencySchema,
  remarks: s.optional(s.string()),
  startsAt: s.optional(s.string()),
});
