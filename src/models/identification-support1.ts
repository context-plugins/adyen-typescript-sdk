import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Support of the loyalty account identification. Allows knowing where and how you have found the
 * loyalty account identification. Possible values:
 * * **HybridCard**
 * * **LinkedCard**
 * * **LoyaltyCard**
 * * **NoCard**
 */
export const IdentificationSupport1 = {
  NoCard: "NoCard",
  LoyaltyCard: "LoyaltyCard",
  HybridCard: "HybridCard",
  LinkedCard: "LinkedCard",
} as const;
export type IdentificationSupport1 =
  | (typeof IdentificationSupport1)[keyof typeof IdentificationSupport1]
  | (string & {});

export const identificationSupport1Schema: EnumSchema<IdentificationSupport1> =
  s.enumOf<IdentificationSupport1>(IdentificationSupport1);
