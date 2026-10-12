import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankAccount11Schema, type BankAccount11 } from "./bank-account11.js";

/** The recipient of the funds transfer. A bank account or a transfer instrument. */
export type Counterparty1 = {
  /** Contains information about the bank account. */
  bankAccount?: BankAccount11;
  /**
   * The unique identifier of the [transfer
   * instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id).
   */
  transferInstrumentId?: string;
};

export const counterparty1Schema: Schema<Counterparty1> = s.object<Counterparty1>({
  bankAccount: s.optional(s.lazy(() => bankAccount11Schema)),
  transferInstrumentId: s.optional(s.string()),
});
