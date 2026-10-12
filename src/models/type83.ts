import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of transfer or transaction. For example, **refund**, **payment**, **internalTransfer**,
 * **bankTransfer**.
 */
export const Type83 = {
  Payment: "payment",
  Capture: "capture",
  CaptureReversal: "captureReversal",
  Refund: "refund",
  RefundReversal: "refundReversal",
  Chargeback: "chargeback",
  ChargebackCorrection: "chargebackCorrection",
  ChargebackReversal: "chargebackReversal",
  ChargebackReversalCorrection: "chargebackReversalCorrection",
  SecondChargeback: "secondChargeback",
  SecondChargebackCorrection: "secondChargebackCorrection",
  AtmWithdrawal: "atmWithdrawal",
  AtmWithdrawalReversal: "atmWithdrawalReversal",
  InternalTransfer: "internalTransfer",
  InternalDirectDebit: "internalDirectDebit",
  ManualCorrection: "manualCorrection",
  InvoiceDeduction: "invoiceDeduction",
  DepositCorrection: "depositCorrection",
  ReserveAdjustment: "reserveAdjustment",
  BankTransfer: "bankTransfer",
  BankDirectDebit: "bankDirectDebit",
  CardTransfer: "cardTransfer",
  MiscCost: "miscCost",
  PaymentCost: "paymentCost",
  Fee: "fee",
  Leftover: "leftover",
  Grant: "grant",
  CapitalFundsCollection: "capitalFundsCollection",
  CashOutInstruction: "cashOutInstruction",
  CashoutFee: "cashoutFee",
  CashoutRepayment: "cashoutRepayment",
  CashoutFunding: "cashoutFunding",
  Repayment: "repayment",
  Installment: "installment",
  InstallmentReversal: "installmentReversal",
  BalanceAdjustment: "balanceAdjustment",
  BalanceRollover: "balanceRollover",
  BalanceMigration: "balanceMigration",
} as const;
export type Type83 = (typeof Type83)[keyof typeof Type83] | (string & {});

export const type83Schema: EnumSchema<Type83> = s.enumOf<Type83>(Type83);
