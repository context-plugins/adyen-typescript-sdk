import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankAccount11Schema, type BankAccount11 } from "./bank-account11.js";

export type Counterparty = {
  bankAccount?: BankAccount11;
  transferInstrumentId?: string;
};

export const counterpartySchema: Schema<Counterparty> = s.object<Counterparty>({
  bankAccount: s.optional(s.lazy(() => bankAccount11Schema)),
  transferInstrumentId: s.optional(s.string()),
});
