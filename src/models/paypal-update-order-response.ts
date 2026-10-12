import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status4Schema, type Status4 } from "./status4.js";

export type PaypalUpdateOrderResponse = {
  /** The updated paymentData. */
  paymentData: string;
  /**
   * The status of the request. This indicates whether the order was successfully updated with
   * PayPal.
   */
  status: Status4;
};

export const paypalUpdateOrderResponseSchema: Schema<PaypalUpdateOrderResponse> =
  s.object<PaypalUpdateOrderResponse>({
    paymentData: s.string(),
    status: status4Schema,
  });
