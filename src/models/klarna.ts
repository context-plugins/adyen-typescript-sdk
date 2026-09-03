import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type34Schema, type Type34 } from "./type34.js";

export type Klarna = {
  billingAddress?: string;
  checkoutAttemptId?: string;
  deliveryAddress?: string;
  merchantData?: string;
  personalDetails?: string;
  recurringDetailReference?: string;
  sdkData?: string;
  storedPaymentMethodId?: string;
  subtype?: string;
  type: Type34;
};

export const klarnaSchema: Schema<Klarna> = s.object<Klarna>({
  billingAddress: s.optional(s.string()),
  checkoutAttemptId: s.optional(s.string()),
  deliveryAddress: s.optional(s.string()),
  merchantData: s.optional(s.string()),
  personalDetails: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  subtype: s.optional(s.string()),
  type: type34Schema,
});
