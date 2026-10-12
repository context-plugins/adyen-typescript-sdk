import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payoutScheduleResponse4Schema, type PayoutScheduleResponse4 } from "./payout-schedule-response4.js";
import { payoutSpeedSchema, type PayoutSpeed } from "./payout-speed.js";

export type Account = {
  /** The code of the account. */
  accountCode?: string;
  /**
   * The bankAccountUUID of the bank account held by the account holder to couple the account with.
   * Scheduled payouts in currencies matching the currency of this bank account will be sent to this
   * bank account. Payouts in different currencies will be sent to a matching bank account of the
   * account holder.
   */
  bankAccountUuid?: string;
  /** The beneficiary of the account. */
  beneficiaryAccount?: string;
  /**
   * The reason that a beneficiary has been set up for this account. This may have been supplied
   * during the setup of a beneficiary at the discretion of the executing user.
   */
  beneficiaryMerchantReference?: string;
  /** A description of the account. */
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
  /** The account's payout schedule. */
  payoutSchedule?: PayoutScheduleResponse4;
  /**
   * Speed with which payouts for this account are processed. Permitted values: `STANDARD`,
   * `SAME_DAY`.
   */
  payoutSpeed?: PayoutSpeed;
  /** The status of the account. Possible values: `Active`, `Inactive`, `Suspended`, `Closed`. */
  status?: string;
};

export const accountSchema: Schema<Account> = s.object<Account>({
  accountCode: s.optional(s.string()),
  bankAccountUuid: s.optional(s.string()),
  beneficiaryAccount: s.optional(s.string()),
  beneficiaryMerchantReference: s.optional(s.string()),
  description: s.optional(s.string()),
  metadata: s.optional(s.record(s.string(), s.string())),
  payoutMethodCode: s.optional(s.string()),
  payoutSchedule: s.optional(s.lazy(() => payoutScheduleResponse4Schema)),
  payoutSpeed: s.optional(s.lazy(() => payoutSpeedSchema)),
  status: s.optional(s.string()),
  _keysMap: {
    bankAccountUuid: "bankAccountUUID",
  },
});
