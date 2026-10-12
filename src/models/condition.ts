import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { balanceTypeSchema, type BalanceType } from "./balance-type.js";
import { conditionTypeSchema, type ConditionType } from "./condition-type.js";

export type Condition = {
  /**
   * Define the type of balance about which you want to get notified. Possible values:
   *
   * * **available**: the balance available for use.
   *
   * * **balance**: the sum of transactions that have already been settled.
   *
   * * **pending**: the sum of transactions that will be settled in the future.
   *
   * * **reserved**: the balance currently held in reserve.
   */
  balanceType: BalanceType;
  /**
   * Define when you want to get notified about a balance change. Possible values:
   *
   * * **greaterThan**: the balance in the account(s) exceeds the specified `value`.
   *
   * * **greaterThanOrEqual**: the balance in the account(s) reaches or exceeds the specified
   *   `value`.
   *
   * * **lessThan**: the balance in the account(s) drops below the specified `value`.
   *
   * * **lessThanOrEqual**: the balance in the account(s) reaches to drops below the specified
   *   `value`.
   */
  conditionType: ConditionType;
  /** The value limit in the specified balance type and currency, in minor units. */
  value: number;
};

export const conditionSchema: Schema<Condition> = s.object<Condition>({
  balanceType: balanceTypeSchema,
  conditionType: conditionTypeSchema,
  value: s.int(),
});
