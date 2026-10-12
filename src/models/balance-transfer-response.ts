import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BalanceTransferResponse = {
  /** The date when the balance transfer was performed. */
  createdAt: Date;
  /** Adyen's 16-character string reference associated with the balance transfer. */
  pspReference: string;
};

export const balanceTransferResponseSchema: Schema<BalanceTransferResponse> =
  s.object<BalanceTransferResponse>({
    createdAt: s.dateTime(),
    pspReference: s.string(),
  });
