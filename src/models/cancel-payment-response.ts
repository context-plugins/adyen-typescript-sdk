import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { links11Schema, type Links11 } from "./links11.js";

export type CancelPaymentResponse = {
  links: Links11;
};

export const cancelPaymentResponseSchema: Schema<CancelPaymentResponse> = s.object<CancelPaymentResponse>({
  links: links11Schema,
});
