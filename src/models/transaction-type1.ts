import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TransactionType1 = {
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
export type TransactionType1 = (typeof TransactionType1)[keyof typeof TransactionType1] | (string & {});

export const transactionType1Schema: EnumSchema<TransactionType1> =
  s.enumOf<TransactionType1>(TransactionType1);
