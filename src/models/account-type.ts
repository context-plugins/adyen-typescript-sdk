import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AccountType = {
  NotApplicable: "notApplicable",
  Credit: "credit",
  Debit: "debit",
} as const;
export type AccountType = (typeof AccountType)[keyof typeof AccountType] | (string & {});

export const accountTypeSchema: EnumSchema<AccountType> = s.enumOf<AccountType>(AccountType);
