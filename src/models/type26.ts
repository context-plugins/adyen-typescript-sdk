import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type26 = {
  ThreeDs2: "threeDS2",
} as const;
export type Type26 = (typeof Type26)[keyof typeof Type26] | (string & {});

export const type26Schema: EnumSchema<Type26> = s.enumOf<Type26>(Type26);
