import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { frequency1Schema, type Frequency1 } from "./frequency1.js";

export type BalanceAccountConfigurationRequest = {
  /** The unique identifier of the payout schedule that is applied to the balance account. */
  balancePlatformPayoutScheduleId: string;
  /**
   * The three-character [ISO code](https://docs.adyen.com/development-resources/currency-codes) of
   * the currency used for this schedule.
   */
  currency?: string;
  /**
   * The description used for all payouts initiated by this payout schedule.
   *
   * Maximum length: 140 characters. If your description is longer, it may be truncated.
   *
   * Default value: The `defaultDescription` from the balance platform schedule that you are
   * applying.
   */
  description?: string;
  /** Specifies whether the payout schedule is enabled immediately after it is created. */
  enabled?: boolean;
  /**
   * The frequency of payouts initiated by this payout schedule.
   *
   * Possible values:
   * * daily
   * * weekdays
   * * weekly
   * * monthly
   *
   * Default value: The `defaultFrequency` from the balance platform schedule that you are applying.
   */
  frequency: Frequency1;
  /**
   * The date of the month or day of the week when payouts are initiated. Allowed only if
   * `frequency` is **monthly** or **weekly**.
   *
   * Possible values if `frequency` is **monthly**: **[1 - 31]**.
   * * If your specified date happens on a weekend, the payout is initiated on the next business
   *   day.
   * * If your specified date (**29**, **30**, or **31**) does not exist in a month, the payout is
   *   initiated on the last day of that month.
   *
   * Possible values if `frequency` is **weekly**: **[1 - 5]**.
   *
   * Default value: The `defaultFrequencyValue` from the balance platform schedule that you are
   * applying.
   */
  frequencyValue?: number;
  /**
   * The maximum amount that can be paid out from balance accounts that use this payout schedule.
   *
   * Default value: **0**
   */
  maxPayoutAmount?: number;
  /**
   * The minimum amount that can be paid out from balance accounts that use this payout schedule.
   *
   * Default value: **0**
   */
  minPayoutAmount?: number;
  /** The merchant reference that will be shown only in the schedule. */
  reference?: string;
  /**
   * The reference for beneficiary used for all payouts initiated by this payout schedule. This
   * reference is sent to the recipient of the transfer and is included in all webhooks related to
   * the payout.
   *
   * Supported characters: **a-z**, **A-Z**, **0-9**, **-** and space. Spaces might be replaced with
   * **-** if the recipient bank or payment infrastructure does not allow spaces.
   *
   * Default value: The `defaultReferenceForBeneficiary` from the balance platform schedule that you
   * are applying.
   */
  referenceForBeneficiary?: string;
  /**
   * The amount of funds that must remain available in the balance account after an execution of the
   * payout schedule. If the funds in the balance account are less than the retained amount, the
   * execution is not initiated.
   *
   * Default value: **0**
   */
  retainedAmount?: number;
  /**
   * The time of day when the sales day is closed in balance account time zone. The sales day
   * closing time can be between 00:00 to 07:00.
   *
   * Format: **HH:mm:ss**
   *
   * @deprecated
   */
  salesDayClosingTime?: string;
  /** The unique identifier of the transfer instrument to which the funds are paid out. */
  transferInstrumentId: string;
};

export const balanceAccountConfigurationRequestSchema: Schema<BalanceAccountConfigurationRequest> =
  s.object<BalanceAccountConfigurationRequest>({
    balancePlatformPayoutScheduleId: s.string(),
    currency: s.optional(s.string()),
    description: s.optional(s.string()),
    enabled: s.optional(s.boolean()),
    frequency: frequency1Schema,
    frequencyValue: s.optional(s.int()),
    maxPayoutAmount: s.optional(s.int()),
    minPayoutAmount: s.optional(s.int()),
    reference: s.optional(s.string()),
    referenceForBeneficiary: s.optional(s.string()),
    retainedAmount: s.optional(s.int()),
    salesDayClosingTime: s.optional(s.string()),
    transferInstrumentId: s.string(),
  });
