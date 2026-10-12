import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentCancelResponse = {
  /** The merchant account that is used to process the payment. */
  merchantAccount: string;
  /**
   * The
   * [`pspReference`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments#responses-200-pspReference)
   * of the payment to cancel.
   */
  paymentPspReference: string;
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

export const paymentCancelResponseSchema: Schema<PaymentCancelResponse> = s.object<PaymentCancelResponse>({
  merchantAccount: s.string(),
  paymentPspReference: s.string(),
  pspReference: s.string(),
  reference: s.optional(s.string()),
  status: s.defaulted(s.literal("received"), "received"),
});
