import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Contains the details of the party that receives the grant. */
export type GrantCounterparty = {
  /** The identifier of the receiving account holder. */
  accountHolderId?: string;
  /** The identifier of the balance account that belongs to the receiving account holder. */
  balanceAccountId?: string;
  /**
   * The identifier of the transfer instrument that belongs to the legal entity of the account
   * holder.
   */
  transferInstrumentId?: string;
};

export const grantCounterpartySchema: Schema<GrantCounterparty> = s.object<GrantCounterparty>({
  accountHolderId: s.optional(s.string()),
  balanceAccountId: s.optional(s.string()),
  transferInstrumentId: s.optional(s.string()),
});
