import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionListForAccountSchema,
  type TransactionListForAccount,
} from "./transaction-list-for-account.js";
import { transactionStatusSchema, type TransactionStatus } from "./transaction-status.js";

export type AccountHolderTransactionListRequest = {
  /**
   * The code of the account holder that owns the account(s) of which retrieve the transaction list.
   */
  accountHolderCode: string;
  /**
   * A list of accounts to include in the transaction list. If left blank, the last fifty (50)
   * transactions for all accounts of the account holder will be included.
   */
  transactionListsPerAccount?: TransactionListForAccount[];
  /**
   * A list of statuses to include in the transaction list. If left blank, all transactions will be
   * included. >Permitted values: >* `PendingCredit` - a pending balance credit. >* `CreditFailed` -
   * a pending credit failure; the balance will not be credited. >* `Credited` - a credited balance.
   * >* `PendingDebit` - a pending balance debit (e.g., a refund). >* `CreditClosed` - a pending
   * credit closed; the balance will not be credited. >* `CreditSuspended` - a pending credit
   * closed; the balance will not be credited. >* `DebitFailed` - a pending debit failure; the
   * balance will not be debited. >* `Debited` - a debited balance (e.g., a refund). >*
   * `DebitReversedReceived` - a pending refund reversal. >* `DebitedReversed` - a reversed refund.
   * >* `ChargebackReceived` - a received chargeback request. >* `Chargeback` - a processed
   * chargeback. >* `ChargebackReversedReceived` - a pending chargeback reversal. >*
   * `ChargebackReversed` - a reversed chargeback. >* `Converted` - converted. >* `ManualCorrected`
   * - manual booking/adjustment by Adyen. >* `Payout` - a payout. >* `PayoutReversed` - a reversed
   * payout. >* `PendingFundTransfer` - a pending transfer of funds from one account to another. >*
   * `FundTransfer` - a transfer of funds from one account to another.
   */
  transactionStatuses?: TransactionStatus[];
};

export const accountHolderTransactionListRequestSchema: Schema<AccountHolderTransactionListRequest> =
  s.object<AccountHolderTransactionListRequest>({
    accountHolderCode: s.string(),
    transactionListsPerAccount: s.optional(s.array(s.lazy(() => transactionListForAccountSchema))),
    transactionStatuses: s.optional(s.array(s.lazy(() => transactionStatusSchema))),
  });
