import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subtype1Schema, type Subtype1 } from "./subtype1.js";
import { type54Schema, type Type54 } from "./type54.js";

export type PayPal = {
  checkoutAttemptId?: string;
  orderId?: string;
  payeePreferred?: string;
  payerId?: string;
  payerSelected?: string;
  recurringDetailReference?: string;
  sdkData?: string;
  storedPaymentMethodId?: string;
  subtype?: Subtype1;
  type: Type54;
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
  subtype: s.optional(s.lazy(() => subtype1Schema)),
  type: type54Schema,
  _keysMap: {
    orderId: "orderID",
    payerId: "payerID",
  },
});
