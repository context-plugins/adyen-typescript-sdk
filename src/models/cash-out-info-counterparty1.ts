import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CashOutInfoCounterparty1 = {
  transferInstrumentId?: string;
};

export const cashOutInfoCounterparty1Schema: Schema<CashOutInfoCounterparty1> =
  s.object<CashOutInfoCounterparty1>({
    transferInstrumentId: s.optional(s.string()),
  });
