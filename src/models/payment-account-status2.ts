import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentAcquirerDataSchema, type PaymentAcquirerData } from "./payment-acquirer-data.js";
import { paymentInstrumentDataSchema, type PaymentInstrumentData } from "./payment-instrument-data.js";

/**
 * Data related to the result of a Balance Inquiry request. If BalanceInquiryRequest. PaymentAccount
 * present.
 */
export type PaymentAccountStatus2 = {
  /**
   * Data related to the instrument of payment for the transaction. Sent in the result of the
   * payment transaction. For a card, it could also be sent in the `CardAcquisition` response, to be
   * processed by the Sale System.
   */
  paymentInstrumentData?: PaymentInstrumentData;
  /** Balance of an account after processing of the transaction. */
  currentBalance?: number;
  /** Currency of a monetary amount. */
  currency?: string;
  /** Data related to the response from the payment Acquirer. */
  paymentAcquirerData?: PaymentAcquirerData;
};

export const paymentAccountStatus2Schema: Schema<PaymentAccountStatus2> = s.object<PaymentAccountStatus2>({
  paymentInstrumentData: s.optional(s.lazy(() => paymentInstrumentDataSchema)),
  currentBalance: s.optional(s.float64()),
  currency: s.optional(s.string()),
  paymentAcquirerData: s.optional(s.lazy(() => paymentAcquirerDataSchema)),
  _keysMap: {
    paymentInstrumentData: "PaymentInstrumentData",
    currentBalance: "CurrentBalance",
    currency: "Currency",
    paymentAcquirerData: "PaymentAcquirerData",
  },
});
