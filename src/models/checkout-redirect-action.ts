import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type24Schema, type Type24 } from "./type24.js";

export type CheckoutRedirectAction = {
  data?: Record<string, string>;
  method?: string;
  paymentMethodType?: string;
  type: Type24;
  url?: string;
};

export const checkoutRedirectActionSchema: Schema<CheckoutRedirectAction> = s.object<CheckoutRedirectAction>({
  data: s.optional(s.record(s.string(), s.string())),
  method: s.optional(s.string()),
  paymentMethodType: s.optional(s.string()),
  type: type24Schema,
  url: s.optional(s.string()),
});
