import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PeriodUnit1 = {
  Daily: "Daily",
  Weekly: "Weekly",
  Monthly: "Monthly",
  Annual: "Annual",
} as const;
export type PeriodUnit1 = (typeof PeriodUnit1)[keyof typeof PeriodUnit1] | (string & {});

export const periodUnit1Schema: EnumSchema<PeriodUnit1> = s.enumOf<PeriodUnit1>(PeriodUnit1);
