import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { localTime2Schema, type LocalTime2 } from "./local-time2.js";

export type BalancePlatformConfiguration = {
  /** Specifies whether this payout schedule is automatically applied to new balance accounts. */
  automaticApplication?: boolean;
  /** The balance platform to which the payout schedule applies. */
  balancePlatformId: string;
  /**
   * The two-letter [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code of
   * the country to which the payout schedule applies.
   */
  countryCode?: string;
  /** The date when the payout schedule was created. */
  createdAt: Date;
  /**
   * The three-character [ISO code](https://docs.adyen.com/development-resources/currency-codes) of
   * the currency used for the payout schedule.
   */
  currency?: string;
  /** The default description for payouts initiated by this payout schedule. */
  defaultDescription?: string;
  /** The default frequency of payouts initiated by this payout schedule. */
  defaultFrequency?: string;
  /**
   * The default value for date of the month or day of the week when payouts are initiated. Allowed
   * only if `defaultFrequency` is **monthly** or **weekly**.
   *
   * Possible values if `defaultFrequency` is **monthly**: **[1 - 31]**.
   * * If your specified date happens on a weekend, the payout is initiated on the next business
   *   day.
   * * If your specified date (**29**, **30**, or **31**) does not exist in a month, the payout is
   *   initiated on the last day of that month.
   *
   * Possible values if `defaultFrequency` is **weekly**: **[1 - 5]**.
   */
  defaultFrequencyValue?: number;
  /**
   * Your internal default reference for the payout schedule.When the payout schedule is applied to
   * a balance account, this reference is also used for that payout schedule.
   */
  defaultReference?: string;
  /** The default reference for beneficiary for payouts initiated by this payout schedule. */
  defaultReferenceForBeneficiary?: string;
  /** Specifies whether the payout schedule is enabled immediately after it is created. */
  enabled?: boolean;
  /** The unique identifier of the payout schedule for your balance platform. */
  id?: string;
  /**
   * The maximum amount that can be paid out from balance accounts that use this payout schedule.
   *
   * Default value: **0**, which means that there is no maximum limit.
   */
  maxPayoutAmount?: number;
  /**
   * The minimum amount that can be paid out from balance accounts that use this payout schedule.
   *
   * Default value: **0**.
   */
  minPayoutAmount?: number;
  /**
   * The type of payout schedule. This type indicates how fast funds are paid out to your user.
   *
   * Possible values:
   * - **Standard**: The funds arrive in your user's transfer instrument two days after the funds
   *   are settled.
   * - **Accelerated**: The funds arrive to your user's transfer instrument the day after the funds
   *   are settled.
   */
  payoutScheduleDescription: string;
  /**
   * The amount of funds that must remain available in a balance account after an execution of the
   * payout schedule. If the funds in the balance account are less than the retained amount, the
   * execution is not initiated.
   *
   * Default value: **0**
   */
  retainedAmount?: number;
  /** The date when the payout schedule was updated. */
  updatedAt?: Date;
  /**
   * The default [settlement delay](https://docs.adyen.com/platforms/settle-funds/#settlement-delay)
   * for this payout schedule.
   */
  userSettlementDelay: number;
  /** The time when the payout funds are settled in your user's transfer instrument. */
  userSettlementTime: LocalTime2;
  /** The timezone of the `userSettlementTime`. */
  userSettlementTimeZone: string;
};

export const balancePlatformConfigurationSchema: Schema<BalancePlatformConfiguration> =
  s.object<BalancePlatformConfiguration>({
    automaticApplication: s.optional(s.boolean()),
    balancePlatformId: s.string(),
    countryCode: s.optional(s.string()),
    createdAt: s.dateTime(),
    currency: s.optional(s.string()),
    defaultDescription: s.optional(s.string()),
    defaultFrequency: s.optional(s.string()),
    defaultFrequencyValue: s.optional(s.int()),
    defaultReference: s.optional(s.string()),
    defaultReferenceForBeneficiary: s.optional(s.string()),
    enabled: s.optional(s.boolean()),
    id: s.optional(s.string()),
    maxPayoutAmount: s.optional(s.int()),
    minPayoutAmount: s.optional(s.int()),
    payoutScheduleDescription: s.string(),
    retainedAmount: s.optional(s.int()),
    updatedAt: s.optional(s.dateTime()),
    userSettlementDelay: s.int(),
    userSettlementTime: localTime2Schema,
    userSettlementTimeZone: s.string(),
  });
