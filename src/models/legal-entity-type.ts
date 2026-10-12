import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The legal entity type.
 *
 * Possible values: **Business**, **Individual**, **NonProfit**, **PublicCompany**, or
 * **Partnership**.
 */
export const LegalEntityType = {
  Business: "Business",
  Individual: "Individual",
  NonProfit: "NonProfit",
  Partnership: "Partnership",
  PublicCompany: "PublicCompany",
} as const;
export type LegalEntityType = (typeof LegalEntityType)[keyof typeof LegalEntityType] | (string & {});

export const legalEntityTypeSchema: EnumSchema<LegalEntityType> = s.enumOf<LegalEntityType>(LegalEntityType);
