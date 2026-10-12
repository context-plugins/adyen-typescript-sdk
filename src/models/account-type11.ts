import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of the bank account. Possible values are **CURRENT**, **SAVINGS**, **BUSINESS**,
 * **CREDIT_CARD**, **LOAN**, **UNKNOWN**.
 */
export const AccountType11 = {
  Current: "CURRENT",
  Savings: "SAVINGS",
  Business: "BUSINESS",
  CreditCard: "CREDIT_CARD",
  Loan: "LOAN",
  Unknown: "UNKNOWN",
} as const;
export type AccountType11 = (typeof AccountType11)[keyof typeof AccountType11] | (string & {});

export const accountType11Schema: EnumSchema<AccountType11> = s.enumOf<AccountType11>(AccountType11);
