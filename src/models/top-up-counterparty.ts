import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TopUpCounterparty = {
  transferInstrumentId: string;
};

export const topUpCounterpartySchema: Schema<TopUpCounterparty> = s.object<TopUpCounterparty>({
  transferInstrumentId: s.string(),
});
