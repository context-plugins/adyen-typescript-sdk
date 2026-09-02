import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GrantInfoCounterparty2 = {
  balanceAccountId?: string;
  transferInstrumentId?: string;
};

export const grantInfoCounterparty2Schema: Schema<GrantInfoCounterparty2> = s.object<GrantInfoCounterparty2>({
  balanceAccountId: s.optional(s.string()),
  transferInstrumentId: s.optional(s.string()),
});
