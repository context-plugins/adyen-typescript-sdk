import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountType12Schema, type AccountType12 } from "./account-type12.js";
import { paymentInstrumentDataSchema, type PaymentInstrumentData } from "./payment-instrument-data.js";
import { transactionIdTypeSchema, type TransactionIdType } from "./transaction-id-type.js";

export type PaymentAccountReq = {
  accountType?: AccountType12;
  cardAcquisitionReference?: TransactionIdType;
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
