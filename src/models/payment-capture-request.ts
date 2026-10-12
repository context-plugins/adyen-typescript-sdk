import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount31Schema, type Amount31 } from "./amount31.js";
import { applicationInfoSchema, type ApplicationInfo } from "./application-info.js";
import { enhancedSchemeData1Schema, type EnhancedSchemeData1 } from "./enhanced-scheme-data1.js";
import { lineItemSchema, type LineItem } from "./line-item.js";
import { platformChargebackLogicSchema, type PlatformChargebackLogic } from "./platform-chargeback-logic.js";
import { splitSchema, type Split } from "./split.js";
import { subMerchantInfoSchema, type SubMerchantInfo } from "./sub-merchant-info.js";

export type PaymentCaptureRequest = {
  /**
   * The amount that you want to capture. The `currency` must match the currency used in
   * authorisation, the `value` must be smaller than or equal to the authorised amount.
   */
  amount: Amount31;
  /**
   * Information about your application. For more details, see [Building Adyen
   * solutions](https://docs.adyen.com/development-resources/building-adyen-solutions).
   */
  applicationInfo?: ApplicationInfo;
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
   * Defines how to book chargebacks when using [Adyen for
   * Platforms](https://docs.adyen.com/adyen-for-platforms-model).
   */
  platformChargebackLogic?: PlatformChargebackLogic;
  /** Your reference for the capture request. Maximum length: 80 characters. */
  reference?: string;
  /**
   * An array of objects specifying how the amount should be split between accounts when using Adyen
   * for Platforms. For more information, see how to process payments for
   * [marketplaces](https://docs.adyen.com/marketplaces/split-payments) or
   * [platforms](https://docs.adyen.com/platforms/online-payments/split-payments/).
   */
  splits?: Split[];
  /** A List of sub-merchants. */
  subMerchants?: SubMerchantInfo[];
};

export const paymentCaptureRequestSchema: Schema<PaymentCaptureRequest> = s.object<PaymentCaptureRequest>({
  amount: amount31Schema,
  applicationInfo: s.optional(s.lazy(() => applicationInfoSchema)),
  enhancedSchemeData: s.optional(s.lazy(() => enhancedSchemeData1Schema)),
  lineItems: s.optional(s.array(s.lazy(() => lineItemSchema))),
  merchantAccount: s.string(),
  platformChargebackLogic: s.optional(s.lazy(() => platformChargebackLogicSchema)),
  reference: s.optional(s.string()),
  splits: s.optional(s.array(s.lazy(() => splitSchema))),
  subMerchants: s.optional(s.array(s.lazy(() => subMerchantInfoSchema))),
});
