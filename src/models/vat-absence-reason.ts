import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const VatAbsenceReason = {
  IndustryExemption: "industryExemption",
  BelowTaxThreshold: "belowTaxThreshold",
} as const;
export type VatAbsenceReason = (typeof VatAbsenceReason)[keyof typeof VatAbsenceReason] | (string & {});

export const vatAbsenceReasonSchema: EnumSchema<VatAbsenceReason> =
  s.enumOf<VatAbsenceReason>(VatAbsenceReason);
