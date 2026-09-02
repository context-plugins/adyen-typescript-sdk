import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TemporaryServices = {
  employeeName?: string;
  endDate?: string;
  hourRate?: number;
  hoursWorked?: number;
  jobDescription?: string;
  serviceRequestor?: string;
  startDate?: string;
};

export const temporaryServicesSchema: Schema<TemporaryServices> = s.object<TemporaryServices>({
  employeeName: s.optional(s.string()),
  endDate: s.optional(s.dateOnly()),
  hourRate: s.optional(s.number()),
  hoursWorked: s.optional(s.number()),
  jobDescription: s.optional(s.string()),
  serviceRequestor: s.optional(s.string()),
  startDate: s.optional(s.dateOnly()),
});
