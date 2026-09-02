import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CashOutInfoCounterparty = {
  transferInstrumentId?: string;
};

export const cashOutInfoCounterpartySchema: Schema<CashOutInfoCounterparty> =
  s.object<CashOutInfoCounterparty>({
    transferInstrumentId: s.optional(s.string()),
  });
