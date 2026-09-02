import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { name6Schema, type Name6 } from "./name6.js";

export type PaymentValidations = {
  name?: Name6;
};

export const paymentValidationsSchema: Schema<PaymentValidations> = s.object<PaymentValidations>({
  name: s.optional(s.lazy(() => name6Schema)),
});
