import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Type of transaction for which totals are grouped. Debit, Credit, ReverseDebit, ReverseCredit,
 * OneTimeReservation, CompletedDeffered, FirstReservation, UpdateReservation, CompletedReservation,
 * CashAdvance. Possible values:
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
export const TransactionType11 = {
  Debit: "Debit",
  Credit: "Credit",
  ReverseDebit: "ReverseDebit",
  ReverseCredit: "ReverseCredit",
  OneTimeReservation: "OneTimeReservation",
  CompletedDeffered: "CompletedDeffered",
  FirstReservation: "FirstReservation",
  UpdateReservation: "UpdateReservation",
  CompletedReservation: "CompletedReservation",
  CashAdvance: "CashAdvance",
  IssuerInstalment: "IssuerInstalment",
  Declined: "Declined",
  Failed: "Failed",
  Award: "Award",
  ReverseAward: "ReverseAward",
  Redemption: "Redemption",
  ReverseRedemption: "ReverseRedemption",
  Rebate: "Rebate",
  ReverseRebate: "ReverseRebate",
} as const;
export type TransactionType11 = (typeof TransactionType11)[keyof typeof TransactionType11] | (string & {});

export const transactionType11Schema: EnumSchema<TransactionType11> =
  s.enumOf<TransactionType11>(TransactionType11);
