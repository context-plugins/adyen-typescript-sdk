import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResponseAdditionalDataInstallments = {
  installmentPaymentDataInstallmentType?: string;
  installmentPaymentDataOptionItemNrAnnualPercentageRate?: string;
  installmentPaymentDataOptionItemNrFirstInstallmentAmount?: string;
  installmentPaymentDataOptionItemNrInstallmentFee?: string;
  installmentPaymentDataOptionItemNrInterestRate?: string;
  installmentPaymentDataOptionItemNrMaximumNumberOfInstallments?: string;
  installmentPaymentDataOptionItemNrMinimumNumberOfInstallments?: string;
  installmentPaymentDataOptionItemNrNumberOfInstallments?: string;
  installmentPaymentDataOptionItemNrSubsequentInstallmentAmount?: string;
  installmentPaymentDataOptionItemNrTotalAmountDue?: string;
  installmentPaymentDataPaymentOptions?: string;
  installmentsValue?: string;
};

export const responseAdditionalDataInstallmentsSchema: Schema<ResponseAdditionalDataInstallments> =
  s.object<ResponseAdditionalDataInstallments>({
    installmentPaymentDataInstallmentType: s.optional(s.string()),
    installmentPaymentDataOptionItemNrAnnualPercentageRate: s.optional(s.string()),
    installmentPaymentDataOptionItemNrFirstInstallmentAmount: s.optional(s.string()),
    installmentPaymentDataOptionItemNrInstallmentFee: s.optional(s.string()),
    installmentPaymentDataOptionItemNrInterestRate: s.optional(s.string()),
    installmentPaymentDataOptionItemNrMaximumNumberOfInstallments: s.optional(s.string()),
    installmentPaymentDataOptionItemNrMinimumNumberOfInstallments: s.optional(s.string()),
    installmentPaymentDataOptionItemNrNumberOfInstallments: s.optional(s.string()),
    installmentPaymentDataOptionItemNrSubsequentInstallmentAmount: s.optional(s.string()),
    installmentPaymentDataOptionItemNrTotalAmountDue: s.optional(s.string()),
    installmentPaymentDataPaymentOptions: s.optional(s.string()),
    installmentsValue: s.optional(s.string()),
    _keysMap: {
      installmentPaymentDataInstallmentType: "installmentPaymentData.installmentType",
      installmentPaymentDataOptionItemNrAnnualPercentageRate:
        "installmentPaymentData.option[itemNr].annualPercentageRate",
      installmentPaymentDataOptionItemNrFirstInstallmentAmount:
        "installmentPaymentData.option[itemNr].firstInstallmentAmount",
      installmentPaymentDataOptionItemNrInstallmentFee:
        "installmentPaymentData.option[itemNr].installmentFee",
      installmentPaymentDataOptionItemNrInterestRate: "installmentPaymentData.option[itemNr].interestRate",
      installmentPaymentDataOptionItemNrMaximumNumberOfInstallments:
        "installmentPaymentData.option[itemNr].maximumNumberOfInstallments",
      installmentPaymentDataOptionItemNrMinimumNumberOfInstallments:
        "installmentPaymentData.option[itemNr].minimumNumberOfInstallments",
      installmentPaymentDataOptionItemNrNumberOfInstallments:
        "installmentPaymentData.option[itemNr].numberOfInstallments",
      installmentPaymentDataOptionItemNrSubsequentInstallmentAmount:
        "installmentPaymentData.option[itemNr].subsequentInstallmentAmount",
      installmentPaymentDataOptionItemNrTotalAmountDue:
        "installmentPaymentData.option[itemNr].totalAmountDue",
      installmentPaymentDataPaymentOptions: "installmentPaymentData.paymentOptions",
      installmentsValue: "installments.value",
    },
  });
