import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { entryModeSchema, type EntryMode } from "./entry-mode.js";
import { paymentToken1Schema, type PaymentToken1 } from "./payment-token1.js";
import { sensitiveCardData1Schema, type SensitiveCardData1 } from "./sensitive-card-data1.js";

export type CardData1 = {
  paymentBrand?: string;
  maskedPan?: string;
  paymentAccountRef?: string;
  entryMode?: EntryMode[];
  cardCountryCode?: number;
  protectedCardData?: string;
  sensitiveCardData?: SensitiveCardData1;
  paymentToken?: PaymentToken1;
};

export const cardData1Schema: Schema<CardData1> = s.object<CardData1>({
  paymentBrand: s.optional(s.string()),
  maskedPan: s.optional(s.string()),
  paymentAccountRef: s.optional(s.string()),
  entryMode: s.optional(s.array(s.lazy(() => entryModeSchema))),
  cardCountryCode: s.optional(s.number()),
  protectedCardData: s.optional(s.string()),
  sensitiveCardData: s.optional(s.lazy(() => sensitiveCardData1Schema)),
  paymentToken: s.optional(s.lazy(() => paymentToken1Schema)),
  _keysMap: {
    paymentBrand: "PaymentBrand",
    maskedPan: "MaskedPan",
    paymentAccountRef: "PaymentAccountRef",
    entryMode: "EntryMode",
    cardCountryCode: "CardCountryCode",
    protectedCardData: "ProtectedCardData",
    sensitiveCardData: "SensitiveCardData",
    paymentToken: "PaymentToken",
  },
});
