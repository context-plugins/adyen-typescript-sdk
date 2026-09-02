import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CardDetailsRequest = {
  cardNumber?: string;
  countryCode?: string;
  encryptedCardNumber?: string;
  merchantAccount: string;
  supportedBrands?: string[];
};

export const cardDetailsRequestSchema: Schema<CardDetailsRequest> = s.object<CardDetailsRequest>({
  cardNumber: s.optional(s.string()),
  countryCode: s.optional(s.string()),
  encryptedCardNumber: s.optional(s.string()),
  merchantAccount: s.string(),
  supportedBrands: s.optional(s.array(s.string())),
});
