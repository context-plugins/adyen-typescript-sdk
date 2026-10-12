import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Contains information about the counterparty of the cashout transfer. */
export type CashOutInfoCounterparty1 = {
  /**
   * The unique identifier of the counterparty transfer instrument.
   *
   * If you do not provide this field, the cashout funds remain in the instructing balance account
   * after the cashout transfer is settled.
   */
  transferInstrumentId?: string;
};

export const cashOutInfoCounterparty1Schema: Schema<CashOutInfoCounterparty1> =
  s.object<CashOutInfoCounterparty1>({
    transferInstrumentId: s.optional(s.string()),
  });
