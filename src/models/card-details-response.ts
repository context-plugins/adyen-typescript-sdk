import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardBrandDetailsSchema, type CardBrandDetails } from "./card-brand-details.js";

export type CardDetailsResponse = {
  /** The list of brands identified for the card. */
  brands?: CardBrandDetails[];
  /** The funding source of the card, for example **DEBIT**, **CREDIT**, or **PREPAID**. */
  fundingSource?: string;
  /**
   * Indicates if this is a commercial card or a consumer card. If **true**, it is a commercial
   * card. If **false**, it is a consumer card.
   */
  isCardCommercial?: boolean;
  /** The two-letter country code of the country where the card was issued. */
  issuingCountryCode?: string;
};

export const cardDetailsResponseSchema: Schema<CardDetailsResponse> = s.object<CardDetailsResponse>({
  brands: s.optional(s.array(s.lazy(() => cardBrandDetailsSchema))),
  fundingSource: s.optional(s.string()),
  isCardCommercial: s.optional(s.boolean()),
  issuingCountryCode: s.optional(s.string()),
});
