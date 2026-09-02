import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AccountType1 = {
  Balance: "balance",
  Checking: "checking",
  Deposit: "deposit",
  General: "general",
  Other: "other",
  Payment: "payment",
  Savings: "savings",
} as const;
export type AccountType1 = (typeof AccountType1)[keyof typeof AccountType1] | (string & {});

export const accountType1Schema: EnumSchema<AccountType1> = s.enumOf<AccountType1>(AccountType1);
