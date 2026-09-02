import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GrantCounterparty2 = {
  accountHolderId?: string;
  balanceAccountId?: string;
  transferInstrumentId?: string;
};

export const grantCounterparty2Schema: Schema<GrantCounterparty2> = s.object<GrantCounterparty2>({
  accountHolderId: s.optional(s.string()),
  balanceAccountId: s.optional(s.string()),
  transferInstrumentId: s.optional(s.string()),
});
