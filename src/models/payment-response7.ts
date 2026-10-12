import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  paymentValidationsNameResponse2Schema,
  type PaymentValidationsNameResponse2,
} from "./payment-validations-name-response2.js";

export type PaymentResponse7 = {
  /**
   * Object that contains the status and outcomes of the [name
   * validation](https://docs.adyen.com/payment-methods/cards/name-validation).
   */
  name?: PaymentValidationsNameResponse2;
};

export const paymentResponse7Schema: Schema<PaymentResponse7> = s.object<PaymentResponse7>({
  name: s.optional(s.lazy(() => paymentValidationsNameResponse2Schema)),
});
