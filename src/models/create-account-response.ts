import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorFieldTypeSchema, type ErrorFieldType } from "./error-field-type.js";
import { payoutScheduleResponse1Schema, type PayoutScheduleResponse1 } from "./payout-schedule-response1.js";
import { payoutSpeedSchema, type PayoutSpeed } from "./payout-speed.js";
import { status42Schema, type Status42 } from "./status42.js";

export type CreateAccountResponse = {
  /** The code of the new account. */
  accountCode?: string;
  /** The code of the account holder. */
  accountHolderCode?: string;
  /**
   * The bankAccountUUID of the bank account held by the account holder to couple the account with.
   * Scheduled payouts in currencies matching the currency of this bank account will be sent to this
   * bank account. Payouts in different currencies will be sent to a matching bank account of the
   * account holder.
   */
  bankAccountUuid?: string;
  /** The description of the account. */
  description?: string;
  /** A list of fields that caused the `/createAccount` request to fail. */
  invalidFields?: ErrorFieldType[];
  /** A set of key and value pairs containing metadata. */
  metadata?: Record<string, string>;
  /**
   * The payout method code held by the account holder to couple the account with. Scheduled card
   * payouts will be sent using this payout method code.
   */
  payoutMethodCode?: string;
  /** The details of the payout schedule added to the account. */
  payoutSchedule?: PayoutScheduleResponse1;
  /**
   * Speed with which payouts for this account are processed. Permitted values: `STANDARD`,
   * `SAME_DAY`.
   */
  payoutSpeed?: PayoutSpeed;
  /** The reference of a request. Can be used to uniquely identify the request. */
  pspReference?: string;
  /** The result code. */
  resultCode?: string;
  /** The status of the account. >Permitted values: `Active`. */
  status?: Status42;
};

export const createAccountResponseSchema: Schema<CreateAccountResponse> = s.object<CreateAccountResponse>({
  accountCode: s.optional(s.string()),
  accountHolderCode: s.optional(s.string()),
  bankAccountUuid: s.optional(s.string()),
  description: s.optional(s.string()),
  invalidFields: s.optional(s.array(s.lazy(() => errorFieldTypeSchema))),
  metadata: s.optional(s.record(s.string(), s.string())),
  payoutMethodCode: s.optional(s.string()),
  payoutSchedule: s.optional(s.lazy(() => payoutScheduleResponse1Schema)),
  payoutSpeed: s.optional(s.lazy(() => payoutSpeedSchema)),
  pspReference: s.optional(s.string()),
  resultCode: s.optional(s.string()),
  status: s.optional(s.lazy(() => status42Schema)),
  _keysMap: {
    bankAccountUuid: "bankAccountUUID",
  },
});
