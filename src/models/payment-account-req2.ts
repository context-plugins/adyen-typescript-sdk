import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountType12Schema, type AccountType12 } from "./account-type12.js";
import { paymentInstrumentDataSchema, type PaymentInstrumentData } from "./payment-instrument-data.js";
import { transactionIdTypeSchema, type TransactionIdType } from "./transaction-id-type.js";

export type PaymentAccountReq2 = {
  accountType?: AccountType12;
  cardAcquisitionReference?: TransactionIdType;
  paymentInstrumentData?: PaymentInstrumentData;
};

export const paymentAccountReq2Schema: Schema<PaymentAccountReq2> = s.object<PaymentAccountReq2>({
  accountType: s.optional(s.lazy(() => accountType12Schema)),
  cardAcquisitionReference: s.optional(s.lazy(() => transactionIdTypeSchema)),
  paymentInstrumentData: s.optional(s.lazy(() => paymentInstrumentDataSchema)),
  _keysMap: {
    accountType: "AccountType",
    cardAcquisitionReference: "CardAcquisitionReference",
    paymentInstrumentData: "PaymentInstrumentData",
  },
});
