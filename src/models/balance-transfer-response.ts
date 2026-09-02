import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BalanceTransferResponse = {
  createdAt: Date;
  pspReference: string;
};

export const balanceTransferResponseSchema: Schema<BalanceTransferResponse> =
  s.object<BalanceTransferResponse>({
    createdAt: s.dateTime(),
    pspReference: s.string(),
  });
