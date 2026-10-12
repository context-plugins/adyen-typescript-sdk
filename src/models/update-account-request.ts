import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payoutSpeed1Schema, type PayoutSpeed1 } from "./payout-speed1.js";
import {
  updatePayoutScheduleRequest2Schema,
  type UpdatePayoutScheduleRequest2,
} from "./update-payout-schedule-request2.js";

export type UpdateAccountRequest = {
  /** The code of the account to update. */
  accountCode: string;
  /**
   * The bankAccountUUID of the bank account held by the account holder to couple the account with.
   * Scheduled payouts in currencies matching the currency of this bank account will be sent to this
   * bank account. Payouts in different currencies will be sent to a matching bank account of the
   * account holder.
   */
  bankAccountUuid?: string;
  /**
   * A description of the account, maximum 256 characters.You can use alphanumeric characters (A-Z,
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
  /** The details of the payout schedule to which the account must be updated. */
  payoutSchedule?: UpdatePayoutScheduleRequest2;
  /**
   * Speed at which payouts for this account are processed.
   *
   * Possible values: `STANDARD` (default), `SAME_DAY`.
   */
  payoutSpeed?: PayoutSpeed1;
};

export const updateAccountRequestSchema: Schema<UpdateAccountRequest> = s.object<UpdateAccountRequest>({
  accountCode: s.string(),
  bankAccountUuid: s.optional(s.string()),
  description: s.optional(s.string()),
  metadata: s.optional(s.record(s.string(), s.string())),
  payoutMethodCode: s.optional(s.string()),
  payoutSchedule: s.optional(s.lazy(() => updatePayoutScheduleRequest2Schema)),
  payoutSpeed: s.optional(s.lazy(() => payoutSpeed1Schema)),
  _keysMap: {
    bankAccountUuid: "bankAccountUUID",
  },
});
