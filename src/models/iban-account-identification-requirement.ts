import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type341Schema, type Type341 } from "./type341.js";

export type IbanAccountIdentificationRequirement = {
  description?: string;
  ibanPrefixes?: string[];
  type: Type341;
};

export const ibanAccountIdentificationRequirementSchema: Schema<IbanAccountIdentificationRequirement> =
  s.object<IbanAccountIdentificationRequirement>({
    description: s.optional(s.string()),
    ibanPrefixes: s.optional(s.array(s.string())),
    type: type341Schema,
  });
