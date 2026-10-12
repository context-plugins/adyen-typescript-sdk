import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CashOutInfoCounterparty = {
  /**
   * The unique identifier of the counterparty transfer instrument.
   *
   * If you do not provide this field, the cashout funds remain in the instructing balance account
   * after the cashout transfer is settled.
   */
  transferInstrumentId?: string;
};

export const cashOutInfoCounterpartySchema: Schema<CashOutInfoCounterparty> =
  s.object<CashOutInfoCounterparty>({
    transferInstrumentId: s.optional(s.string()),
  });
