import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";
import { bankAccountDetailSchema, type BankAccountDetail } from "./bank-account-detail.js";
import { transactionStatus1Schema, type TransactionStatus1 } from "./transaction-status1.js";

export type Transaction1 = {
  /** The amount of the transaction. */
  amount?: Amount;
  /** The details of the bank account to where a payout was made. */
  bankAccountDetail?: BankAccountDetail;
  /** The merchant reference of a related capture. */
  captureMerchantReference?: string;
  /** The psp reference of a related capture. */
  capturePspReference?: string;
  /** The date on which the transaction was performed. */
  creationDate?: Date;
  /** A description of the transaction. */
  description?: string;
  /** The code of the account to which funds were credited during an outgoing fund transfer. */
  destinationAccountCode?: string;
  /** The psp reference of the related dispute. */
  disputePspReference?: string;
  /** The reason code of a dispute. */
  disputeReasonCode?: string;
  /** The merchant reference of a transaction. */
  merchantReference?: string;
  /** The psp reference of the related authorisation or transfer. */
  paymentPspReference?: string;
  /** The psp reference of the related payout. */
  payoutPspReference?: string;
  /** The psp reference of a transaction. */
  pspReference?: string;
  /** The code of the account from which funds were debited during an incoming fund transfer. */
  sourceAccountCode?: string;
  /**
   * The status of the transaction. >Permitted values: `PendingCredit`, `CreditFailed`,
   * `CreditClosed`, `CreditSuspended`, `Credited`, `Converted`, `PendingDebit`, `DebitFailed`,
   * `Debited`, `DebitReversedReceived`, `DebitedReversed`, `ChargebackReceived`, `Chargeback`,
   * `ChargebackReversedReceived`, `ChargebackReversed`, `Payout`, `PayoutReversed`, `FundTransfer`,
   * `PendingFundTransfer`, `ManualCorrected`.
   */
  transactionStatus?: TransactionStatus1;
  /** The transfer code of the transaction. */
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
