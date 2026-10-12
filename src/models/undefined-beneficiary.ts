import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UndefinedBeneficiary = {
  /** The details of the undefined beneficiary. */
  description?: string;
  /** The reference of the undefined beneficiary. */
  reference?: string;
};

export const undefinedBeneficiarySchema: Schema<UndefinedBeneficiary> = s.object<UndefinedBeneficiary>({
  description: s.optional(s.string()),
  reference: s.optional(s.string()),
});
