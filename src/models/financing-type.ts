import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FinancingType = {
  HardwareFinancing: "hardwareFinancing",
  BusinessFinancing: "businessFinancing",
} as const;
export type FinancingType = (typeof FinancingType)[keyof typeof FinancingType] | (string & {});

export const financingTypeSchema: EnumSchema<FinancingType> = s.enumOf<FinancingType>(FinancingType);
