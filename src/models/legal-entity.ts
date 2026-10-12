import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The legal entity type of the account holder. This determines the information that should be
 * provided in the request.
 *
 * Possible values: **Business**, **Individual**, or **NonProfit**.
 *
 * * If set to **Business** or **NonProfit**, then `accountHolderDetails.businessDetails` must be
 *   provided, with at least one entry in the `accountHolderDetails.businessDetails.shareholders`
 *   list.
 *
 * * If set to **Individual**, then `accountHolderDetails.individualDetails` must be provided.
 */
export const LegalEntity = {
  Business: "Business",
  Individual: "Individual",
  NonProfit: "NonProfit",
  Partnership: "Partnership",
  PublicCompany: "PublicCompany",
} as const;
export type LegalEntity = (typeof LegalEntity)[keyof typeof LegalEntity] | (string & {});

export const legalEntitySchema: EnumSchema<LegalEntity> = s.enumOf<LegalEntity>(LegalEntity);
