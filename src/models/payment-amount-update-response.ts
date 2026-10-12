import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount30Schema, type Amount30 } from "./amount30.js";
import { industryUsage1Schema, type IndustryUsage1 } from "./industry-usage1.js";
import { lineItemSchema, type LineItem } from "./line-item.js";
import { splitSchema, type Split } from "./split.js";
import { status2Schema, type Status2 } from "./status2.js";

export type PaymentAmountUpdateResponse = {
  /**
   * The data blob for subsequent synchronous adjust authorisation calls. Returned when the
   * synchronous flow is used.
   */
  adjustAuthorisationData?: string;
  /** The updated amount. */
  amount: Amount30;
  /**
   * The reason for the amount update. Possible values:
   * * **delayedCharge**
   * * **noShow**
   * * **installment**
   */
  industryUsage?: IndustryUsage1;
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
   * of the payment to update.
   */
  paymentPspReference: string;
  /** Adyen's 16-character reference associated with the amount update request. */
  pspReference: string;
  /** Your reference for the amount update request. Maximum length: 80 characters. */
  reference: string;
  /**
   * An array of objects specifying how the amount should be split between accounts when using Adyen
   * for Platforms. For more information, see how to process payments for
   * [marketplaces](https://docs.adyen.com/marketplaces/process-payments) or
   * [platforms](https://docs.adyen.com/platforms/process-payments).
   */
  splits?: Split[];
  /**
   * The status of your request.
   *
   * If you included `adjustAuthorisationData` in your request, possible values are the following:
   *
   * * **authorised**
   *
   * * **refused**
   *
   * Otherwise, the value is **received**.
   */
  status: Status2;
};

export const paymentAmountUpdateResponseSchema: Schema<PaymentAmountUpdateResponse> =
  s.object<PaymentAmountUpdateResponse>({
    adjustAuthorisationData: s.optional(s.string()),
    amount: amount30Schema,
    industryUsage: s.optional(s.lazy(() => industryUsage1Schema)),
    lineItems: s.optional(s.array(s.lazy(() => lineItemSchema))),
    merchantAccount: s.string(),
    paymentPspReference: s.string(),
    pspReference: s.string(),
    reference: s.string(),
    splits: s.optional(s.array(s.lazy(() => splitSchema))),
    status: status2Schema,
  });
