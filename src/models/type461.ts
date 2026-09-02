import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type461 = {
  BalanceAccount: "balanceAccount",
  AccountHolder: "accountHolder",
  BalancePlatform: "balancePlatform",
} as const;
export type Type461 = (typeof Type461)[keyof typeof Type461] | (string & {});

export const type461Schema: EnumSchema<Type461> = s.enumOf<Type461>(Type461);
