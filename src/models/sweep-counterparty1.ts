import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SweepCounterparty1 = {
  balanceAccountId?: string;
  merchantAccount?: string;
  transferInstrumentId?: string;
};

export const sweepCounterparty1Schema: Schema<SweepCounterparty1> = s.object<SweepCounterparty1>({
  balanceAccountId: s.optional(s.string()),
  merchantAccount: s.optional(s.string()),
  transferInstrumentId: s.optional(s.string()),
});
