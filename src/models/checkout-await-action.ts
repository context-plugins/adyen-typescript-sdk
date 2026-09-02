import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type18Schema, type Type18 } from "./type18.js";

export type CheckoutAwaitAction = {
  paymentData?: string;
  paymentMethodType?: string;
  type: Type18;
  url?: string;
};

export const checkoutAwaitActionSchema: Schema<CheckoutAwaitAction> = s.object<CheckoutAwaitAction>({
  paymentData: s.optional(s.string()),
  paymentMethodType: s.optional(s.string()),
  type: type18Schema,
  url: s.optional(s.string()),
});
