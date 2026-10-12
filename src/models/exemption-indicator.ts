import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the exemption type that was applied by the issuer to the authentication, if exemption
 * applied. Allowed values:
 * * `lowValue`
 * * `secureCorporate`
 * * `trustedBeneficiary`
 * * `transactionRiskAnalysis`
 */
export const ExemptionIndicator = {
  LowValue: "lowValue",
  SecureCorporate: "secureCorporate",
  TrustedBeneficiary: "trustedBeneficiary",
  TransactionRiskAnalysis: "transactionRiskAnalysis",
} as const;
export type ExemptionIndicator = (typeof ExemptionIndicator)[keyof typeof ExemptionIndicator] | (string & {});

export const exemptionIndicatorSchema: EnumSchema<ExemptionIndicator> =
  s.enumOf<ExemptionIndicator>(ExemptionIndicator);
