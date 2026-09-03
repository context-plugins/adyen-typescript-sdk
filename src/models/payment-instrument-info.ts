import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankAccountModel1Schema, type BankAccountModel1 } from "./bank-account-model1.js";
import { cardInfo1Schema, type CardInfo1 } from "./card-info1.js";
import { statusReasonSchema, type StatusReason } from "./status-reason.js";
import { status10Schema, type Status10 } from "./status10.js";
import { type111Schema, type Type111 } from "./type111.js";

export type PaymentInstrumentInfo = {
  balanceAccountId: string;
  bankAccount?: BankAccountModel1;
  card?: CardInfo1;
  description?: string;
  issuingCountryCode: string;
  paymentInstrumentGroupId?: string;
  reference?: string;
  status?: Status10;
  statusComment?: string;
  statusReason?: StatusReason;
  type: Type111;
};

export const paymentInstrumentInfoSchema: Schema<PaymentInstrumentInfo> = s.object<PaymentInstrumentInfo>({
  balanceAccountId: s.string(),
  bankAccount: s.optional(s.lazy(() => bankAccountModel1Schema)),
  card: s.optional(s.lazy(() => cardInfo1Schema)),
  description: s.optional(s.string()),
  issuingCountryCode: s.string(),
  paymentInstrumentGroupId: s.optional(s.string()),
  reference: s.optional(s.string()),
  status: s.optional(s.lazy(() => status10Schema)),
  statusComment: s.optional(s.string()),
  statusReason: s.optional(s.lazy(() => statusReasonSchema)),
  type: type111Schema,
});
