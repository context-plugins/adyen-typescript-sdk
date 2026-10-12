import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount26Schema, type Amount26 } from "./amount26.js";
import { paymentResponse3Schema, type PaymentResponse3 } from "./payment-response3.js";
import { resultCode2Schema, type ResultCode2 } from "./result-code2.js";

export type Payment = {
  /** Authorised amount in the transaction. */
  amount?: Amount26;
  /**
   * Only returned for `resultCode`: **Authorised**. Details about the payment method used in the
   * transaction.
   */
  paymentMethod?: PaymentResponse3;
  /**
   * Adyen's 16-character reference associated with the transaction/request. This value is globally
   * unique. Use this reference when you communicate with us about this request.
   */
  pspReference?: string;
  /**
   * The result of the payment. For more information, see [Result
   * codes](https://docs.adyen.com/online-payments/payment-result-codes).
   *
   * Possible values:
   *
   * * **Authorised** – The payment was successfully authorised. This state serves as an indicator
   *   to proceed with the delivery of goods and services. This is a final state.
   * * **Received** – Indicates the payment request was successfully received by Adyen, and will be
   *   processed. This is the initial state for all payments.
   * * **Pending** – The payment order was successfully received but the final status of the payment
   *   is not available yet. This is common for payment methods with an asynchronous flow.
   */
  resultCode?: ResultCode2;
};

export const paymentSchema: Schema<Payment> = s.object<Payment>({
  amount: s.optional(s.lazy(() => amount26Schema)),
  paymentMethod: s.optional(s.lazy(() => paymentResponse3Schema)),
  pspReference: s.optional(s.string()),
  resultCode: s.optional(s.lazy(() => resultCode2Schema)),
});
