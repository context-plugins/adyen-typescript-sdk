import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdditionalDataRiskStandalone = {
  payPalCountryCode?: string;
  payPalEmailId?: string;
  payPalFirstName?: string;
  payPalLastName?: string;
  payPalPayerId?: string;
  payPalPhone?: string;
  payPalProtectionEligibility?: string;
  payPalTransactionId?: string;
  avsResultRaw?: string;
  bin?: string;
  cvcResultRaw?: string;
  riskToken?: string;
  threeDAuthenticated?: string;
  threeDOffered?: string;
  tokenDataType?: string;
};

export const additionalDataRiskStandaloneSchema: Schema<AdditionalDataRiskStandalone> =
  s.object<AdditionalDataRiskStandalone>({
    payPalCountryCode: s.optional(s.string()),
    payPalEmailId: s.optional(s.string()),
    payPalFirstName: s.optional(s.string()),
    payPalLastName: s.optional(s.string()),
    payPalPayerId: s.optional(s.string()),
    payPalPhone: s.optional(s.string()),
    payPalProtectionEligibility: s.optional(s.string()),
    payPalTransactionId: s.optional(s.string()),
    avsResultRaw: s.optional(s.string()),
    bin: s.optional(s.string()),
    cvcResultRaw: s.optional(s.string()),
    riskToken: s.optional(s.string()),
    threeDAuthenticated: s.optional(s.string()),
    threeDOffered: s.optional(s.string()),
    tokenDataType: s.optional(s.string()),
    _keysMap: {
      payPalCountryCode: "PayPal.CountryCode",
      payPalEmailId: "PayPal.EmailId",
      payPalFirstName: "PayPal.FirstName",
      payPalLastName: "PayPal.LastName",
      payPalPayerId: "PayPal.PayerId",
      payPalPhone: "PayPal.Phone",
      payPalProtectionEligibility: "PayPal.ProtectionEligibility",
      payPalTransactionId: "PayPal.TransactionId",
    },
  });
