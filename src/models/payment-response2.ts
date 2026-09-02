import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  paymentValidationsNameResponse2Schema,
  type PaymentValidationsNameResponse2,
} from "./payment-validations-name-response2.js";

export type PaymentResponse2 = {
  name?: PaymentValidationsNameResponse2;
};

export const paymentResponse2Schema: Schema<PaymentResponse2> = s.object<PaymentResponse2>({
  name: s.optional(s.lazy(() => paymentValidationsNameResponse2Schema)),
});
