import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Value4 = {
  AtmWithdraw: "atmWithdraw",
  BalanceInquiry: "balanceInquiry",
  Ecommerce: "ecommerce",
  Moto: "moto",
  Pos: "pos",
  Recurring: "recurring",
  Token: "token",
  Unknown: "unknown",
} as const;
export type Value4 = (typeof Value4)[keyof typeof Value4] | (string & {});

export const value4Schema: EnumSchema<Value4> = s.enumOf<Value4>(Value4);
