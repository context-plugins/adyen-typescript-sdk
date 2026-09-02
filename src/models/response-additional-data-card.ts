import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResponseAdditionalDataCard = {
  cardAltId?: string;
  cardBin?: string;
  cardHolderName?: string;
  cardIssuingBank?: string;
  cardIssuingCountry?: string;
  cardIssuingCurrency?: string;
  cardPaymentMethod?: string;
  cardProductId?: string;
  cardSummary?: string;
  issuerBin?: string;
};

export const responseAdditionalDataCardSchema: Schema<ResponseAdditionalDataCard> =
  s.object<ResponseAdditionalDataCard>({
    cardAltId: s.optional(s.string()),
    cardBin: s.optional(s.string()),
    cardHolderName: s.optional(s.string()),
    cardIssuingBank: s.optional(s.string()),
    cardIssuingCountry: s.optional(s.string()),
    cardIssuingCurrency: s.optional(s.string()),
    cardPaymentMethod: s.optional(s.string()),
    cardProductId: s.optional(s.string()),
    cardSummary: s.optional(s.string()),
    issuerBin: s.optional(s.string()),
    _keysMap: {
      cardAltId: "cardAltID",
    },
  });
