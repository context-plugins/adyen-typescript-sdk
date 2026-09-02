import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { identificationTypeSchema, type IdentificationType } from "./identification-type.js";

export type BankIdentification = {
  country?: string;
  identification?: string;
  identificationType?: IdentificationType;
};

export const bankIdentificationSchema: Schema<BankIdentification> = s.object<BankIdentification>({
  country: s.optional(s.string()),
  identification: s.optional(s.string()),
  identificationType: s.optional(s.lazy(() => identificationTypeSchema)),
});
