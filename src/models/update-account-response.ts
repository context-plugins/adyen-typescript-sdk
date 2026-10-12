import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorFieldTypeSchema, type ErrorFieldType } from "./error-field-type.js";
import { payoutScheduleResponse3Schema, type PayoutScheduleResponse3 } from "./payout-schedule-response3.js";
import { payoutSpeed4Schema, type PayoutSpeed4 } from "./payout-speed4.js";

export type UpdateAccountResponse = {
  /** The code of the account. */
  accountCode: string;
  /**
   * The bankAccountUUID of the bank account held by the account holder to couple the account with.
   * Scheduled payouts in currencies matching the currency of this bank account will be sent to this
   * bank account. Payouts in different currencies will be sent to a matching bank account of the
   * account holder.
   */
  bankAccountUuid?: string;
  /** The description of the account. */
  description?: string;
  /** A list of fields that caused the `/updateAccount` request to fail. */
  invalidFields?: ErrorFieldType[];
  /** A set of key and value pairs containing metadata. */
  metadata?: Record<string, string>;
  /**
   * The payout method code held by the account holder to couple the account with. Scheduled card
   * payouts will be sent using this payout method code.
   */
  payoutMethodCode?: string;
  /** The details of the payout schedule to which the account is updated. */
  payoutSchedule?: PayoutScheduleResponse3;
  /**
   * Speed at which payouts for this account are processed.
   *
   * Possible values: `STANDARD`, `SAME_DAY`.
   */
  payoutSpeed?: PayoutSpeed4;
  /** The reference of a request. Can be used to uniquely identify the request. */
  pspReference?: string;
  /** The result code. */
  resultCode?: string;
};

export const updateAccountResponseSchema: Schema<UpdateAccountResponse> = s.object<UpdateAccountResponse>({
  accountCode: s.string(),
  bankAccountUuid: s.optional(s.string()),
  description: s.optional(s.string()),
  invalidFields: s.optional(s.array(s.lazy(() => errorFieldTypeSchema))),
  metadata: s.optional(s.record(s.string(), s.string())),
  payoutMethodCode: s.optional(s.string()),
  payoutSchedule: s.optional(s.lazy(() => payoutScheduleResponse3Schema)),
  payoutSpeed: s.optional(s.lazy(() => payoutSpeed4Schema)),
  pspReference: s.optional(s.string()),
  resultCode: s.optional(s.string()),
  _keysMap: {
    bankAccountUuid: "bankAccountUUID",
  },
});
