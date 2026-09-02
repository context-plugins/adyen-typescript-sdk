import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";

export type TransferFundsRequest = {
  amount: Amount;
  destinationAccountCode: string;
  merchantReference?: string;
  sourceAccountCode: string;
  transferCode: string;
};

export const transferFundsRequestSchema: Schema<TransferFundsRequest> = s.object<TransferFundsRequest>({
  amount: amountSchema,
  destinationAccountCode: s.string(),
  merchantReference: s.optional(s.string()),
  sourceAccountCode: s.string(),
  transferCode: s.string(),
});
