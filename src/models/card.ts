import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Card = {
  cvc?: string;
  expiryMonth?: string;
  expiryYear?: string;
  holderName?: string;
  issueNumber?: string;
  number?: string;
  startMonth?: string;
  startYear?: string;
};

export const cardSchema: Schema<Card> = s.object<Card>({
  cvc: s.optional(s.string()),
  expiryMonth: s.optional(s.string()),
  expiryYear: s.optional(s.string()),
  holderName: s.optional(s.string()),
  issueNumber: s.optional(s.string()),
  number: s.optional(s.string()),
  startMonth: s.optional(s.string()),
  startYear: s.optional(s.string()),
});
