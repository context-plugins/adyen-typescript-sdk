import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentReversalResponse = {
  /** The merchant account that is used to process the payment. */
  merchantAccount: string;
  /**
   * The
   * [`pspReference`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments#responses-200-pspReference)
   * of the payment to reverse.
   */
  paymentPspReference: string;
  /** Adyen's 16-character reference associated with the reversal request. */
  pspReference: string;
  /** Your reference for the reversal request. */
  reference?: string;
  /**
   * The status of your request. This will always have the value **received**.
   *
   * @default "received"
   */
  status?: "received";
};

export const paymentReversalResponseSchema: Schema<PaymentReversalResponse> =
  s.object<PaymentReversalResponse>({
    merchantAccount: s.string(),
    paymentPspReference: s.string(),
    pspReference: s.string(),
    reference: s.optional(s.string()),
    status: s.defaulted(s.literal("received"), "received"),
  });
