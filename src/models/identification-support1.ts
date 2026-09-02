import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
