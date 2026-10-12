import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PayoutSettingsRequest = {
  /**
   * Indicates if payouts to this bank account are enabled. Default: **true**.
   *
   * To receive payouts into this bank account, both `enabled` and `allowed` must be **true**.
   */
  enabled?: boolean;
  /**
   * The date when Adyen starts paying out to this bank account.
   *
   * Format: [ISO 8601](https://www.w3.org/TR/NOTE-datetime), for example, **2019-11-23T12:25:28Z**
   * or **2020-05-27T20:25:28+08:00**.
   *
   * If not specified, the `enabled` field indicates if payouts are enabled for this bank account.
   *
   * If a date is specified and:
   *
   * * `enabled`: **true**, payouts are enabled starting the specified date.
   * * `enabled`: **false**, payouts are disabled until the specified date. On the specified date,
   *   `enabled` changes to **true** and this field is reset to **null**.
   */
  enabledFromDate?: string;
  /**
   * The unique identifier of the [transfer
   * instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments)
   * that contains the details of the bank account.
   */
  transferInstrumentId: string;
};

export const payoutSettingsRequestSchema: Schema<PayoutSettingsRequest> = s.object<PayoutSettingsRequest>({
  enabled: s.optional(s.boolean()),
  enabledFromDate: s.optional(s.string()),
  transferInstrumentId: s.string(),
});
