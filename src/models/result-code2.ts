import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The result of the payment. For more information, see [Result
 * codes](https://docs.adyen.com/online-payments/payment-result-codes).
 *
 * Possible values:
 *
 * * **Authorised** – The payment was successfully authorised. This state serves as an indicator to
 *   proceed with the delivery of goods and services. This is a final state.
 * * **Received** – Indicates the payment request was successfully received by Adyen, and will be
 *   processed. This is the initial state for all payments.
 * * **Pending** – The payment order was successfully received but the final status of the payment
 *   is not available yet. This is common for payment methods with an asynchronous flow.
 */
export const ResultCode2 = {
  Authorised: "Authorised",
  Received: "Received",
  Pending: "Pending",
} as const;
export type ResultCode2 = (typeof ResultCode2)[keyof typeof ResultCode2] | (string & {});

export const resultCode2Schema: EnumSchema<ResultCode2> = s.enumOf<ResultCode2>(ResultCode2);
