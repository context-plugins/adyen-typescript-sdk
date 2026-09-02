import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ExemptionIndicator = {
  LowValue: "lowValue",
  SecureCorporate: "secureCorporate",
  TrustedBeneficiary: "trustedBeneficiary",
  TransactionRiskAnalysis: "transactionRiskAnalysis",
} as const;
export type ExemptionIndicator = (typeof ExemptionIndicator)[keyof typeof ExemptionIndicator] | (string & {});

export const exemptionIndicatorSchema: EnumSchema<ExemptionIndicator> =
  s.enumOf<ExemptionIndicator>(ExemptionIndicator);
