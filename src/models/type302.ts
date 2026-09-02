import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type302 = {
  Accounting: "accounting",
  Tracing: "tracing",
  Tracking: "tracking",
} as const;
export type Type302 = (typeof Type302)[keyof typeof Type302] | (string & {});

export const type302Schema: EnumSchema<Type302> = s.enumOf<Type302>(Type302);
