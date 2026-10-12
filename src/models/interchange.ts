import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Deducts the interchange fee from specified balance account.
 *
 * Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**.
 */
export const Interchange = {
  DeductFromLiableAccount: "deductFromLiableAccount",
  DeductFromOneBalanceAccount: "deductFromOneBalanceAccount",
} as const;
export type Interchange = (typeof Interchange)[keyof typeof Interchange] | (string & {});

export const interchangeSchema: EnumSchema<Interchange> = s.enumOf<Interchange>(Interchange);
