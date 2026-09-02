import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { balanceTypeSchema, type BalanceType } from "./balance-type.js";
import { conditionTypeSchema, type ConditionType } from "./condition-type.js";

export type Condition = {
  balanceType: BalanceType;
  conditionType: ConditionType;
  value: number;
};

export const conditionSchema: Schema<Condition> = s.object<Condition>({
  balanceType: balanceTypeSchema,
  conditionType: conditionTypeSchema,
  value: s.number(),
});
