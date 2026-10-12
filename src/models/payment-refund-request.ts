import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount38Schema, type Amount38 } from "./amount38.js";
import { applicationInfoSchema, type ApplicationInfo } from "./application-info.js";
import { enhancedSchemeData1Schema, type EnhancedSchemeData1 } from "./enhanced-scheme-data1.js";
import { lineItemSchema, type LineItem } from "./line-item.js";
import { merchantRefundReasonSchema, type MerchantRefundReason } from "./merchant-refund-reason.js";
import { splitSchema, type Split } from "./split.js";

export type PaymentRefundRequest = {
  /**
   * The amount that you want to refund. The `currency` must match the currency used in
   * authorisation, the `value` must be smaller than or equal to the authorised amount.
   */
  amount: Amount38;
  /**
   * Information about your application. For more details, see [Building Adyen
   * solutions](https://docs.adyen.com/development-resources/building-adyen-solutions).
   */
  applicationInfo?: ApplicationInfo;
  /**
   * This is only available for PayPal refunds. The
   * [`pspReference`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments#responses-200-pspReference)
   * of the specific capture to refund.
   */
  capturePspReference?: string;
  /**
   * Enhanced scheme data that may be required for processing the payment. For example, airline
   * information.
   */
  enhancedSchemeData?: EnhancedSchemeData1;
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
   * The reason for the refund request.
   *
   * Possible values:
   *
   * * **FRAUD**
   *
   * * **CUSTOMER REQUEST**
   *
   * * **RETURN**
   *
   * * **DUPLICATE**
   *
   * * **OTHER**
   */
  merchantRefundReason?: MerchantRefundReason | null;
  /** Your reference for the refund request. Maximum length: 80 characters. */
  reference?: string;
  /**
   * An array of objects specifying how the amount should be split between accounts when using Adyen
   * for Platforms. For more information, see how to process payments for
   * [marketplaces](https://docs.adyen.com/marketplaces/split-payments) or
   * [platforms](https://docs.adyen.com/platforms/online-payments/split-payments/).
   */
  splits?: Split[];
  /**
   * The online store or [physical
   * store](https://docs.adyen.com/point-of-sale/design-your-integration/determine-account-structure/#create-stores)
   * that is processing the refund. This must be the same as the store name configured in your
   * Customer Area. Otherwise, you get an error and the refund fails.
   */
  store?: string;
};

export const paymentRefundRequestSchema: Schema<PaymentRefundRequest> = s.object<PaymentRefundRequest>({
  amount: amount38Schema,
  applicationInfo: s.optional(s.lazy(() => applicationInfoSchema)),
  capturePspReference: s.optional(s.string()),
  enhancedSchemeData: s.optional(s.lazy(() => enhancedSchemeData1Schema)),
  lineItems: s.optional(s.array(s.lazy(() => lineItemSchema))),
  merchantAccount: s.string(),
  merchantRefundReason: s.optionalNullable(s.lazy(() => merchantRefundReasonSchema)),
  reference: s.optional(s.string()),
  splits: s.optional(s.array(s.lazy(() => splitSchema))),
  store: s.optional(s.string()),
});
