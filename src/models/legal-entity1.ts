import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of legal entity of the new account holder. */
export const LegalEntity1 = {
  Business: "Business",
  Individual: "Individual",
  NonProfit: "NonProfit",
  Partnership: "Partnership",
  PublicCompany: "PublicCompany",
} as const;
export type LegalEntity1 = (typeof LegalEntity1)[keyof typeof LegalEntity1] | (string & {});

export const legalEntity1Schema: EnumSchema<LegalEntity1> = s.enumOf<LegalEntity1>(LegalEntity1);
