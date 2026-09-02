import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankAccountV31Schema, type BankAccountV31 } from "./bank-account-v31.js";
import { card12Schema, type Card12 } from "./card12.js";
import { merchantData2Schema, type MerchantData2 } from "./merchant-data2.js";

export type CounterpartyV3 = {
  balanceAccountId?: string;
  bankAccount?: BankAccountV31;
  card?: Card12;
  merchant?: MerchantData2;
  transferInstrumentId?: string;
};

export const counterpartyV3Schema: Schema<CounterpartyV3> = s.object<CounterpartyV3>({
  balanceAccountId: s.optional(s.string()),
  bankAccount: s.optional(s.lazy(() => bankAccountV31Schema)),
  card: s.optional(s.lazy(() => card12Schema)),
  merchant: s.optional(s.lazy(() => merchantData2Schema)),
  transferInstrumentId: s.optional(s.string()),
});
