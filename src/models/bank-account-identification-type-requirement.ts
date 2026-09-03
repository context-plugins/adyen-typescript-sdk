import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bankAccountIdentificationTypeSchema,
  type BankAccountIdentificationType,
} from "./bank-account-identification-type.js";

export type BankAccountIdentificationTypeRequirement = {
  bankAccountIdentificationTypes?: BankAccountIdentificationType[];
  description?: string;
  type: "bankAccountIdentificationTypeRequirement";
};

export const bankAccountIdentificationTypeRequirementSchema: Schema<BankAccountIdentificationTypeRequirement> =
  s.object<BankAccountIdentificationTypeRequirement>({
    bankAccountIdentificationTypes: s.optional(s.array(s.lazy(() => bankAccountIdentificationTypeSchema))),
    description: s.optional(s.string()),
    type: s.literal("bankAccountIdentificationTypeRequirement"),
  });
