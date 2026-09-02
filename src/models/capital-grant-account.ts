import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { capitalBalanceSchema, type CapitalBalance } from "./capital-balance.js";
import { grantLimitSchema, type GrantLimit } from "./grant-limit.js";

export type CapitalGrantAccount = {
  balances?: CapitalBalance[];
  fundingBalanceAccountId?: string;
  id?: string;
  limits?: GrantLimit[];
};

export const capitalGrantAccountSchema: Schema<CapitalGrantAccount> = s.object<CapitalGrantAccount>({
  balances: s.optional(s.array(s.lazy(() => capitalBalanceSchema))),
  fundingBalanceAccountId: s.optional(s.string()),
  id: s.optional(s.string()),
  limits: s.optional(s.array(s.lazy(() => grantLimitSchema))),
});
