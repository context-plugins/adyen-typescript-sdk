import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Support of the loyalty account identification. Allows knowing where and how you have found the
 * loyalty account identification. Possible values:
 * * **NoCard**
 * * **LoyaltyCard**
 * * **HybridCard**
 * * **LinkedCard**
 */
export const IdentificationSupport = {
  NoCard: "NoCard",
  LoyaltyCard: "LoyaltyCard",
  HybridCard: "HybridCard",
  LinkedCard: "LinkedCard",
} as const;
export type IdentificationSupport =
  | (typeof IdentificationSupport)[keyof typeof IdentificationSupport]
  | (string & {});

export const identificationSupportSchema: EnumSchema<IdentificationSupport> =
  s.enumOf<IdentificationSupport>(IdentificationSupport);
