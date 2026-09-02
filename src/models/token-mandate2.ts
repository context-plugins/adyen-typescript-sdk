import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountRuleSchema, type AmountRule } from "./amount-rule.js";
import { billingAttemptsRuleSchema, type BillingAttemptsRule } from "./billing-attempts-rule.js";
import { frequencySchema, type Frequency } from "./frequency.js";
import { retryPolicySchema, type RetryPolicy } from "./retry-policy.js";

export type TokenMandate2 = {
  accountIdType?: string;
  amount: string;
  amountRule?: AmountRule;
  billingAttemptsRule?: BillingAttemptsRule;
  billingDay?: string;
  count?: string;
  currency: string;
  endsAt: string;
  frequency: Frequency;
  mandateId: string;
  maskedAccountId?: string;
  minAmount?: string;
  providerId: string;
  recurringAmount?: string;
  recurringStatement?: string;
  remarks?: string;
  retryPolicy?: RetryPolicy;
  startsAt?: string;
  status: string;
  txVariant: string;
};

export const tokenMandate2Schema: Schema<TokenMandate2> = s.object<TokenMandate2>({
  accountIdType: s.optional(s.string()),
  amount: s.string(),
  amountRule: s.optional(s.lazy(() => amountRuleSchema)),
  billingAttemptsRule: s.optional(s.lazy(() => billingAttemptsRuleSchema)),
  billingDay: s.optional(s.string()),
  count: s.optional(s.string()),
  currency: s.string(),
  endsAt: s.string(),
  frequency: frequencySchema,
  mandateId: s.string(),
  maskedAccountId: s.optional(s.string()),
  minAmount: s.optional(s.string()),
  providerId: s.string(),
  recurringAmount: s.optional(s.string()),
  recurringStatement: s.optional(s.string()),
  remarks: s.optional(s.string()),
  retryPolicy: s.optional(s.lazy(() => retryPolicySchema)),
  startsAt: s.optional(s.string()),
  status: s.string(),
  txVariant: s.string(),
});
