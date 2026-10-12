import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { kycCheckResult2Schema, type KycCheckResult2 } from "./kyc-check-result2.js";
import {
  kycLegalArrangementCheckResultSchema,
  type KycLegalArrangementCheckResult,
} from "./kyc-legal-arrangement-check-result.js";
import {
  kycLegalArrangementEntityCheckResultSchema,
  type KycLegalArrangementEntityCheckResult,
} from "./kyc-legal-arrangement-entity-check-result.js";
import {
  kycPayoutMethodCheckResultSchema,
  type KycPayoutMethodCheckResult,
} from "./kyc-payout-method-check-result.js";
import {
  kycShareholderCheckResultSchema,
  type KycShareholderCheckResult,
} from "./kyc-shareholder-check-result.js";
import { kycSignatoryCheckResultSchema, type KycSignatoryCheckResult } from "./kyc-signatory-check-result.js";
import {
  kycUltimateParentCompanyCheckResultSchema,
  type KycUltimateParentCompanyCheckResult,
} from "./kyc-ultimate-parent-company-check-result.js";

/** The details of KYC Verification of the account holder. */
export type KycVerificationResult1 = {
  /** The results of the checks on the account holder. */
  accountHolder?: KycCheckResult2;
  /** The results of the checks on the legal arrangements. */
  legalArrangements?: KycLegalArrangementCheckResult[];
  /** The results of the checks on the legal arrangement entities. */
  legalArrangementsEntities?: KycLegalArrangementEntityCheckResult[];
  /** The results of the checks on the payout methods. */
  payoutMethods?: KycPayoutMethodCheckResult[];
  /** The results of the checks on the shareholders. */
  shareholders?: KycShareholderCheckResult[];
  /** The results of the checks on the signatories. */
  signatories?: KycSignatoryCheckResult[];
  /** The result of the check on the Ultimate Parent Company. */
  ultimateParentCompany?: KycUltimateParentCompanyCheckResult[];
};

export const kycVerificationResult1Schema: Schema<KycVerificationResult1> = s.object<KycVerificationResult1>({
  accountHolder: s.optional(s.lazy(() => kycCheckResult2Schema)),
  legalArrangements: s.optional(s.array(s.lazy(() => kycLegalArrangementCheckResultSchema))),
  legalArrangementsEntities: s.optional(s.array(s.lazy(() => kycLegalArrangementEntityCheckResultSchema))),
  payoutMethods: s.optional(s.array(s.lazy(() => kycPayoutMethodCheckResultSchema))),
  shareholders: s.optional(s.array(s.lazy(() => kycShareholderCheckResultSchema))),
  signatories: s.optional(s.array(s.lazy(() => kycSignatoryCheckResultSchema))),
  ultimateParentCompany: s.optional(s.array(s.lazy(() => kycUltimateParentCompanyCheckResultSchema))),
});
