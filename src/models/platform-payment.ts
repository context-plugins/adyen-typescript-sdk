import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { platformPaymentTypeSchema, type PlatformPaymentType } from "./platform-payment-type.js";
import { Type63, type63Schema } from "./type63.js";

export type PlatformPayment = {
  /** The capture's merchant reference included in the transfer. */
  modificationMerchantReference?: string;
  /** The capture reference included in the transfer. */
  modificationPspReference?: string;
  /** The payment's merchant reference included in the transfer. */
  paymentMerchantReference?: string;
  /**
   * Specifies the nature of the transfer. This parameter helps categorize transfers so you can
   * reconcile transactions at a later time, using the Balance Platform Accounting Report for
   * [marketplaces](https://docs.adyen.com/marketplaces/reports-and-fees/balance-platform-accounting-report/)
   * or
   * [platforms](https://docs.adyen.com/platforms/reports-and-fees/balance-platform-accounting-report/).
   *
   * Possible values:
   *
   * * **AcquiringFees**: The acquiring fee (the aggregated amount of interchange and scheme fee)
   *   incurred on a transaction.
   *
   * * **AdyenCommission**: The transaction fee due to Adyen under [blended
   *   rates](https://www.adyen.com/knowledge-hub/guides/payments-training-guide/get-the-best-from-your-card-processing).
   *
   * * **AdyenFees**: All transaction fees due to Adyen. This is the aggregated amount of Adyen's
   *   commission and markup.
   *
   * * **AdyenMarkup**: The transaction fee due to Adyen under [Interchange++
   *   pricing](https://www.adyen.com/pricing).
   *
   * * **BalanceAccount**: The amount booked to your user after the deduction of the relevant fees.
   *
   * * **Commission**: Your platform's or marketplace's commission on a transaction.
   *
   * * **DCCPlatformCommission**: **deprecated** The Dynamic Currency Conversion (DCC) fee on a
   *   transaction.
   *
   * * **DCCMarkup**: The Dynamic Currency Conversion (DCC) fee on a transaction.
   *
   * * **Interchange**: The interchange fee (fee paid to the issuer) incurred on a transaction.
   *
   * * **PaymentFee**: The aggregated amount of all transaction fees.
   *
   * * **Remainder**: The leftover amount after currency conversion.
   *
   * * **SchemeFee**: The scheme fee incurred on a transaction.
   *
   * * **Surcharge**: The surcharge paid by the customer on a transaction.
   *
   * * **Tip**: The tip paid by the customer.
   *
   * * **TopUp**: An incoming transfer to top up your user's balance account.
   *
   * * **VAT**: The value-added tax charged on the payment.
   */
  platformPaymentType?: PlatformPaymentType;
  /** The payment reference included in the transfer. */
  pspPaymentReference?: string;
  /** **platformPayment** @default Type63.PlatformPayment */
  type?: Type63;
};

export const platformPaymentSchema: Schema<PlatformPayment> = s.object<PlatformPayment>({
  modificationMerchantReference: s.optional(s.string()),
  modificationPspReference: s.optional(s.string()),
  paymentMerchantReference: s.optional(s.string()),
  platformPaymentType: s.optional(s.lazy(() => platformPaymentTypeSchema)),
  pspPaymentReference: s.optional(s.string()),
  type: s.defaulted(type63Schema, Type63.PlatformPayment),
});
