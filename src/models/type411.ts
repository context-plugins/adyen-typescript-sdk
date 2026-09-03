import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type411 = {
  Internal: "internal",
} as const;
export type Type411 = (typeof Type411)[keyof typeof Type411] | (string & {});

export const type411Schema: EnumSchema<Type411> = s.enumOf<Type411>(Type411);
