import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { instalment1Schema, type Instalment1 } from "./instalment1.js";
import { paymentInstrumentDataSchema, type PaymentInstrumentData } from "./payment-instrument-data.js";
import { paymentType1Schema, type PaymentType1 } from "./payment-type1.js";
import { transactionIdTypeSchema, type TransactionIdType } from "./transaction-id-type.js";

/** Data related to the payment transaction. If one data element is present. */
export type PaymentData1 = {
  /**
   * Type of payment transaction. Elements requested by the Sale System that are related to the
   * payment only. Possible values:
   * * **CashAdvance**
   * * **CashDeposit**
   * * **Completion**
   * * **FirstReservation**
   * * **Instalment**
   * * **IssuerInstalment**
   * * **Normal**
   * * **OneTimeReservation**
   * * **PaidOut**
   * * **Recurring**
   * * **Refund**
   * * **UpdateReservation**
   */
  paymentType?: PaymentType1;
  /**
   * Indicates if the payment of the Sale transaction is split. Allows the POI to decline payment
   * means that cannot accept split payment.
   *
   * @default false
   */
  splitPaymentFlag?: boolean;
  /**
   * Requested validity date for the reservation. Allows a specific period for the reservation
   * according to the need of the Merchant for the first reservation and the reservation updates as
   * well.
   */
  requestedValidityDate?: string;
  /** Identification of a transaction for the Sale System or the POI System. */
  cardAcquisitionReference?: TransactionIdType;
  /**
   * Information related an instalment transaction. To request an instalment to the issuer, or to
   * make individual instalments of a payment transaction.
   */
  instalment?: Instalment1;
  /**
   * Data related to the instrument of payment for the transaction. Sent in the result of the
   * payment transaction. For a card, it could also be sent in the `CardAcquisition` response, to be
   * processed by the Sale System.
   */
  paymentInstrumentData?: PaymentInstrumentData;
};

export const paymentData1Schema: Schema<PaymentData1> = s.object<PaymentData1>({
  paymentType: s.optional(s.lazy(() => paymentType1Schema)),
  splitPaymentFlag: s.defaulted(s.boolean(), false),
  requestedValidityDate: s.optional(s.dateOnly()),
  cardAcquisitionReference: s.optional(s.lazy(() => transactionIdTypeSchema)),
  instalment: s.optional(s.lazy(() => instalment1Schema)),
  paymentInstrumentData: s.optional(s.lazy(() => paymentInstrumentDataSchema)),
  _keysMap: {
    paymentType: "PaymentType",
    splitPaymentFlag: "SplitPaymentFlag",
    requestedValidityDate: "RequestedValidityDate",
    cardAcquisitionReference: "CardAcquisitionReference",
    instalment: "Instalment",
    paymentInstrumentData: "PaymentInstrumentData",
  },
});
