import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  additionalBankIdentificationTypeSchema,
  type AdditionalBankIdentificationType,
} from "./additional-bank-identification-type.js";

export type AdditionalBankIdentification2 = {
  code?: string;
  type?: AdditionalBankIdentificationType;
};

export const additionalBankIdentification2Schema: Schema<AdditionalBankIdentification2> =
  s.object<AdditionalBankIdentification2>({
    code: s.optional(s.string()),
    type: s.optional(s.lazy(() => additionalBankIdentificationTypeSchema)),
  });
