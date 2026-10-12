import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
export const BalanceType = {
  Balance: "balance",
  Available: "available",
  Pending: "pending",
  Reserved: "reserved",
} as const;
export type BalanceType = (typeof BalanceType)[keyof typeof BalanceType] | (string & {});

export const balanceTypeSchema: EnumSchema<BalanceType> = s.enumOf<BalanceType>(BalanceType);
