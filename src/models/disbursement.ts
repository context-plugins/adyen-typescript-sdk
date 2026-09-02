import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";
import { capitalBalanceSchema, type CapitalBalance } from "./capital-balance.js";
import { disbursementRepayment2Schema, type DisbursementRepayment2 } from "./disbursement-repayment2.js";
import { fee22Schema, type Fee22 } from "./fee22.js";
import { fundsCollectionSchema, type FundsCollection } from "./funds-collection.js";

export type Disbursement = {
  accountHolderId: string;
  amount: Amount17;
  balanceAccountId: string;
  balances: CapitalBalance;
  fee: Fee22;
  fundsCollections?: FundsCollection[];
  grantId: string;
  id: string;
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
