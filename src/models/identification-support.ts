import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
