import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorFieldTypeSchema, type ErrorFieldType } from "./error-field-type.js";
import { PayoutSpeed, payoutSpeedSchema } from "./payout-speed.js";

export type PayoutAccountHolderResponse = {
  /** The unique ID of the Bank Account to which the payout was made. */
  bankAccountUuid?: string;
  /** Contains field validation errors that would prevent requests from being processed. */
  invalidFields?: ErrorFieldType[];
  /**
   * The value supplied by the executing user when initiating the transfer; may be used to link
   * multiple transactions.
   */
  merchantReference?: string;
  /**
   * Speed with which payouts for this account are processed. Permitted values: `STANDARD`,
   * `SAME_DAY`.
   *
   * @default PayoutSpeed.Standard
   */
  payoutSpeed?: PayoutSpeed;
  /** The reference of a request. Can be used to uniquely identify the request. */
  pspReference?: string;
  /** The result code. */
  resultCode?: string;
};

export const payoutAccountHolderResponseSchema: Schema<PayoutAccountHolderResponse> =
  s.object<PayoutAccountHolderResponse>({
    bankAccountUuid: s.optional(s.string()),
    invalidFields: s.optional(s.array(s.lazy(() => errorFieldTypeSchema))),
    merchantReference: s.optional(s.string()),
    payoutSpeed: s.defaulted(payoutSpeedSchema, PayoutSpeed.Standard),
    pspReference: s.optional(s.string()),
    resultCode: s.optional(s.string()),
    _keysMap: {
      bankAccountUuid: "bankAccountUUID",
    },
  });
