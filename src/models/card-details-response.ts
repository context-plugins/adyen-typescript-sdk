import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardBrandDetailsSchema, type CardBrandDetails } from "./card-brand-details.js";

export type CardDetailsResponse = {
  brands?: CardBrandDetails[];
  fundingSource?: string;
  isCardCommercial?: boolean;
  issuingCountryCode?: string;
};

export const cardDetailsResponseSchema: Schema<CardDetailsResponse> = s.object<CardDetailsResponse>({
  brands: s.optional(s.array(s.lazy(() => cardBrandDetailsSchema))),
  fundingSource: s.optional(s.string()),
  isCardCommercial: s.optional(s.boolean()),
  issuingCountryCode: s.optional(s.string()),
});
