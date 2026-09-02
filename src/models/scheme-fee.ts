import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SchemeFee = {
  DeductFromLiableAccount: "deductFromLiableAccount",
  DeductFromOneBalanceAccount: "deductFromOneBalanceAccount",
} as const;
export type SchemeFee = (typeof SchemeFee)[keyof typeof SchemeFee] | (string & {});

export const schemeFeeSchema: EnumSchema<SchemeFee> = s.enumOf<SchemeFee>(SchemeFee);
