import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentInstrumentType11Schema, type PaymentInstrumentType11 } from "./payment-instrument-type11.js";
import { paymentTotalsSchema, type PaymentTotals } from "./payment-totals.js";

export type TransactionTotals = {
  paymentInstrumentType: PaymentInstrumentType11;
  acquirerId?: number;
  hostReconciliationId?: string;
  cardBrand?: string;
  poiid?: string;
  saleId?: string;
  operatorId?: string;
  shiftNumber?: string;
  totalsGroupId?: string;
  paymentCurrency?: string;
  paymentTotals?: PaymentTotals[];
};

export const transactionTotalsSchema: Schema<TransactionTotals> = s.object<TransactionTotals>({
  paymentInstrumentType: paymentInstrumentType11Schema,
  acquirerId: s.optional(s.number()),
  hostReconciliationId: s.optional(s.string()),
  cardBrand: s.optional(s.string()),
  poiid: s.optional(s.string()),
  saleId: s.optional(s.string()),
  operatorId: s.optional(s.string()),
  shiftNumber: s.optional(s.string()),
  totalsGroupId: s.optional(s.string()),
  paymentCurrency: s.optional(s.string()),
  paymentTotals: s.optional(s.array(s.lazy(() => paymentTotalsSchema))),
  _keysMap: {
    paymentInstrumentType: "PaymentInstrumentType",
    acquirerId: "AcquirerID",
    hostReconciliationId: "HostReconciliationID",
    cardBrand: "CardBrand",
    poiid: "POIID",
    saleId: "SaleID",
    operatorId: "OperatorID",
    shiftNumber: "ShiftNumber",
    totalsGroupId: "TotalsGroupID",
    paymentCurrency: "PaymentCurrency",
    paymentTotals: "PaymentTotals",
  },
});
