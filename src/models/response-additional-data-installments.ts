import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResponseAdditionalDataInstallments = {
  /** Type of installment. The value of `installmentType` should be **IssuerFinanced**. */
  installmentPaymentDataInstallmentType?: string;
  /** Annual interest rate. */
  installmentPaymentDataOptionItemNrAnnualPercentageRate?: string;
  /** First Installment Amount in minor units. */
  installmentPaymentDataOptionItemNrFirstInstallmentAmount?: string;
  /** Installment fee amount in minor units. */
  installmentPaymentDataOptionItemNrInstallmentFee?: string;
  /** Interest rate for the installment period. */
  installmentPaymentDataOptionItemNrInterestRate?: string;
  /** Maximum number of installments possible for this payment. */
  installmentPaymentDataOptionItemNrMaximumNumberOfInstallments?: string;
  /** Minimum number of installments possible for this payment. */
  installmentPaymentDataOptionItemNrMinimumNumberOfInstallments?: string;
  /** Total number of installments possible for this payment. */
  installmentPaymentDataOptionItemNrNumberOfInstallments?: string;
  /** Subsequent Installment Amount in minor units. */
  installmentPaymentDataOptionItemNrSubsequentInstallmentAmount?: string;
  /** Total amount in minor units. */
  installmentPaymentDataOptionItemNrTotalAmountDue?: string;
  /**
   * Possible values:
   * * PayInInstallmentsOnly
   * * PayInFullOnly
   * * PayInFullOrInstallments
   */
  installmentPaymentDataPaymentOptions?: string;
  /**
   * The number of installments that the payment amount should be charged with.
   *
   * Example: 5 > Only relevant for card payments in countries that support installments.
   */
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
