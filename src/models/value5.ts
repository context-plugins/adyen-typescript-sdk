import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Value5 = {
  BalanceAccount: "balanceAccount",
  BusinessAccount: "businessAccount",
} as const;
export type Value5 = (typeof Value5)[keyof typeof Value5] | (string & {});

export const value5Schema: EnumSchema<Value5> = s.enumOf<Value5>(Value5);
