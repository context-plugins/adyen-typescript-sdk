import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TermsOfServiceType = {
  AdyenAccount: "adyenAccount",
  AdyenCapital: "adyenCapital",
  AdyenCard: "adyenCard",
  AdyenChargeCard: "adyenChargeCard",
  AdyenForPlatformsAdvanced: "adyenForPlatformsAdvanced",
  AdyenForPlatformsManage: "adyenForPlatformsManage",
  AdyenFranchisee: "adyenFranchisee",
  AdyenIssuing: "adyenIssuing",
  AdyenPccr: "adyenPccr",
  KycOnInvite: "kycOnInvite",
} as const;
export type TermsOfServiceType = (typeof TermsOfServiceType)[keyof typeof TermsOfServiceType] | (string & {});

export const termsOfServiceTypeSchema: EnumSchema<TermsOfServiceType> =
  s.enumOf<TermsOfServiceType>(TermsOfServiceType);
