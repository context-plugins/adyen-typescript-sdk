import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankAccountV31Schema, type BankAccountV31 } from "./bank-account-v31.js";
import { card12Schema, type Card12 } from "./card12.js";

/**
 * The other party involved in the funds transfer. A bank account, a balance account, a card, or a
 * transfer instrument is required.
 */
export type CounterpartyInfoV31 = {
  /**
   * The unique identifier of the counterparty [balance
   * account](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts#responses-200-id).
   */
  balanceAccountId?: string;
  /** Contains information about the counterparty bank account. */
  bankAccount?: BankAccountV31;
  /** Contains information about the counterparty card. */
  card?: Card12;
  /**
   * The unique identifier of the counterparty [transfer
   * instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments#responses-200-id).
   */
  transferInstrumentId?: string;
};

export const counterpartyInfoV31Schema: Schema<CounterpartyInfoV31> = s.object<CounterpartyInfoV31>({
  balanceAccountId: s.optional(s.string()),
  bankAccount: s.optional(s.lazy(() => bankAccountV31Schema)),
  card: s.optional(s.lazy(() => card12Schema)),
  transferInstrumentId: s.optional(s.string()),
});
