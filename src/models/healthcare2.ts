import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Healthcare2 = {
  dentalValue?: number;
  otherMedicalValue?: number;
  prescriptionValue?: number;
  totalHealthcareValue: number;
  visionPrescriptionValue?: number;
};

export const healthcare2Schema: Schema<Healthcare2> = s.object<Healthcare2>({
  dentalValue: s.optional(s.number()),
  otherMedicalValue: s.optional(s.number()),
  prescriptionValue: s.optional(s.number()),
  totalHealthcareValue: s.number(),
  visionPrescriptionValue: s.optional(s.number()),
});
