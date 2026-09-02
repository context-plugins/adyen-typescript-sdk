import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LegalEntity2 = {
  Business: "Business",
  Individual: "Individual",
  NonProfit: "NonProfit",
  Partnership: "Partnership",
  PublicCompany: "PublicCompany",
} as const;
export type LegalEntity2 = (typeof LegalEntity2)[keyof typeof LegalEntity2] | (string & {});

export const legalEntity2Schema: EnumSchema<LegalEntity2> = s.enumOf<LegalEntity2>(LegalEntity2);
