import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type282 = {
  UsAch: "usAch",
} as const;
export type Type282 = (typeof Type282)[keyof typeof Type282] | (string & {});

export const type282Schema: EnumSchema<Type282> = s.enumOf<Type282>(Type282);
