import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { links11Schema, type Links11 } from "./links11.js";

export type CancelPaymentResponse = {
  /**
   * Contains redirection URLs to guide the user to the appropriate page, after a successful payment
   * or a cancellation.
   */
  links: Links11;
};

export const cancelPaymentResponseSchema: Schema<CancelPaymentResponse> = s.object<CancelPaymentResponse>({
  links: links11Schema,
});
