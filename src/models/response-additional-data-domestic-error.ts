import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResponseAdditionalDataDomesticError = {
  domesticRefusalReasonRaw?: string;
  domesticShopperAdvice?: string;
};

export const responseAdditionalDataDomesticErrorSchema: Schema<ResponseAdditionalDataDomesticError> =
  s.object<ResponseAdditionalDataDomesticError>({
    domesticRefusalReasonRaw: s.optional(s.string()),
    domesticShopperAdvice: s.optional(s.string()),
  });
