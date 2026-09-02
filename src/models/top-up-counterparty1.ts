import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TopUpCounterparty1 = {
  transferInstrumentId: string;
};

export const topUpCounterparty1Schema: Schema<TopUpCounterparty1> = s.object<TopUpCounterparty1>({
  transferInstrumentId: s.string(),
});
