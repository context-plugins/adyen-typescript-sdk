import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentMethodToStore = {
  brand?: string;
  cvc?: string;
  encryptedCard?: string;
  encryptedCardNumber?: string;
  encryptedExpiryMonth?: string;
  encryptedExpiryYear?: string;
  encryptedSecurityCode?: string;
  expiryMonth?: string;
  expiryYear?: string;
  holderName?: string;
  number?: string;
  type?: string;
};

export const paymentMethodToStoreSchema: Schema<PaymentMethodToStore> = s.object<PaymentMethodToStore>({
  brand: s.optional(s.string()),
  cvc: s.optional(s.string()),
  encryptedCard: s.optional(s.string()),
  encryptedCardNumber: s.optional(s.string()),
  encryptedExpiryMonth: s.optional(s.string()),
  encryptedExpiryYear: s.optional(s.string()),
  encryptedSecurityCode: s.optional(s.string()),
  expiryMonth: s.optional(s.string()),
  expiryYear: s.optional(s.string()),
  holderName: s.optional(s.string()),
  number: s.optional(s.string()),
  type: s.optional(s.string()),
});
