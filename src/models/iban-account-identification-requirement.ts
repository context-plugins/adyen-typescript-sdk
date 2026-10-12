import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IbanAccountIdentificationRequirement = {
  /**
   * Specifies the allowed prefixes for the international bank account number as defined in the
   * ISO-13616 standard.
   */
  description?: string;
  /**
   * Contains the list of allowed prefixes for international bank accounts. For example: NL, US, UK.
   */
  ibanPrefixes?: string[];
  /** **ibanAccountIdentificationRequirement** @default "ibanAccountIdentificationRequirement" */
  type?: "ibanAccountIdentificationRequirement";
};

export const ibanAccountIdentificationRequirementSchema: Schema<IbanAccountIdentificationRequirement> =
  s.object<IbanAccountIdentificationRequirement>({
    description: s.optional(s.string()),
    ibanPrefixes: s.optional(s.array(s.string())),
    type: s.defaulted(
      s.literal("ibanAccountIdentificationRequirement"),
      "ibanAccountIdentificationRequirement",
    ),
  });
