import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountRuleSchema, type AmountRule } from "./amount-rule.js";
import { billingAttemptsRuleSchema, type BillingAttemptsRule } from "./billing-attempts-rule.js";
import { frequencySchema, type Frequency } from "./frequency.js";
import { retryPolicySchema, type RetryPolicy } from "./retry-policy.js";

export type TokenMandate = {
  /** The type of account identifier for the masked account number. */
  accountIdType?: string;
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
  /**
   * The three-character [ISO currency
   * code](https://docs.adyen.com/development-resources/currency-codes).
   */
  currency: string;
  /** End date of the billing plan, in YYYY-MM-DD format. */
  endsAt: string;
  /**
   * The frequency with which a shopper should be charged.
   *
   * Possible values: **adhoc**, **daily**, **weekly**, **biWeekly**, **monthly**, **quarterly**,
   * **halfYearly**, **yearly**.
   */
  frequency: Frequency;
  /** The unique identifier of the mandate. */
  mandateId: string;
  /** The masked account number associated with the mandate. */
  maskedAccountId?: string;
  /**
   * For a billing plan where the payment amounts are variable, the minimum amount to charge the
   * shopper for each recurring payment. When a shopper approves the billing plan, they can also
   * specify a maximum amount in their banking app.
   */
  minAmount?: string;
  /** The provider-specific identifier for this mandate. */
  providerId: string;
  /**
   * For a billing plan where the payment amount is fixed, the amount the shopper will be charged
   * for each recurring payment.
   */
  recurringAmount?: string;
  /**
   * The text that will be shown on the shopper's bank statement for the recurring payments. We
   * recommend to add a descriptive text about the subscription to let your shoppers recognize your
   * recurring payments. Maximum length: 35 characters.
   */
  recurringStatement?: string;
  /** Additional remarks or notes about the mandate. */
  remarks?: string;
  /** When set to true, you can retry for failed recurring payments. The default value is true. */
  retryPolicy?: RetryPolicy;
  /** Start date of the billing plan, in YYYY-MM-DD format. By default, the transaction date. */
  startsAt?: string;
  /** The status of the mandate. Examples : active, revoked, completed, expired */
  status: string;
  /** The transaction variant used for this mandate. */
  txVariant: string;
};

export const tokenMandateSchema: Schema<TokenMandate> = s.object<TokenMandate>({
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
