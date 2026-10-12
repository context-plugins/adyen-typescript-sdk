import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";
import { resultCode3Schema, type ResultCode3 } from "./result-code3.js";

export type StoredValueVoidResponse = {
  /** The balance currently on the payment method. */
  currentBalance?: Amount;
  /**
   * Adyen's 16-character string reference associated with the transaction/request. This value is
   * globally unique; quote it when communicating with us about this request.
   */
  pspReference?: string;
  /**
   * If the transaction is refused or an error occurs, this field holds Adyen's mapped reason for
   * the refusal or a description of the error.
   *
   * When a transaction fails, the authorisation response includes `resultCode` and `refusalReason`
   * values.
   */
  refusalReason?: string;
  /**
   * The result of the payment. Possible values:
   *
   * * **Success** – The operation has been completed successfully.
   * * **Refused** – The operation was refused. The reason is given in the `refusalReason` field.
   * * **Error** – There was an error when the operation was processed. The reason is given in the
   *   `refusalReason` field.
   * * **NotEnoughBalance** – The amount on the payment method is lower than the amount given in the
   *   request. Only applicable to balance checks.
   */
  resultCode?: ResultCode3;
  /** Raw refusal reason received from the third party, where available */
  thirdPartyRefusalReason?: string;
};

export const storedValueVoidResponseSchema: Schema<StoredValueVoidResponse> =
  s.object<StoredValueVoidResponse>({
    currentBalance: s.optional(s.lazy(() => amountSchema)),
    pspReference: s.optional(s.string()),
    refusalReason: s.optional(s.string()),
    resultCode: s.optional(s.lazy(() => resultCode3Schema)),
    thirdPartyRefusalReason: s.optional(s.string()),
  });
