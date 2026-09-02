import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";
import { balanceTransferType2Schema, type BalanceTransferType2 } from "./balance-transfer-type2.js";

export type BalanceTransferRequest = {
  amount: Amount17;
  fromMerchant: string;
  reference?: string;
  toMerchant: string;
  type: BalanceTransferType2;
};

export const balanceTransferRequestSchema: Schema<BalanceTransferRequest> = s.object<BalanceTransferRequest>({
  amount: amount17Schema,
  fromMerchant: s.string(),
  reference: s.optional(s.string()),
  toMerchant: s.string(),
  type: balanceTransferType2Schema,
});
