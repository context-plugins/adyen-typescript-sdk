import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BankAccount1 = {
  bankAccountNumber?: string;
  bankCity?: string;
  bankLocationId?: string;
  bankName?: string;
  bic?: string;
  countryCode?: string;
  iban?: string;
  ownerName?: string;
  taxId?: string;
};

export const bankAccount1Schema: Schema<BankAccount1> = s.object<BankAccount1>({
  bankAccountNumber: s.optional(s.string()),
  bankCity: s.optional(s.string()),
  bankLocationId: s.optional(s.string()),
  bankName: s.optional(s.string()),
  bic: s.optional(s.string()),
  countryCode: s.optional(s.string()),
  iban: s.optional(s.string()),
  ownerName: s.optional(s.string()),
  taxId: s.optional(s.string()),
});
