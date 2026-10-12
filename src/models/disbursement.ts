import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";
import { capitalBalanceSchema, type CapitalBalance } from "./capital-balance.js";
import { disbursementRepayment2Schema, type DisbursementRepayment2 } from "./disbursement-repayment2.js";
import { fee22Schema, type Fee22 } from "./fee22.js";
import { fundsCollectionSchema, type FundsCollection } from "./funds-collection.js";

export type Disbursement = {
  /** The unique identifier of the account holder that received the disbursement. */
  accountHolderId: string;
  /** Contains information about the amount of the disbursement. */
  amount: Amount17;
  /** The unique identifier of the balance account that received the disbursement. */
  balanceAccountId: string;
  /** Contains information about the balances of the disbursement. */
  balances: CapitalBalance;
  /** Contains information about the fee that your user must pay for the disbursement. */
  fee: Fee22;
  /**
   * Contains information about the accounts that Adyen uses to collect funds related to repayments.
   */
  fundsCollections?: FundsCollection[];
  /** The unique identifier of the grant related to the disbursement. */
  grantId: string;
  /** The unique identifier of the disbursement. */
  id: string;
  /** Contains information about the basis points configured for repaying the disbursement. */
  repayment: DisbursementRepayment2;
};

export const disbursementSchema: Schema<Disbursement> = s.object<Disbursement>({
  accountHolderId: s.string(),
  amount: amount17Schema,
  balanceAccountId: s.string(),
  balances: capitalBalanceSchema,
  fee: fee22Schema,
  fundsCollections: s.optional(s.array(s.lazy(() => fundsCollectionSchema))),
  grantId: s.string(),
  id: s.string(),
  repayment: disbursementRepayment2Schema,
});
