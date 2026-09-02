import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { links11Schema, type Links11 } from "./links11.js";

export type ConfirmPaymentResponse = {
  links: Links11;
};

export const confirmPaymentResponseSchema: Schema<ConfirmPaymentResponse> = s.object<ConfirmPaymentResponse>({
  links: links11Schema,
});
