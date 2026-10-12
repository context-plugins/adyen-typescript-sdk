import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountRuleSchema, type AmountRule } from "./amount-rule.js";
import { billingAttemptsRuleSchema, type BillingAttemptsRule } from "./billing-attempts-rule.js";
import { frequencySchema, type Frequency } from "./frequency.js";

/** The mandate details to initiate recurring transaction. */
export type Mandate = {
  /** The billing amount (in minor units) of the recurring transactions. */
  amount: string;
  /**
   * The limitation rule of the billing amount.
   *
   * Possible values:
   *  * **max**: The transaction amount can not exceed the `amount`.
   *
   *  * **exact**: The transaction amount should be the same as the `amount`.
   */
  amountRule?: AmountRule;
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
  billingAttemptsRule?: BillingAttemptsRule;
  /**
   * The number of the day, on which the recurring debit can happen. Should be within the same
   * calendar month as the mandate recurring date.
   *
   * Possible values: 1-31 based on the `frequency`.
   */
  billingDay?: string;
  /** The number of transactions that can be performed within the given frequency. */
  count?: string;
  /** End date of the billing plan, in YYYY-MM-DD format. */
  endsAt: string;
  /**
   * The frequency with which a shopper should be charged.
   *
   * Possible values: **adhoc**, **daily**, **weekly**, **biWeekly**, **monthly**, **quarterly**,
   * **halfYearly**, **yearly**.
   */
  frequency: Frequency;
  /** The message shown by UPI to the shopper on the approval screen. */
  remarks?: string;
  /** Start date of the billing plan, in YYYY-MM-DD format. By default, the transaction date. */
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
