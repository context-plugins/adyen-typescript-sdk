import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An object containing the details of the receiving party of the grant. */
export type GrantCounterparty2 = {
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

export const grantCounterparty2Schema: Schema<GrantCounterparty2> = s.object<GrantCounterparty2>({
  accountHolderId: s.optional(s.string()),
  balanceAccountId: s.optional(s.string()),
  transferInstrumentId: s.optional(s.string()),
});
