import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CancelPaymentRequest = {
  token: string;
};

export const cancelPaymentRequestSchema: Schema<CancelPaymentRequest> = s.object<CancelPaymentRequest>({
  token: s.string(),
});
