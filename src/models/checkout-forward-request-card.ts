import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type18Schema, type Type18 } from "./type18.js";

export type CheckoutForwardRequestCard = {
  cvc?: string;
  encryptedCardNumber?: string;
  encryptedExpiryMonth?: string;
  encryptedExpiryYear?: string;
  encryptedSecurityCode?: string;
  expiryMonth?: string;
  expiryYear?: string;
  holderName?: string;
  number?: string;
  type?: Type18;
};

export const checkoutForwardRequestCardSchema: Schema<CheckoutForwardRequestCard> =
  s.object<CheckoutForwardRequestCard>({
    cvc: s.optional(s.string()),
    encryptedCardNumber: s.optional(s.string()),
    encryptedExpiryMonth: s.optional(s.string()),
    encryptedExpiryYear: s.optional(s.string()),
    encryptedSecurityCode: s.optional(s.string()),
    expiryMonth: s.optional(s.string()),
    expiryYear: s.optional(s.string()),
    holderName: s.optional(s.string()),
    number: s.optional(s.string()),
    type: s.optional(s.lazy(() => type18Schema)),
  });
