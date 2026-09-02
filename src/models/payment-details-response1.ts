import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentDetails11Schema, type PaymentDetails11 } from "./payment-details11.js";

export type PaymentDetailsResponse1 = {
  details: PaymentDetails11;
  token: string;
};

export const paymentDetailsResponse1Schema: Schema<PaymentDetailsResponse1> =
  s.object<PaymentDetailsResponse1>({
    details: paymentDetails11Schema,
    token: s.string(),
  });
