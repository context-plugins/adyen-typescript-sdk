import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Type of cardholder account used for the transaction. Allows a cardholder to select the type of
 * account used for the transaction. Possible values:
 * * **CardTotals**
 * * **Checking**
 * * **CreditCard**
 * * **Default**
 * * **EpurseCard**
 * * **Investment**
 * * **Savings**
 * * **Universal**
 */
export const AccountType12 = {
  Default: "Default",
  Savings: "Savings",
  Checking: "Checking",
  CreditCard: "CreditCard",
  Universal: "Universal",
  Investment: "Investment",
  CardTotals: "CardTotals",
  EpurseCard: "EpurseCard",
} as const;
export type AccountType12 = (typeof AccountType12)[keyof typeof AccountType12] | (string & {});

export const accountType12Schema: EnumSchema<AccountType12> = s.enumOf<AccountType12>(AccountType12);
