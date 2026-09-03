import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type91 = {
  Back: "BACK",
  Front: "FRONT",
  Undefined: "UNDEFINED",
} as const;
export type Type91 = (typeof Type91)[keyof typeof Type91] | (string & {});

export const type91Schema: EnumSchema<Type91> = s.enumOf<Type91>(Type91);
