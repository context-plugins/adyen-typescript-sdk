import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type231 = {
  NoLocal: "noLocal",
} as const;
export type Type231 = (typeof Type231)[keyof typeof Type231] | (string & {});

export const type231Schema: EnumSchema<Type231> = s.enumOf<Type231>(Type231);
