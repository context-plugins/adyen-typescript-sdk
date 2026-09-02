import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LegalEntity = {
  Business: "Business",
  Individual: "Individual",
  NonProfit: "NonProfit",
  Partnership: "Partnership",
  PublicCompany: "PublicCompany",
} as const;
export type LegalEntity = (typeof LegalEntity)[keyof typeof LegalEntity] | (string & {});

export const legalEntitySchema: EnumSchema<LegalEntity> = s.enumOf<LegalEntity>(LegalEntity);
