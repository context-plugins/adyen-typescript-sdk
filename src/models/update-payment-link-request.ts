import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UpdatePaymentLinkRequest = {
  /**
   * Status of the payment link. Possible values:
   * * **expired**
   *
   * @default "expired"
   */
  status?: "expired";
};

export const updatePaymentLinkRequestSchema: Schema<UpdatePaymentLinkRequest> =
  s.object<UpdatePaymentLinkRequest>({
    status: s.defaulted(s.literal("expired"), "expired"),
  });
