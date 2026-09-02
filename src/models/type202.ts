import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type202 = {
  Estimation: "estimation",
} as const;
export type Type202 = (typeof Type202)[keyof typeof Type202] | (string & {});

export const type202Schema: EnumSchema<Type202> = s.enumOf<Type202>(Type202);
