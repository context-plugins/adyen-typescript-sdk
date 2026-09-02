import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResponseAdditionalData3DSecure = {
  cardHolderInfo?: string;
  cavv?: string;
  cavvAlgorithm?: string;
  scaExemptionRequested?: string;
  threeds2CardEnrolled?: boolean;
};

export const responseAdditionalData3DSecureSchema: Schema<ResponseAdditionalData3DSecure> =
  s.object<ResponseAdditionalData3DSecure>({
    cardHolderInfo: s.optional(s.string()),
    cavv: s.optional(s.string()),
    cavvAlgorithm: s.optional(s.string()),
    scaExemptionRequested: s.optional(s.string()),
    threeds2CardEnrolled: s.optional(s.boolean()),
    _keysMap: {
      threeds2CardEnrolled: "threeds2.cardEnrolled",
    },
  });
