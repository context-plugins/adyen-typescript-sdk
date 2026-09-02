import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type171 = {
  CaLocal: "caLocal",
} as const;
export type Type171 = (typeof Type171)[keyof typeof Type171] | (string & {});

export const type171Schema: EnumSchema<Type171> = s.enumOf<Type171>(Type171);
