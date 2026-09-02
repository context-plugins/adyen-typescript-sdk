import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SweepCounterparty = {
  balanceAccountId?: string;
  merchantAccount?: string;
  transferInstrumentId?: string;
};

export const sweepCounterpartySchema: Schema<SweepCounterparty> = s.object<SweepCounterparty>({
  balanceAccountId: s.optional(s.string()),
  merchantAccount: s.optional(s.string()),
  transferInstrumentId: s.optional(s.string()),
});
