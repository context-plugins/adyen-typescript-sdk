import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type301 = {
  UsLocal: "usLocal",
} as const;
export type Type301 = (typeof Type301)[keyof typeof Type301] | (string & {});

export const type301Schema: EnumSchema<Type301> = s.enumOf<Type301>(Type301);
