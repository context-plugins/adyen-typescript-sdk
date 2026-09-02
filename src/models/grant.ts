import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { capitalBalanceSchema, type CapitalBalance } from "./capital-balance.js";
import { grantCounterpartySchema, type GrantCounterparty } from "./grant-counterparty.js";
import { status25Schema, type Status25 } from "./status25.js";

export type Grant = {
  balances: CapitalBalance;
  counterparty?: GrantCounterparty;
  grantAccountId: string;
  grantOfferId: string;
  id: string;
  status: Status25;
};

export const grantSchema: Schema<Grant> = s.object<Grant>({
  balances: capitalBalanceSchema,
  counterparty: s.optional(s.lazy(() => grantCounterpartySchema)),
  grantAccountId: s.string(),
  grantOfferId: s.string(),
  id: s.string(),
  status: status25Schema,
});
