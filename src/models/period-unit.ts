import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PeriodUnit = {
  Daily: "Daily",
  Weekly: "Weekly",
  Monthly: "Monthly",
  Annual: "Annual",
} as const;
export type PeriodUnit = (typeof PeriodUnit)[keyof typeof PeriodUnit] | (string & {});

export const periodUnitSchema: EnumSchema<PeriodUnit> = s.enumOf<PeriodUnit>(PeriodUnit);
