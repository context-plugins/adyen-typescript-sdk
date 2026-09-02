import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BankAccountDetails1 = {
  accountNumber?: string;
  accountType?: string;
  branchNumber?: string;
  formFactor?: string;
  iban?: string;
  routingNumber?: string;
  sortCode?: string;
  type: string;
};

export const bankAccountDetails1Schema: Schema<BankAccountDetails1> = s.object<BankAccountDetails1>({
  accountNumber: s.optional(s.string()),
  accountType: s.optional(s.string()),
  branchNumber: s.optional(s.string()),
  formFactor: s.optional(s.string()),
  iban: s.optional(s.string()),
  routingNumber: s.optional(s.string()),
  sortCode: s.optional(s.string()),
  type: s.string(),
});
