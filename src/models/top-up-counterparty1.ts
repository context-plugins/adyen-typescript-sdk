import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The details about the counterparty that is funding the top-up. */
export type TopUpCounterparty1 = {
  /**
   * The unique identifier of the [transfer
   * instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments#responses-200-id)
   * that is funding the top-up.
   */
  transferInstrumentId: string;
};

export const topUpCounterparty1Schema: Schema<TopUpCounterparty1> = s.object<TopUpCounterparty1>({
  transferInstrumentId: s.string(),
});
