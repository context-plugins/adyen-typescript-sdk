import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  additionalBankIdentificationTypeSchema,
  type AdditionalBankIdentificationType,
} from "./additional-bank-identification-type.js";

export type AdditionalBankIdentification11 = {
  code?: string;
  type?: AdditionalBankIdentificationType;
};

export const additionalBankIdentification11Schema: Schema<AdditionalBankIdentification11> =
  s.object<AdditionalBankIdentification11>({
    code: s.optional(s.string()),
    type: s.optional(s.lazy(() => additionalBankIdentificationTypeSchema)),
  });
