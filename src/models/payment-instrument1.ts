import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankAccountDetails1Schema, type BankAccountDetails1 } from "./bank-account-details1.js";
import { card11Schema, type Card11 } from "./card11.js";
import {
  ibanAccountIdentificationSchema,
  type IbanAccountIdentification,
} from "./iban-account-identification.js";
import { statusReasonSchema, type StatusReason } from "./status-reason.js";
import { status10Schema, type Status10 } from "./status10.js";
import { type111Schema, type Type111 } from "./type111.js";

export type PaymentInstrument1 = {
  additionalBankAccountIdentifications?: IbanAccountIdentification[];
  balanceAccountId: string;
  bankAccount?: BankAccountDetails1;
  card?: Card11;
  description?: string;
  id: string;
  issuingCountryCode: string;
  paymentInstrumentGroupId?: string;
  reference?: string;
  replacedById?: string;
  replacementOfId?: string;
  status?: Status10;
  statusComment?: string;
  statusReason?: StatusReason;
  type: Type111;
};

export const paymentInstrument1Schema: Schema<PaymentInstrument1> = s.object<PaymentInstrument1>({
  additionalBankAccountIdentifications: s.optional(s.array(s.lazy(() => ibanAccountIdentificationSchema))),
  balanceAccountId: s.string(),
  bankAccount: s.optional(s.lazy(() => bankAccountDetails1Schema)),
  card: s.optional(s.lazy(() => card11Schema)),
  description: s.optional(s.string()),
  id: s.string(),
  issuingCountryCode: s.string(),
  paymentInstrumentGroupId: s.optional(s.string()),
  reference: s.optional(s.string()),
  replacedById: s.optional(s.string()),
  replacementOfId: s.optional(s.string()),
  status: s.optional(s.lazy(() => status10Schema)),
  statusComment: s.optional(s.string()),
  statusReason: s.optional(s.lazy(() => statusReasonSchema)),
  type: type111Schema,
});
