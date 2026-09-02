import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type471 = {
  Balance: "balance",
} as const;
export type Type471 = (typeof Type471)[keyof typeof Type471] | (string & {});

export const type471Schema: EnumSchema<Type471> = s.enumOf<Type471>(Type471);
