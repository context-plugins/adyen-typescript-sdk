import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FinancingType2 = {
  HardwareFinancing: "hardwareFinancing",
  BusinessFinancing: "businessFinancing",
} as const;
export type FinancingType2 = (typeof FinancingType2)[keyof typeof FinancingType2] | (string & {});

export const financingType2Schema: EnumSchema<FinancingType2> = s.enumOf<FinancingType2>(FinancingType2);
