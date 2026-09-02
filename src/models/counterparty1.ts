import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankAccount11Schema, type BankAccount11 } from "./bank-account11.js";

export type Counterparty1 = {
  bankAccount?: BankAccount11;
  transferInstrumentId?: string;
};

export const counterparty1Schema: Schema<Counterparty1> = s.object<Counterparty1>({
  bankAccount: s.optional(s.lazy(() => bankAccount11Schema)),
  transferInstrumentId: s.optional(s.string()),
});
