import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { adjustAuthTypeSchema, type AdjustAuthType } from "./adjust-auth-type.js";
import { amount29Schema, type Amount29 } from "./amount29.js";
import { applicationInfoSchema, type ApplicationInfo } from "./application-info.js";
import { industryUsage1Schema, type IndustryUsage1 } from "./industry-usage1.js";
import { lineItemSchema, type LineItem } from "./line-item.js";
import { splitSchema, type Split } from "./split.js";
import { threeDSecureData3Schema, type ThreeDSecureData3 } from "./three-dsecure-data3.js";

export type PaymentAmountUpdateRequest = {
  /**
   * The type of adjustment. Possible values:
   *
   * * **cardholderInitiatedTransaction**
   *
   * * **merchantInitiatedTransaction**
   */
  adjustAuthType?: AdjustAuthType;
  /**
   * The required data to make a [synchronous authorization
   * adjustment](https://docs.adyen.com/online-payments/adjust-authorisation). Pass the
   * corresponding value from the `/payments` response or webhook message.
   */
  adjustAuthorisationData?: string;
  /** The updated amount. The `currency` must match the currency used in authorisation. */
  amount: Amount29;
  /**
   * Information about your application. For more details, see [Building Adyen
   * solutions](https://docs.adyen.com/development-resources/building-adyen-solutions).
   */
  applicationInfo?: ApplicationInfo;
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
   * Authentication data from a [merchant plug-in
   * (MPI)](https://en.wikipedia.org/wiki/Merchant_plug-in) like Mastercard SecureCode, Visa Secure,
   * or Cartes Bancaires. Required for cardholder-initiated transaction (CIT) adjustments.
   */
  mpiData?: ThreeDSecureData3;
  /** Your reference for the amount update request. Maximum length: 80 characters. */
  reference?: string;
  /**
   * An array of objects specifying how the amount should be split between accounts when using Adyen
   * for Platforms. For more information, see how to process payments for
   * [marketplaces](https://docs.adyen.com/marketplaces/process-payments) or
   * [platforms](https://docs.adyen.com/platforms/process-payments).
   */
  splits?: Split[];
};

export const paymentAmountUpdateRequestSchema: Schema<PaymentAmountUpdateRequest> =
  s.object<PaymentAmountUpdateRequest>({
    adjustAuthType: s.optional(s.lazy(() => adjustAuthTypeSchema)),
    adjustAuthorisationData: s.optional(s.string()),
    amount: amount29Schema,
    applicationInfo: s.optional(s.lazy(() => applicationInfoSchema)),
    industryUsage: s.optional(s.lazy(() => industryUsage1Schema)),
    lineItems: s.optional(s.array(s.lazy(() => lineItemSchema))),
    merchantAccount: s.string(),
    mpiData: s.optional(s.lazy(() => threeDSecureData3Schema)),
    reference: s.optional(s.string()),
    splits: s.optional(s.array(s.lazy(() => splitSchema))),
  });
