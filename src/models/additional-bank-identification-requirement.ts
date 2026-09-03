import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  additionalBankIdentificationTypeSchema,
  type AdditionalBankIdentificationType,
} from "./additional-bank-identification-type.js";

export type AdditionalBankIdentificationRequirement = {
  additionalBankIdentificationType?: AdditionalBankIdentificationType;
  description?: string;
  type: "additionalBankIdentificationRequirement";
};

export const additionalBankIdentificationRequirementSchema: Schema<AdditionalBankIdentificationRequirement> =
  s.object<AdditionalBankIdentificationRequirement>({
    additionalBankIdentificationType: s.optional(s.lazy(() => additionalBankIdentificationTypeSchema)),
    description: s.optional(s.string()),
    type: s.literal("additionalBankIdentificationRequirement"),
  });
