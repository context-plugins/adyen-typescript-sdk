import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankAccountV31Schema, type BankAccountV31 } from "./bank-account-v31.js";
import { card12Schema, type Card12 } from "./card12.js";
import {
  transferNotificationMerchantData2Schema,
  type TransferNotificationMerchantData2,
} from "./transfer-notification-merchant-data2.js";

export type TransferNotificationCounterParty = {
  balanceAccountId?: string;
  bankAccount?: BankAccountV31;
  card?: Card12;
  merchant?: TransferNotificationMerchantData2;
  transferInstrumentId?: string;
};

export const transferNotificationCounterPartySchema: Schema<TransferNotificationCounterParty> =
  s.object<TransferNotificationCounterParty>({
    balanceAccountId: s.optional(s.string()),
    bankAccount: s.optional(s.lazy(() => bankAccountV31Schema)),
    card: s.optional(s.lazy(() => card12Schema)),
    merchant: s.optional(s.lazy(() => transferNotificationMerchantData2Schema)),
    transferInstrumentId: s.optional(s.string()),
  });
