import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount12Schema, type Amount12 } from "./amount12.js";
import { amount13Schema, type Amount13 } from "./amount13.js";

export type CheckoutOrderResponse = {
  /** The initial amount of the order. */
  amount?: Amount12;
  /** The expiry date for the order. */
  expiresAt?: string;
  /** The encrypted order data. */
  orderData?: string;
  /** The `pspReference` that belongs to the order. */
  pspReference: string;
  /** The merchant reference for the order. */
  reference?: string;
  /** The updated remaining amount. */
  remainingAmount?: Amount13;
};

export const checkoutOrderResponseSchema: Schema<CheckoutOrderResponse> = s.object<CheckoutOrderResponse>({
  amount: s.optional(s.lazy(() => amount12Schema)),
  expiresAt: s.optional(s.string()),
  orderData: s.optional(s.string()),
  pspReference: s.string(),
  reference: s.optional(s.string()),
  remainingAmount: s.optional(s.lazy(() => amount13Schema)),
});
