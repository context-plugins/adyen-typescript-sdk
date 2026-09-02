import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AccountType4 = {
  Default: "Default",
  Savings: "Savings",
  Checking: "Checking",
  CreditCard: "CreditCard",
  Universal: "Universal",
  Investment: "Investment",
  CardTotals: "CardTotals",
  EpurseCard: "EpurseCard",
} as const;
export type AccountType4 = (typeof AccountType4)[keyof typeof AccountType4] | (string & {});

export const accountType4Schema: EnumSchema<AccountType4> = s.enumOf<AccountType4>(AccountType4);
