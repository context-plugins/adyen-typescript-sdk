import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SetTaxElectronicDeliveryConsentRequest = {
  /** Consent to electronically deliver tax form US1099-K. */
  us1099K?: boolean;
};

export const setTaxElectronicDeliveryConsentRequestSchema: Schema<SetTaxElectronicDeliveryConsentRequest> =
  s.object<SetTaxElectronicDeliveryConsentRequest>({
    us1099K: s.optional(s.boolean()),
    _keysMap: {
      us1099K: "US1099k",
    },
  });
