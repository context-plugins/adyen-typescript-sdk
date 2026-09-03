import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subtypeSchema, type Subtype } from "./subtype.js";

export type PayPal = {
  checkoutAttemptId?: string;
  orderId?: string;
  payeePreferred?: string;
  payerId?: string;
  payerSelected?: string;
  recurringDetailReference?: string;
  sdkData?: string;
  storedPaymentMethodId?: string;
  subtype?: Subtype;
  type: "paypal";
};

export const payPalSchema: Schema<PayPal> = s.object<PayPal>({
  checkoutAttemptId: s.optional(s.string()),
  orderId: s.optional(s.string()),
  payeePreferred: s.optional(s.string()),
  payerId: s.optional(s.string()),
  payerSelected: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  subtype: s.optional(s.lazy(() => subtypeSchema)),
  type: s.literal("paypal"),
  _keysMap: {
    orderId: "orderID",
    payerId: "payerID",
  },
});
