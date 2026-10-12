import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount8Schema, type Amount8 } from "./amount8.js";
import { amount9Schema, type Amount9 } from "./amount9.js";
import { fraudResult1Schema, type FraudResult1 } from "./fraud-result1.js";
import { resultCodeSchema, type ResultCode } from "./result-code.js";

export type BalanceCheckResponse = {
  /**
   * Contains additional information about the payment. Some data fields are included only if you
   * select them first: Go to **Customer Area** > **Developers** > **Additional data**.
   */
  additionalData?: Record<string, string>;
  /** The balance for the payment method. */
  balance: Amount8;
  /** The fraud result properties of the payment. */
  fraudResult?: FraudResult1;
  /**
   * Adyen's 16-character reference associated with the transaction/request. This value is globally
   * unique; quote it when communicating with us about this request.
   */
  pspReference?: string;
  /**
   * If the payment's authorisation is refused or an error occurs during authorisation, this field
   * holds Adyen's mapped reason for the refusal or a description of the error. When a transaction
   * fails, the authorisation response includes `resultCode` and `refusalReason` values.
   *
   * For more information, see [Refusal
   * reasons](https://docs.adyen.com/development-resources/refusal-reasons).
   */
  refusalReason?: string;
  /**
   * The result of the cancellation request.
   *
   * Possible values:
   *
   * * **Success** – Indicates that the balance check was successful.
   * * **NotEnoughBalance** – Commonly indicates that the card did not have enough balance to pay
   *   the amount in the request, or that the currency of the balance on the card did not match the
   *   currency of the requested amount.
   * * **Failed** – Indicates that the balance check failed.
   */
  resultCode: ResultCode;
  /** The maximum spendable balance for a single transaction. Applicable to some gift cards. */
  transactionLimit?: Amount9;
};

export const balanceCheckResponseSchema: Schema<BalanceCheckResponse> = s.object<BalanceCheckResponse>({
  additionalData: s.optional(s.record(s.string(), s.string())),
  balance: amount8Schema,
  fraudResult: s.optional(s.lazy(() => fraudResult1Schema)),
  pspReference: s.optional(s.string()),
  refusalReason: s.optional(s.string()),
  resultCode: resultCodeSchema,
  transactionLimit: s.optional(s.lazy(() => amount9Schema)),
});
