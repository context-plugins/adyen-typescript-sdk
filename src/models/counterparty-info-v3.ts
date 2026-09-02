import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankAccountV31Schema, type BankAccountV31 } from "./bank-account-v31.js";
import { card12Schema, type Card12 } from "./card12.js";

export type CounterpartyInfoV3 = {
  balanceAccountId?: string;
  bankAccount?: BankAccountV31;
  card?: Card12;
  transferInstrumentId?: string;
};

export const counterpartyInfoV3Schema: Schema<CounterpartyInfoV3> = s.object<CounterpartyInfoV3>({
  balanceAccountId: s.optional(s.string()),
  bankAccount: s.optional(s.lazy(() => bankAccountV31Schema)),
  card: s.optional(s.lazy(() => card12Schema)),
  transferInstrumentId: s.optional(s.string()),
});
