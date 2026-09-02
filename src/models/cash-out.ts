import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";
import {
  cashOutInfoCounterparty1Schema,
  type CashOutInfoCounterparty1,
} from "./cash-out-info-counterparty1.js";
import { cashOutTransferSchema, type CashOutTransfer } from "./cash-out-transfer.js";
import { fee21Schema, type Fee21 } from "./fee21.js";

export type CashOut = {
  amount: Amount17;
  counterparty?: CashOutInfoCounterparty1;
  description?: string;
  fee?: Fee21;
  id: string;
  instructingBalanceAccountId: string;
  referenceForBeneficiary?: string;
  transferInstrumentId?: string;
  transfers: CashOutTransfer[];
};

export const cashOutSchema: Schema<CashOut> = s.object<CashOut>({
  amount: amount17Schema,
  counterparty: s.optional(s.lazy(() => cashOutInfoCounterparty1Schema)),
  description: s.optional(s.string()),
  fee: s.optional(s.lazy(() => fee21Schema)),
  id: s.string(),
  instructingBalanceAccountId: s.string(),
  referenceForBeneficiary: s.optional(s.string()),
  transferInstrumentId: s.optional(s.string()),
  transfers: s.array(s.lazy(() => cashOutTransferSchema)),
});
