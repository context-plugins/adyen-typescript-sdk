import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";
import { bankAccountDetailSchema, type BankAccountDetail } from "./bank-account-detail.js";
import { transactionStatus1Schema, type TransactionStatus1 } from "./transaction-status1.js";

export type Transaction1 = {
  amount?: Amount;
  bankAccountDetail?: BankAccountDetail;
  captureMerchantReference?: string;
  capturePspReference?: string;
  creationDate?: Date;
  description?: string;
  destinationAccountCode?: string;
  disputePspReference?: string;
  disputeReasonCode?: string;
  merchantReference?: string;
  paymentPspReference?: string;
  payoutPspReference?: string;
  pspReference?: string;
  sourceAccountCode?: string;
  transactionStatus?: TransactionStatus1;
  transferCode?: string;
};

export const transaction1Schema: Schema<Transaction1> = s.object<Transaction1>({
  amount: s.optional(s.lazy(() => amountSchema)),
  bankAccountDetail: s.optional(s.lazy(() => bankAccountDetailSchema)),
  captureMerchantReference: s.optional(s.string()),
  capturePspReference: s.optional(s.string()),
  creationDate: s.optional(s.dateTime()),
  description: s.optional(s.string()),
  destinationAccountCode: s.optional(s.string()),
  disputePspReference: s.optional(s.string()),
  disputeReasonCode: s.optional(s.string()),
  merchantReference: s.optional(s.string()),
  paymentPspReference: s.optional(s.string()),
  payoutPspReference: s.optional(s.string()),
  pspReference: s.optional(s.string()),
  sourceAccountCode: s.optional(s.string()),
  transactionStatus: s.optional(s.lazy(() => transactionStatus1Schema)),
  transferCode: s.optional(s.string()),
});
