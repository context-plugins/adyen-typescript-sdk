import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { capitalBalanceSchema, type CapitalBalance } from "./capital-balance.js";
import { grantLimit1Schema, type GrantLimit1 } from "./grant-limit1.js";

export type GrantAccount = {
  balances?: CapitalBalance[];
  fundingBalanceAccountId?: string;
  id?: string;
  limits?: GrantLimit1[];
};

export const grantAccountSchema: Schema<GrantAccount> = s.object<GrantAccount>({
  balances: s.optional(s.array(s.lazy(() => capitalBalanceSchema))),
  fundingBalanceAccountId: s.optional(s.string()),
  id: s.optional(s.string()),
  limits: s.optional(s.array(s.lazy(() => grantLimit1Schema))),
});
