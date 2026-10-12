import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payoutScheduleSchema, type PayoutSchedule } from "./payout-schedule.js";
import { PayoutSpeed1, payoutSpeed1Schema } from "./payout-speed1.js";

export type CreateAccountRequest = {
  /** The code of Account Holder under which to create the account. */
  accountHolderCode: string;
  /**
   * The bankAccountUUID of the bank account held by the account holder to couple the account with.
   * Scheduled payouts in currencies matching the currency of this bank account will be sent to this
   * bank account. Payouts in different currencies will be sent to a matching bank account of the
   * account holder.
   */
  bankAccountUuid?: string;
  /**
   * A description of the account, maximum 256 characters. You can use alphanumeric characters (A-Z,
   * a-z, 0-9), white spaces, and underscores `_`.
   */
  description?: string;
  /**
   * A set of key and value pairs for general use by the merchant. The keys do not have specific
   * names and may be used for storing miscellaneous data as desired. > Note that during an update
   * of metadata, the omission of existing key-value pairs will result in the deletion of those
   * key-value pairs.
   */
  metadata?: Record<string, string>;
  /**
   * The payout method code held by the account holder to couple the account with. Scheduled card
   * payouts will be sent using this payout method code.
   */
  payoutMethodCode?: string;
  /**
   * The payout schedule for the account.
   *
   * Possible values: `DEFAULT`, `DAILY`, `DAILY_US`, `DAILY_EU`, `DAILY_AU`, `DAILY_SG`, `WEEKLY`,
   * `WEEKLY_ON_TUE_FRI_MIDNIGHT`, `BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT`, `MONTHLY`, `HOLD`. >
   * `HOLD` prevents scheduled payouts, but you can still initiate payouts manually.
   */
  payoutSchedule?: PayoutSchedule;
  /**
   * The reason for the payout schedule choice. > This field is required when the `payoutSchedule`
   * parameter is set to `HOLD`.
   */
  payoutScheduleReason?: string;
  /**
   * Speed at which payouts for this account are processed.
   *
   * Possible values: `STANDARD` (default), `SAME_DAY`.
   *
   * @default PayoutSpeed1.Standard
   */
  payoutSpeed?: PayoutSpeed1;
};

export const createAccountRequestSchema: Schema<CreateAccountRequest> = s.object<CreateAccountRequest>({
  accountHolderCode: s.string(),
  bankAccountUuid: s.optional(s.string()),
  description: s.optional(s.string()),
  metadata: s.optional(s.record(s.string(), s.string())),
  payoutMethodCode: s.optional(s.string()),
  payoutSchedule: s.optional(s.lazy(() => payoutScheduleSchema)),
  payoutScheduleReason: s.optional(s.string()),
  payoutSpeed: s.defaulted(payoutSpeed1Schema, PayoutSpeed1.Standard),
  _keysMap: {
    bankAccountUuid: "bankAccountUUID",
  },
});
