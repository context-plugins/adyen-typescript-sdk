import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BalanceType = {
  Balance: "balance",
  Available: "available",
  Pending: "pending",
  Reserved: "reserved",
} as const;
export type BalanceType = (typeof BalanceType)[keyof typeof BalanceType] | (string & {});

export const balanceTypeSchema: EnumSchema<BalanceType> = s.enumOf<BalanceType>(BalanceType);
