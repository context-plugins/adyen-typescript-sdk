import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TopUpCounterparty = {
  /**
   * The unique identifier of the [transfer
   * instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments#responses-200-id)
   * that is funding the top-up.
   */
  transferInstrumentId: string;
};

export const topUpCounterpartySchema: Schema<TopUpCounterparty> = s.object<TopUpCounterparty>({
  transferInstrumentId: s.string(),
});
