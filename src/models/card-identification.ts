import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CardIdentification = {
  expiryMonth?: string;
  expiryYear?: string;
  issueNumber?: string;
  number?: string;
  startMonth?: string;
  startYear?: string;
  storedPaymentMethodId?: string;
};

export const cardIdentificationSchema: Schema<CardIdentification> = s.object<CardIdentification>({
  expiryMonth: s.optional(s.string()),
  expiryYear: s.optional(s.string()),
  issueNumber: s.optional(s.string()),
  number: s.optional(s.string()),
  startMonth: s.optional(s.string()),
  startYear: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
});
