import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountHolderTypeSchema, type AccountHolderType } from "./account-holder-type.js";
import { bankAccountTypeSchema, type BankAccountType } from "./bank-account-type.js";
import { typeSchema, type Type } from "./type.js";

export type AchDirectDebit = {
  accountHolderType?: AccountHolderType;
  bankAccountNumber?: string;
  bankAccountType?: BankAccountType;
  bankLocationId?: string;
  checkoutAttemptId?: string;
  encryptedBankAccountNumber?: string;
  encryptedBankLocationId?: string;
  ownerName?: string;
  recurringDetailReference?: string;
  sdkData?: string;
  storedPaymentMethodId?: string;
  transferInstrumentId?: string;
  type?: Type;
};

export const achDirectDebitSchema: Schema<AchDirectDebit> = s.object<AchDirectDebit>({
  accountHolderType: s.optional(s.lazy(() => accountHolderTypeSchema)),
  bankAccountNumber: s.optional(s.string()),
  bankAccountType: s.optional(s.lazy(() => bankAccountTypeSchema)),
  bankLocationId: s.optional(s.string()),
  checkoutAttemptId: s.optional(s.string()),
  encryptedBankAccountNumber: s.optional(s.string()),
  encryptedBankLocationId: s.optional(s.string()),
  ownerName: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  transferInstrumentId: s.optional(s.string()),
  type: s.optional(s.lazy(() => typeSchema)),
});
