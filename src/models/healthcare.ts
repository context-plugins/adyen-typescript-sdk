import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Healthcare = {
  dentalValue?: number;
  otherMedicalValue?: number;
  prescriptionValue?: number;
  totalHealthcareValue: number;
  visionPrescriptionValue?: number;
};

export const healthcareSchema: Schema<Healthcare> = s.object<Healthcare>({
  dentalValue: s.optional(s.number()),
  otherMedicalValue: s.optional(s.number()),
  prescriptionValue: s.optional(s.number()),
  totalHealthcareValue: s.number(),
  visionPrescriptionValue: s.optional(s.number()),
});
