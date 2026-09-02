import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { instalment1Schema, type Instalment1 } from "./instalment1.js";
import { paymentInstrumentDataSchema, type PaymentInstrumentData } from "./payment-instrument-data.js";
import { paymentType1Schema, type PaymentType1 } from "./payment-type1.js";
import { transactionIdTypeSchema, type TransactionIdType } from "./transaction-id-type.js";

export type PaymentData1 = {
  paymentType?: PaymentType1;
  splitPaymentFlag?: boolean;
  requestedValidityDate?: string;
  cardAcquisitionReference?: TransactionIdType;
  instalment?: Instalment1;
  paymentInstrumentData?: PaymentInstrumentData;
};

export const paymentData1Schema: Schema<PaymentData1> = s.object<PaymentData1>({
  paymentType: s.optional(s.lazy(() => paymentType1Schema)),
  splitPaymentFlag: s.optional(s.boolean()),
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
