import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CheckTaxElectronicDeliveryConsentResponse = {
  /** Consent to electronically deliver tax form US1099-K. */
  us1099K?: boolean;
};

export const checkTaxElectronicDeliveryConsentResponseSchema: Schema<CheckTaxElectronicDeliveryConsentResponse> =
  s.object<CheckTaxElectronicDeliveryConsentResponse>({
    us1099K: s.optional(s.boolean()),
    _keysMap: {
      us1099K: "US1099k",
    },
  });
