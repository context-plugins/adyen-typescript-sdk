import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConfirmPaymentRequest = {
  balanceAccountId: string;
  token: string;
};

export const confirmPaymentRequestSchema: Schema<ConfirmPaymentRequest> = s.object<ConfirmPaymentRequest>({
  balanceAccountId: s.string(),
  token: s.string(),
});
