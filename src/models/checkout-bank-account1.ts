import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountType1Schema, type AccountType1 } from "./account-type1.js";

export type CheckoutBankAccount1 = {
  accountType?: AccountType1;
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

export const checkoutBankAccount1Schema: Schema<CheckoutBankAccount1> = s.object<CheckoutBankAccount1>({
  accountType: s.optional(s.lazy(() => accountType1Schema)),
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
