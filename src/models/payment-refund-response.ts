import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount39Schema, type Amount39 } from "./amount39.js";
import { lineItemSchema, type LineItem } from "./line-item.js";
import { merchantRefundReason1Schema, type MerchantRefundReason1 } from "./merchant-refund-reason1.js";
import { splitSchema, type Split } from "./split.js";

export type PaymentRefundResponse = {
  /** The refund amount. */
  amount: Amount39;
  /**
   * This is only available for PayPal refunds. The
   * [`pspReference`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments#responses-200-pspReference)
   * of the specific capture to refund.
   */
  capturePspReference?: string;
  /**
   * Price and product information of the refunded items, required for [partial
   * refunds](https://docs.adyen.com/online-payments/refund#refund-a-payment). > This field is
   * required for partial refunds with 3x 4x Oney, Affirm, Afterpay, Atome, Clearpay, Klarna,
   * Ratepay, Walley, and Zip.
   */
  lineItems?: LineItem[];
  /** The merchant account that is used to process the payment. */
  merchantAccount: string;
  /** Your reason for the refund request. */
  merchantRefundReason?: MerchantRefundReason1 | null;
  /**
   * The
   * [`pspReference`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments#responses-200-pspReference)
   * of the payment to refund.
   */
  paymentPspReference: string;
  /** Adyen's 16-character reference associated with the refund request. */
  pspReference: string;
  /** Your reference for the refund request. */
  reference?: string;
  /**
   * An array of objects specifying how the amount should be split between accounts when using Adyen
   * for Platforms. For more information, see how to process payments for
   * [marketplaces](https://docs.adyen.com/marketplaces/split-payments) or
   * [platforms](https://docs.adyen.com/platforms/online-payments/split-payments/).
   */
  splits?: Split[];
  /**
   * The status of your request. This will always have the value **received**.
   *
   * @default "received"
   */
  status?: "received";
  /**
   * The online store or [physical
   * store](https://docs.adyen.com/point-of-sale/design-your-integration/determine-account-structure/#create-stores)
   * that is processing the refund. This must be the same as the store name configured in your
   * Customer Area. Otherwise, you get an error and the refund fails.
   */
  store?: string;
};

export const paymentRefundResponseSchema: Schema<PaymentRefundResponse> = s.object<PaymentRefundResponse>({
  amount: amount39Schema,
  capturePspReference: s.optional(s.string()),
  lineItems: s.optional(s.array(s.lazy(() => lineItemSchema))),
  merchantAccount: s.string(),
  merchantRefundReason: s.optionalNullable(s.lazy(() => merchantRefundReason1Schema)),
  paymentPspReference: s.string(),
  pspReference: s.string(),
  reference: s.optional(s.string()),
  splits: s.optional(s.array(s.lazy(() => splitSchema))),
  status: s.defaulted(s.literal("received"), "received"),
  store: s.optional(s.string()),
});
