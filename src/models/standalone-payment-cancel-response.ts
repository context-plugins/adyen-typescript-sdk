import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StandalonePaymentCancelResponse = {
  /** The merchant account that is used to process the payment. */
  merchantAccount: string;
  /**
   * The
   * [`reference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__reqParam_reference)
   * of the payment to cancel.
   */
  paymentReference: string;
  /** Adyen's 16-character reference associated with the cancel request. */
  pspReference: string;
  /** Your reference for the cancel request. */
  reference?: string;
  /**
   * The status of your request. This will always have the value **received**.
   *
   * @default "received"
   */
  status?: "received";
};

export const standalonePaymentCancelResponseSchema: Schema<StandalonePaymentCancelResponse> =
  s.object<StandalonePaymentCancelResponse>({
    merchantAccount: s.string(),
    paymentReference: s.string(),
    pspReference: s.string(),
    reference: s.optional(s.string()),
    status: s.defaulted(s.literal("received"), "received"),
  });
