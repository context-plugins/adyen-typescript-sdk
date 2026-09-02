import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type113 = {
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
export type Type113 = (typeof Type113)[keyof typeof Type113] | (string & {});

export const type113Schema: EnumSchema<Type113> = s.enumOf<Type113>(Type113);
