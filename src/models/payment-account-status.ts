import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentAcquirerDataSchema, type PaymentAcquirerData } from "./payment-acquirer-data.js";
import { paymentInstrumentDataSchema, type PaymentInstrumentData } from "./payment-instrument-data.js";

export type PaymentAccountStatus = {
  paymentInstrumentData?: PaymentInstrumentData;
  currentBalance?: number;
  currency?: string;
  paymentAcquirerData?: PaymentAcquirerData;
};

export const paymentAccountStatusSchema: Schema<PaymentAccountStatus> = s.object<PaymentAccountStatus>({
  paymentInstrumentData: s.optional(s.lazy(() => paymentInstrumentDataSchema)),
  currentBalance: s.optional(s.number()),
  currency: s.optional(s.string()),
  paymentAcquirerData: s.optional(s.lazy(() => paymentAcquirerDataSchema)),
  _keysMap: {
    paymentInstrumentData: "PaymentInstrumentData",
    currentBalance: "CurrentBalance",
    currency: "Currency",
    paymentAcquirerData: "PaymentAcquirerData",
  },
});
