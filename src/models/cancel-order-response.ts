import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CancelOrderResponse = {
  /** A unique reference of the cancellation request. */
  pspReference: string;
  /**
   * The result of the cancellation request.
   *
   * Possible values:
   *
   * * **Received** – Indicates the cancellation has successfully been received by Adyen, and will
   *   be processed.
   *
   * @default "Received"
   */
  resultCode?: "Received";
};

export const cancelOrderResponseSchema: Schema<CancelOrderResponse> = s.object<CancelOrderResponse>({
  pspReference: s.string(),
  resultCode: s.defaulted(s.literal("Received"), "Received"),
});
