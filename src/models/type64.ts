import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type64 = {
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
export type Type64 = (typeof Type64)[keyof typeof Type64] | (string & {});

export const type64Schema: EnumSchema<Type64> = s.enumOf<Type64>(Type64);
