import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";
import { capitalBalanceSchema, type CapitalBalance } from "./capital-balance.js";
import { fee4Schema, type Fee4 } from "./fee4.js";
import { grantCounterparty2Schema, type GrantCounterparty2 } from "./grant-counterparty2.js";
import { repaymentSchema, type Repayment } from "./repayment.js";
import { status14Schema, type Status14 } from "./status14.js";

export type CapitalGrant = {
  amount?: Amount17;
  balances: CapitalBalance;
  counterparty?: GrantCounterparty2;
  fee?: Fee4;
  grantAccountId: string;
  grantOfferId: string;
  id: string;
  repayment?: Repayment;
  status: Status14;
};

export const capitalGrantSchema: Schema<CapitalGrant> = s.object<CapitalGrant>({
  amount: s.optional(s.lazy(() => amount17Schema)),
  balances: capitalBalanceSchema,
  counterparty: s.optional(s.lazy(() => grantCounterparty2Schema)),
  fee: s.optional(s.lazy(() => fee4Schema)),
  grantAccountId: s.string(),
  grantOfferId: s.string(),
  id: s.string(),
  repayment: s.optional(s.lazy(() => repaymentSchema)),
  status: status14Schema,
});
