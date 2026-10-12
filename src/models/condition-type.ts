import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Define when you want to get notified about a balance change. Possible values:
 *
 * * **greaterThan**: the balance in the account(s) exceeds the specified `value`.
 *
 * * **greaterThanOrEqual**: the balance in the account(s) reaches or exceeds the specified `value`.
 *
 * * **lessThan**: the balance in the account(s) drops below the specified `value`.
 *
 * * **lessThanOrEqual**: the balance in the account(s) reaches to drops below the specified
 *   `value`.
 */
export const ConditionType = {
  GreaterThan: "greaterThan",
  GreaterThanOrEqual: "greaterThanOrEqual",
  LessThan: "lessThan",
  LessThanOrEqual: "lessThanOrEqual",
} as const;
export type ConditionType = (typeof ConditionType)[keyof typeof ConditionType] | (string & {});

export const conditionTypeSchema: EnumSchema<ConditionType> = s.enumOf<ConditionType>(ConditionType);
