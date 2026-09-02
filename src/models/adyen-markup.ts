import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AdyenMarkup = {
  DeductFromLiableAccount: "deductFromLiableAccount",
  DeductFromOneBalanceAccount: "deductFromOneBalanceAccount",
} as const;
export type AdyenMarkup = (typeof AdyenMarkup)[keyof typeof AdyenMarkup] | (string & {});

export const adyenMarkupSchema: EnumSchema<AdyenMarkup> = s.enumOf<AdyenMarkup>(AdyenMarkup);
