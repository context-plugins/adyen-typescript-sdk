import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount12Schema, type Amount12 } from "./amount12.js";
import { amount13Schema, type Amount13 } from "./amount13.js";

export type CheckoutOrderResponse1 = {
  amount?: Amount12;
  expiresAt?: string;
  orderData?: string;
  pspReference: string;
  reference?: string;
  remainingAmount?: Amount13;
};

export const checkoutOrderResponse1Schema: Schema<CheckoutOrderResponse1> = s.object<CheckoutOrderResponse1>({
  amount: s.optional(s.lazy(() => amount12Schema)),
  expiresAt: s.optional(s.string()),
  orderData: s.optional(s.string()),
  pspReference: s.string(),
  reference: s.optional(s.string()),
  remainingAmount: s.optional(s.lazy(() => amount13Schema)),
});
