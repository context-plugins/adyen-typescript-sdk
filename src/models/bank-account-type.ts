import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The bank account type (checking, savings...). */
export const BankAccountType = {
  Balance: "balance",
  Checking: "checking",
  Deposit: "deposit",
  General: "general",
  Other: "other",
  Payment: "payment",
  Savings: "savings",
} as const;
export type BankAccountType = (typeof BankAccountType)[keyof typeof BankAccountType] | (string & {});

export const bankAccountTypeSchema: EnumSchema<BankAccountType> = s.enumOf<BankAccountType>(BankAccountType);
