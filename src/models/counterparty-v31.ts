import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankAccountV31Schema, type BankAccountV31 } from "./bank-account-v31.js";
import { card12Schema, type Card12 } from "./card12.js";
import { merchantData2Schema, type MerchantData2 } from "./merchant-data2.js";

/** The other party in the transfer. */
export type CounterpartyV31 = {
  /**
   * The unique identifier of the counterparty [balance
   * account](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts#responses-200-id).
   */
  balanceAccountId?: string;
  /** Contains information about the counterparty bank account. */
  bankAccount?: BankAccountV31;
  /** Contains information about the counterparty card. */
  card?: Card12;
  /** Contains information about the merchant. */
  merchant?: MerchantData2;
  /**
   * The unique identifier of the counterparty [transfer
   * instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments#responses-200-id).
   */
  transferInstrumentId?: string;
};

export const counterpartyV31Schema: Schema<CounterpartyV31> = s.object<CounterpartyV31>({
  balanceAccountId: s.optional(s.string()),
  bankAccount: s.optional(s.lazy(() => bankAccountV31Schema)),
  card: s.optional(s.lazy(() => card12Schema)),
  merchant: s.optional(s.lazy(() => merchantData2Schema)),
  transferInstrumentId: s.optional(s.string()),
});
