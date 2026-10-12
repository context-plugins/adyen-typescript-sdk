import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount33Schema, type Amount33 } from "./amount33.js";
import { lineItemSchema, type LineItem } from "./line-item.js";
import { platformChargebackLogicSchema, type PlatformChargebackLogic } from "./platform-chargeback-logic.js";
import { splitSchema, type Split } from "./split.js";
import { subMerchantInfoSchema, type SubMerchantInfo } from "./sub-merchant-info.js";

export type PaymentCaptureResponse = {
  /** The captured amount. */
  amount: Amount33;
  /**
   * Price and product information of the refunded items, required for [partial
   * refunds](https://docs.adyen.com/online-payments/refund#refund-a-payment). > This field is
   * required for partial refunds with 3x 4x Oney, Affirm, Afterpay, Atome, Clearpay, Klarna,
   * Ratepay, Walley, and Zip.
   */
  lineItems?: LineItem[];
  /** The merchant account that is used to process the payment. */
  merchantAccount: string;
  /**
   * The
   * [`pspReference`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments#responses-200-pspReference)
   * of the payment to capture.
   */
  paymentPspReference: string;
  /**
   * Defines how to book chargebacks when using [Adyen for
   * Platforms](https://docs.adyen.com/adyen-for-platforms-model).
   */
  platformChargebackLogic?: PlatformChargebackLogic;
  /** Adyen's 16-character reference associated with the capture request. */
  pspReference: string;
  /** Your reference for the capture request. */
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
  /** List of sub-merchants. */
  subMerchants?: SubMerchantInfo[];
};

export const paymentCaptureResponseSchema: Schema<PaymentCaptureResponse> = s.object<PaymentCaptureResponse>({
  amount: amount33Schema,
  lineItems: s.optional(s.array(s.lazy(() => lineItemSchema))),
  merchantAccount: s.string(),
  paymentPspReference: s.string(),
  platformChargebackLogic: s.optional(s.lazy(() => platformChargebackLogicSchema)),
  pspReference: s.string(),
  reference: s.optional(s.string()),
  splits: s.optional(s.array(s.lazy(() => splitSchema))),
  status: s.defaulted(s.literal("received"), "received"),
  subMerchants: s.optional(s.array(s.lazy(() => subMerchantInfoSchema))),
});
