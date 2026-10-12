import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdditionalDataRatepay = {
  /** Amount the customer has to pay each month. */
  ratepayInstallmentAmount?: string;
  /** Interest rate of this installment. */
  ratepayInterestRate?: string;
  /** Amount of the last installment. */
  ratepayLastInstallmentAmount?: string;
  /** Calendar day of the first payment. */
  ratepayPaymentFirstday?: string;
  /** Date the merchant delivered the goods to the customer. */
  ratepaydataDeliveryDate?: string;
  /** Date by which the customer must settle the payment. */
  ratepaydataDueDate?: string;
  /**
   * Invoice date, defined by the merchant. If not included, the invoice date is set to the delivery
   * date.
   */
  ratepaydataInvoiceDate?: string;
  /** Identification name or number for the invoice, defined by the merchant. */
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
