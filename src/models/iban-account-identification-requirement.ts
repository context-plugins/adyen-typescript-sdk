import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IbanAccountIdentificationRequirement = {
  description?: string;
  ibanPrefixes?: string[];
  type: "ibanAccountIdentificationRequirement";
};

export const ibanAccountIdentificationRequirementSchema: Schema<IbanAccountIdentificationRequirement> =
  s.object<IbanAccountIdentificationRequirement>({
    description: s.optional(s.string()),
    ibanPrefixes: s.optional(s.array(s.string())),
    type: s.literal("ibanAccountIdentificationRequirement"),
  });
