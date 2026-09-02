import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CardBin = {
  bin?: string;
  commercial?: boolean;
  fundingSource?: string;
  fundsAvailability?: string;
  issuerBin?: string;
  issuingBank?: string;
  issuingCountry?: string;
  issuingCurrency?: string;
  paymentMethod?: string;
  payoutEligible?: string;
  summary?: string;
};

export const cardBinSchema: Schema<CardBin> = s.object<CardBin>({
  bin: s.optional(s.string()),
  commercial: s.optional(s.boolean()),
  fundingSource: s.optional(s.string()),
  fundsAvailability: s.optional(s.string()),
  issuerBin: s.optional(s.string()),
  issuingBank: s.optional(s.string()),
  issuingCountry: s.optional(s.string()),
  issuingCurrency: s.optional(s.string()),
  paymentMethod: s.optional(s.string()),
  payoutEligible: s.optional(s.string()),
  summary: s.optional(s.string()),
});
