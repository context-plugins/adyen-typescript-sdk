import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdditionalDataRatepay = {
  ratepayInstallmentAmount?: string;
  ratepayInterestRate?: string;
  ratepayLastInstallmentAmount?: string;
  ratepayPaymentFirstday?: string;
  ratepaydataDeliveryDate?: string;
  ratepaydataDueDate?: string;
  ratepaydataInvoiceDate?: string;
  ratepaydataInvoiceId?: string;
};

export const additionalDataRatepaySchema: Schema<AdditionalDataRatepay> = s.object<AdditionalDataRatepay>({
  ratepayInstallmentAmount: s.optional(s.string()),
  ratepayInterestRate: s.optional(s.string()),
  ratepayLastInstallmentAmount: s.optional(s.string()),
  ratepayPaymentFirstday: s.optional(s.string()),
  ratepaydataDeliveryDate: s.optional(s.string()),
  ratepaydataDueDate: s.optional(s.string()),
  ratepaydataInvoiceDate: s.optional(s.string()),
  ratepaydataInvoiceId: s.optional(s.string()),
  _keysMap: {
    ratepayInstallmentAmount: "ratepay.installmentAmount",
    ratepayInterestRate: "ratepay.interestRate",
    ratepayLastInstallmentAmount: "ratepay.lastInstallmentAmount",
    ratepayPaymentFirstday: "ratepay.paymentFirstday",
    ratepaydataDeliveryDate: "ratepaydata.deliveryDate",
    ratepaydataDueDate: "ratepaydata.dueDate",
    ratepaydataInvoiceDate: "ratepaydata.invoiceDate",
    ratepaydataInvoiceId: "ratepaydata.invoiceId",
  },
});
