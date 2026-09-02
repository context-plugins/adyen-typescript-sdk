import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GrantInfoCounterparty = {
  balanceAccountId?: string;
  transferInstrumentId?: string;
};

export const grantInfoCounterpartySchema: Schema<GrantInfoCounterparty> = s.object<GrantInfoCounterparty>({
  balanceAccountId: s.optional(s.string()),
  transferInstrumentId: s.optional(s.string()),
});
