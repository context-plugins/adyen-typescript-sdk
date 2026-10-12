import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountType12Schema, type AccountType12 } from "./account-type12.js";
import { paymentInstrumentDataSchema, type PaymentInstrumentData } from "./payment-instrument-data.js";
import { transactionIdTypeSchema, type TransactionIdType } from "./transaction-id-type.js";

export type PaymentAccountReq = {
  /**
   * Type of cardholder account used for the transaction. Allows a cardholder to select the type of
   * account used for the transaction. Possible values:
   * * **CardTotals**
   * * **Checking**
   * * **CreditCard**
   * * **Default**
   * * **EpurseCard**
   * * **Investment**
   * * **Savings**
   * * **Universal**
   */
  accountType?: AccountType12;
  /** Identification of a transaction for the Sale System or the POI System. */
  cardAcquisitionReference?: TransactionIdType;
  /**
   * Data related to the instrument of payment for the transaction. Sent in the result of the
   * payment transaction. For a card, it could also be sent in the `CardAcquisition` response, to be
   * processed by the Sale System.
   */
  paymentInstrumentData?: PaymentInstrumentData;
};

export const paymentAccountReqSchema: Schema<PaymentAccountReq> = s.object<PaymentAccountReq>({
  accountType: s.optional(s.lazy(() => accountType12Schema)),
  cardAcquisitionReference: s.optional(s.lazy(() => transactionIdTypeSchema)),
  paymentInstrumentData: s.optional(s.lazy(() => paymentInstrumentDataSchema)),
  _keysMap: {
    accountType: "AccountType",
    cardAcquisitionReference: "CardAcquisitionReference",
    paymentInstrumentData: "PaymentInstrumentData",
  },
});
