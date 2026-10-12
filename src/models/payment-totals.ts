import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transactionType11Schema, type TransactionType11 } from "./transaction-type11.js";

/** Totals of the payment transaction during the reconciliation period. */
export type PaymentTotals = {
  /**
   * Type of transaction for which totals are grouped. Debit, Credit, ReverseDebit, ReverseCredit,
   * OneTimeReservation, CompletedDeffered, FirstReservation, UpdateReservation,
   * CompletedReservation, CashAdvance. Possible values:
   * * **Award**
   * * **CashAdvance**
   * * **CompletedDeffered**
   * * **CompletedReservation**
   * * **Credit**
   * * **Debit**
   * * **Declined**
   * * **Failed**
   * * **FirstReservation**
   * * **IssuerInstalment**
   * * **OneTimeReservation**
   * * **Rebate**
   * * **Redemption**
   * * **ReverseAward**
   * * **ReverseCredit**
   * * **ReverseDebit**
   * * **ReverseRebate**
   * * **ReverseRedemption**
   * * **UpdateReservation**
   */
  transactionType: TransactionType11;
  /** Number of processed transaction during the period. */
  transactionCount: number;
  /** Sum of amount of processed transaction during the period. */
  transactionAmount: number;
};

export const paymentTotalsSchema: Schema<PaymentTotals> = s.object<PaymentTotals>({
  transactionType: transactionType11Schema,
  transactionCount: s.int(),
  transactionAmount: s.float64(),
  _keysMap: {
    transactionType: "TransactionType",
    transactionCount: "TransactionCount",
    transactionAmount: "TransactionAmount",
  },
});
