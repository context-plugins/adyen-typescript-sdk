import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status8Schema, type Status8 } from "./status8.js";

export type PaypalUpdateOrderResponse = {
  paymentData: string;
  status: Status8;
};

export const paypalUpdateOrderResponseSchema: Schema<PaypalUpdateOrderResponse> =
  s.object<PaypalUpdateOrderResponse>({
    paymentData: s.string(),
    status: status8Schema,
  });
