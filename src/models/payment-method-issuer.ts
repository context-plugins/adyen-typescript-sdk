import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentMethodIssuer = {
  disabled?: boolean;
  id: string;
  name: string;
};

export const paymentMethodIssuerSchema: Schema<PaymentMethodIssuer> = s.object<PaymentMethodIssuer>({
  disabled: s.optional(s.boolean()),
  id: s.string(),
  name: s.string(),
});
