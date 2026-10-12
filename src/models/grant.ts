import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { capitalBalanceSchema, type CapitalBalance } from "./capital-balance.js";
import { grantCounterpartySchema, type GrantCounterparty } from "./grant-counterparty.js";
import { status25Schema, type Status25 } from "./status25.js";

export type Grant = {
  /** Contains information about the balances of the grant. */
  balances: CapitalBalance;
  /** Contains the details of the party that receives the grant. */
  counterparty?: GrantCounterparty;
  /** The unique identifier of the grant account that tracks this grant. */
  grantAccountId: string;
  /**
   * The unique identifier of the selected offer. Adyen uses the details of the selected offer to
   * create a grant.
   */
  grantOfferId: string;
  /** The unique identifier of the grant reference. */
  id: string;
  /** Contains the status of the grant. */
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
