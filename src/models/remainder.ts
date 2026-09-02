import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Remainder = {
  AddToLiableAccount: "addToLiableAccount",
  AddToOneBalanceAccount: "addToOneBalanceAccount",
} as const;
export type Remainder = (typeof Remainder)[keyof typeof Remainder] | (string & {});

export const remainderSchema: EnumSchema<Remainder> = s.enumOf<Remainder>(Remainder);
