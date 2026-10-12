import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResponseAdditionalDataDomesticError = {
  /**
   * The reason the transaction was declined, given by the local issuer. Currently available for
   * merchants in Japan.
   */
  domesticRefusalReasonRaw?: string;
  /**
   * The action the shopper should take, in a local language. Currently available in Japanese, for
   * merchants in Japan.
   */
  domesticShopperAdvice?: string;
};

export const responseAdditionalDataDomesticErrorSchema: Schema<ResponseAdditionalDataDomesticError> =
  s.object<ResponseAdditionalDataDomesticError>({
    domesticRefusalReasonRaw: s.optional(s.string()),
    domesticShopperAdvice: s.optional(s.string()),
  });
