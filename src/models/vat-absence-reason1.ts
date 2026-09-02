import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const VatAbsenceReason1 = {
  IndustryExemption: "industryExemption",
  BelowTaxThreshold: "belowTaxThreshold",
} as const;
export type VatAbsenceReason1 = (typeof VatAbsenceReason1)[keyof typeof VatAbsenceReason1] | (string & {});

export const vatAbsenceReason1Schema: EnumSchema<VatAbsenceReason1> =
  s.enumOf<VatAbsenceReason1>(VatAbsenceReason1);
