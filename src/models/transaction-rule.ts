import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { outcomeTypeSchema, type OutcomeType } from "./outcome-type.js";
import { purposeSchema, type Purpose } from "./purpose.js";
import { requestTypeSchema, type RequestType } from "./request-type.js";
import { status6Schema, type Status6 } from "./status6.js";
import {
  transactionRuleEntityKey2Schema,
  type TransactionRuleEntityKey2,
} from "./transaction-rule-entity-key2.js";
import {
  transactionRuleInterval1Schema,
  type TransactionRuleInterval1,
} from "./transaction-rule-interval1.js";
import {
  transactionRuleRestrictions1Schema,
  type TransactionRuleRestrictions1,
} from "./transaction-rule-restrictions1.js";
import { type141Schema, type Type141 } from "./type141.js";

export type TransactionRule = {
  /**
   * The level at which data must be accumulated, used in rules with `type` **velocity** or
   * **maxUsage**. The level must be the [same or lower in
   * hierarchy](https://docs.adyen.com/issuing/transaction-rules#accumulate-data) than the
   * `entityKey`.
   *
   * If not provided, by default, the rule will accumulate data at the **paymentInstrument** level.
   *
   * Possible values: **paymentInstrument**, **paymentInstrumentGroup**, **balanceAccount**,
   * **accountHolder**, **balancePlatform**.
   */
  aggregationLevel?: string;
  /** Your description for the transaction rule. */
  description: string;
  /**
   * The date when the rule will stop being evaluated, in ISO 8601 extended offset date-time format.
   * For example, **2025-03-19T10:15:30+01:00**.
   *
   * If not provided, the rule will be evaluated until the rule status is set to **inactive**.
   */
  endDate?: string;
  /** The type and unique identifier of the resource to which the rule applies. */
  entityKey: TransactionRuleEntityKey2;
  /** The unique identifier of the transaction rule. */
  id?: string;
  /**
   * The [time interval](https://docs.adyen.com/issuing/transaction-rules#time-intervals) when the
   * rule conditions apply.
   */
  interval: TransactionRuleInterval1;
  /**
   * The [outcome](https://docs.adyen.com/issuing/transaction-rules#outcome) that will be applied
   * when a transaction meets the conditions of the rule.
   *
   * Possible values:
   * * **hardBlock** (default): the transaction is declined.
   * * **scoreBased**: the transaction is assigned the `score` you specified. Adyen calculates the
   *   total score and if it exceeds 100, the transaction is declined. This value is not allowed
   *   when `requestType` is **bankTransfer**.
   *
   * * **enforceSCA**: your user is prompted to verify their identity using [3D Secure
   *   authentication](https://docs.adyen.com/issuing/3d-secure/). If the authentication fails or
   *   times out, the transaction is declined. This value is only allowed when `requestType` is
   *   **authentication**.
   */
  outcomeType?: OutcomeType;
  /**
   * The `id` of the transaction rule you want to override or skip for the specified `entityKey`.
   */
  overridesRule?: string;
  /**
   * Specifies the reason for creating the rule.
   *
   * Possible values:
   * * **fraud**: the rule is created to regulate fraudulent activity.
   * * **policy**: the rule is created to ensure that the transaction adheres to your business'
   *   policies. For example, if your business has policies about the Merchant Category Codes (MCCs)
   *   allowed on a transaction, you can create a rule to block transactions that have specific
   *   MCCs.
   */
  purpose?: Purpose;
  /** Your reference for the transaction rule. */
  reference: string;
  /**
   * Indicates the type of request to which the rule applies. If not provided, by default, this is
   * set to **authorization**.
   *
   * Possible values: **authorization**, **authentication**, **tokenization**, **bankTransfer**.
   */
  requestType?: RequestType;
  /**
   * Contains one or more objects that define the [rule
   * conditions](https://docs.adyen.com/issuing/transaction-rules#conditions). Each object must have
   * a value and an operation which determines how the values must be evaluated.
   *
   * For example, a `countries` object can have a list of country codes **["US", "CA"]** in the
   * `value` field and **anyMatch** in the `operation` field.
   */
  ruleRestrictions: TransactionRuleRestrictions1;
  /**
   * A positive or negative score applied to the transaction if it meets the conditions of the rule.
   * Required when `outcomeType` is **scoreBased**. The value must be between **-100** and **100**.
   */
  score?: number;
  /**
   * The date when the rule will start to be evaluated, in ISO 8601 extended offset date-time
   * format. For example, **2025-03-19T10:15:30+01:00**.
   *
   * If not provided when creating a transaction rule, the `startDate` is set to the date when the
   * rule status is set to **active**.
   */
  startDate?: string;
  /**
   * The status of the transaction rule. If you provide a `startDate` in the request, the rule is
   * automatically created with an **active** status.
   *
   * Possible values: **active**, **inactive**.
   */
  status?: Status6;
  /**
   * The [type of rule](https://docs.adyen.com/issuing/transaction-rules#rule-types), which defines
   * if a rule blocks transactions based on individual characteristics or accumulates data.
   *
   * Possible values:
   *  * **blockList**: decline a transaction when the conditions are met.
   *  * **maxUsage**: add the amount or number of transactions for the lifetime of a payment
   *    instrument, and then decline a transaction when the specified limits are met.
   *  * **velocity**: add the amount or number of transactions based on a specified time interval,
   *    and then decline a transaction when the specified limits are met.
   *  * **bypass**: bypass or skip a rule for the specified `entityKey`. Transactions processed to
   *    that entity are no longer evaluated by the bypassed rule. You must provide the `id` of the
   *    rule to bypass in `overridesRule` and leave the `ruleRestrictions` object empty.
   */
  type: Type141;
};

export const transactionRuleSchema: Schema<TransactionRule> = s.object<TransactionRule>({
  aggregationLevel: s.optional(s.string()),
  description: s.string(),
  endDate: s.optional(s.string()),
  entityKey: transactionRuleEntityKey2Schema,
  id: s.optional(s.string()),
  interval: transactionRuleInterval1Schema,
  outcomeType: s.optional(s.lazy(() => outcomeTypeSchema)),
  overridesRule: s.optional(s.string()),
  purpose: s.optional(s.lazy(() => purposeSchema)),
  reference: s.string(),
  requestType: s.optional(s.lazy(() => requestTypeSchema)),
  ruleRestrictions: transactionRuleRestrictions1Schema,
  score: s.optional(s.int()),
  startDate: s.optional(s.string()),
  status: s.optional(s.lazy(() => status6Schema)),
  type: type141Schema,
});
