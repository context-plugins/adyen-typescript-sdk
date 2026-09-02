import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ConditionType = {
  GreaterThan: "greaterThan",
  GreaterThanOrEqual: "greaterThanOrEqual",
  LessThan: "lessThan",
  LessThanOrEqual: "lessThanOrEqual",
} as const;
export type ConditionType = (typeof ConditionType)[keyof typeof ConditionType] | (string & {});

export const conditionTypeSchema: EnumSchema<ConditionType> = s.enumOf<ConditionType>(ConditionType);
