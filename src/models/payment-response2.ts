import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  paymentValidationsNameResponse2Schema,
  type PaymentValidationsNameResponse2,
} from "./payment-validations-name-response2.js";

/**
 * The object that contains the validation outcomes. Only returned if `resultCode` is **Authorised**
 * and if you have requested a payment validation in the request.
 */
export type PaymentResponse2 = {
  /**
   * Object that contains the status and outcomes of the [name
   * validation](https://docs.adyen.com/payment-methods/cards/name-validation).
   */
  name?: PaymentValidationsNameResponse2;
};

export const paymentResponse2Schema: Schema<PaymentResponse2> = s.object<PaymentResponse2>({
  name: s.optional(s.lazy(() => paymentValidationsNameResponse2Schema)),
});
