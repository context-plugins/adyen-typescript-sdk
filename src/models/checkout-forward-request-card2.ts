import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type21Schema, type Type21 } from "./type21.js";

export type CheckoutForwardRequestCard2 = {
  cvc?: string;
  encryptedCardNumber?: string;
  encryptedExpiryMonth?: string;
  encryptedExpiryYear?: string;
  encryptedSecurityCode?: string;
  expiryMonth?: string;
  expiryYear?: string;
  holderName?: string;
  number?: string;
  type?: Type21;
};

export const checkoutForwardRequestCard2Schema: Schema<CheckoutForwardRequestCard2> =
  s.object<CheckoutForwardRequestCard2>({
    cvc: s.optional(s.string()),
    encryptedCardNumber: s.optional(s.string()),
    encryptedExpiryMonth: s.optional(s.string()),
    encryptedExpiryYear: s.optional(s.string()),
    encryptedSecurityCode: s.optional(s.string()),
    expiryMonth: s.optional(s.string()),
    expiryYear: s.optional(s.string()),
    holderName: s.optional(s.string()),
    number: s.optional(s.string()),
    type: s.optional(s.lazy(() => type21Schema)),
  });
