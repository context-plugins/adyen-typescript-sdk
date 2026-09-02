import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { name6Schema, type Name6 } from "./name6.js";

export type PaymentValidations2 = {
  name?: Name6;
};

export const paymentValidations2Schema: Schema<PaymentValidations2> = s.object<PaymentValidations2>({
  name: s.optional(s.lazy(() => name6Schema)),
});
