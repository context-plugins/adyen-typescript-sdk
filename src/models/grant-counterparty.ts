import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GrantCounterparty = {
  accountHolderId?: string;
  balanceAccountId?: string;
  transferInstrumentId?: string;
};

export const grantCounterpartySchema: Schema<GrantCounterparty> = s.object<GrantCounterparty>({
  accountHolderId: s.optional(s.string()),
  balanceAccountId: s.optional(s.string()),
  transferInstrumentId: s.optional(s.string()),
});
