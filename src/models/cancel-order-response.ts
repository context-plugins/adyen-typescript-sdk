import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CancelOrderResponse = {
  pspReference: string;
  resultCode: "Received";
};

export const cancelOrderResponseSchema: Schema<CancelOrderResponse> = s.object<CancelOrderResponse>({
  pspReference: s.string(),
  resultCode: s.literal("Received"),
});
