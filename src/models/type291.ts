import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type291 = {
  UkLocal: "ukLocal",
} as const;
export type Type291 = (typeof Type291)[keyof typeof Type291] | (string & {});

export const type291Schema: EnumSchema<Type291> = s.enumOf<Type291>(Type291);
