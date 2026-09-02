import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type261 = {
  PlLocal: "plLocal",
} as const;
export type Type261 = (typeof Type261)[keyof typeof Type261] | (string & {});

export const type261Schema: EnumSchema<Type261> = s.enumOf<Type261>(Type261);
