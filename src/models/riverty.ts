import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type65Schema, type Type65 } from "./type65.js";

export type Riverty = {
  billingAddress?: string;
  checkoutAttemptId?: string;
  deliveryAddress?: string;
  deviceFingerprint?: string;
  iban?: string;
  merchantData?: string;
  personalDetails?: string;
  recurringDetailReference?: string;
  sdkData?: string;
  storedPaymentMethodId?: string;
  subtype?: string;
  type: Type65;
};

export const rivertySchema: Schema<Riverty> = s.object<Riverty>({
  billingAddress: s.optional(s.string()),
  checkoutAttemptId: s.optional(s.string()),
  deliveryAddress: s.optional(s.string()),
  deviceFingerprint: s.optional(s.string()),
  iban: s.optional(s.string()),
  merchantData: s.optional(s.string()),
  personalDetails: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  subtype: s.optional(s.string()),
  type: type65Schema,
});
